import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchGoods } from '../store/actions/goodActions';
import { CatalogItem } from '../components/catalogItem';
import { FilterPanel } from '../components/filterPanel';
import { MainTop } from '../components/mainTop';
import ReactPaginate from 'react-paginate';

const itemsPerPage = 6;

export function Catalog() {
  const { error, loading, goods } = useAppSelector((state) => state.good);
  const page = useRef(1);
  const dispatch = useAppDispatch();

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  let currentGoods = goods.slice(itemOffset, endOffset);

  useEffect(() => {
    dispatch(fetchGoods(page.current, itemsPerPage));
  }, [dispatch]);

  const pageCount = Math.ceil(goods.length / itemsPerPage);
  const pageChangeHandler = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % goods.length;
    setItemOffset(newOffset);
  };

  return (
    <main className='main'>
      <MainTop />
      {error && <p className='text-error'>{error}</p>}
      {loading && <p className='text-loading'>Loading...</p>}
      <div className='main-content'>
        <FilterPanel />
        <div className='catalog-list'>
          {currentGoods.map((el) => (
            <CatalogItem key={el.id} good={el} />
          ))}
        </div>
      </div>
      <ReactPaginate
        breakLabel='...'
        nextLabel=''
        previousLabel=''
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        forcePage={page.current - 1}
        containerClassName='pagination-conainer list'
        pageClassName='pagination-item'
        previousLinkClassName='pag-prev-arrow'
        nextLinkClassName='pag-next-arrow'
      />
    </main>
  );
}

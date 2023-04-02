import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchGoods } from '../store/actions/goodActions';
import { CatalogItem } from '../components/catalogItem';
import { FilterPanel } from '../components/filterPanel';
import { MainTop } from '../components/mainTop';

export function Catalog() {
  const dispatch = useAppDispatch();
  const { error, loading, goods } = useAppSelector((state) => state.good);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <main className='main'>
      <MainTop />
      {error && <p className='text-error'>{error}</p>}
      {loading && <p className='text-loading'>Loading...</p>}
      <div className='main-content'>
        <FilterPanel />
        <div className='catalog-list'>
          {goods.map((el) => (
            <CatalogItem key={el.id} good={el} />
          ))}
        </div>{' '}
      </div>
    </main>
  );
}

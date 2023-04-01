import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchGoods } from '../store/actions/goodActions';
import { CatalogItem } from './catalogItem';
import { FilterPanel } from './filterPanel';
import { MainTop } from './mainTop';

export function Catalog() {
  const dispatch = useAppDispatch();
  const { error, loading, goods } = useAppSelector((state) => state.good);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  return (
    <main className='main'>
      <MainTop />
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

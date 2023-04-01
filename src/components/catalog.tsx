import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchGoods } from '../store/actions/goodActions';
import { CatalogItem } from './catalogItem';

export function Catalog() {
  const dispatch = useAppDispatch();
  const { error, loading, goods } = useAppSelector((state) => state.good);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  console.log(goods);
  return (
    <main className='main'>
      <div className='catalog-list'>
        {goods.map((el) => (
          <CatalogItem key={el.id} good={el} />
        ))}
      </div>
    </main>
  );
}

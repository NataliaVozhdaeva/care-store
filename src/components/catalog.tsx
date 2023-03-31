import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { fetchGoods } from '../store/actions/goodActions';
import { CatalogItem } from './catalog-item';

export function Catalog() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGoods());
  });

  return (
    <main className='main'>
      {/* 	<div >
		{tokens.map((el) => <Item key={el.id} token={el} />)}
	</div> */}
      {/* <CatalogItem /> */}
    </main>
  );
}

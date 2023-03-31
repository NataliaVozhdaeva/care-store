import React from 'react';
import { CatalogItem } from './catalog-item';

export function Catalog() {
  return (
    <main className='main'>
      {/* 	<div >
		{tokens.map((el) => <Item key={el.id} token={el} />)}
	</div> */}
      <CatalogItem />
    </main>
  );
}

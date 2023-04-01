import React from 'react';
import { Link } from 'react-router-dom';
import { IGood } from '../models/models';

interface CatalogCardProps {
  good: IGood;
}

export function CatalogItem({ good }: CatalogCardProps) {
  return (
    <Link to='#' className='item-container'>
      <img src={good.url} alt={good.title} height={'194'} />
      <div className='size'>
        <img src={'img/bottle.png'} alt='Объем' />
        <span className='additional-text'>450 мл</span>
      </div>
      <div className='title'>
        <span className='brend'>
          <b>АОС </b>
        </span>
        <span className='text'>{good.title}</span>
      </div>
      <ul className='list info-list'>
        <li className='info-item'>
          <span className='gray'>Штрихкод:&nbsp;</span>
          <span className='bold'>{good.id}</span>
        </li>
        <li className='info-item'>
          <span className='gray'>Производитель:&nbsp;</span>
          <span className='bold'>{good.producer}</span>
        </li>
        <li className='info-item'>
          <span className='gray'>Бренд:&nbsp;</span>
          <span className='bold'>{good.brand}</span>
        </li>
      </ul>
      <div className='order'>
        <span className='price'>{good.price}&nbsp;&#8376;</span>
        <button className='btn order-btn'>В КОРЗИНУ</button>
      </div>
    </Link>
  );
}

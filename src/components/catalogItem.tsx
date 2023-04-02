import React from 'react';
import { IGood } from '../models/models';
import { useNavigate } from 'react-router-dom';

interface CatalogCardProps {
  good: IGood;
}

export function CatalogItem({ good }: CatalogCardProps) {
  const navigate = useNavigate();

  const clickHandker = () => navigate(`/card/${good.id}`);

  return (
    <div className='item-container' onClick={clickHandker}>
      <img src={good.url} alt={good.title} height={'194'} />
      <div className='size'>
        <img src={`img/${good.type === 'volume' ? 'bottle' : 'box'}.png`} alt='размер' />
        <span className='additional-text'>450 {`${good.type === 'volume' ? 'мл' : 'гр'}`}</span>
      </div>
      <div className='title'>
        <span className='brand'>
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
    </div>
  );
}

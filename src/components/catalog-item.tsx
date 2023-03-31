import React from 'react';
import { Link } from 'react-router-dom';

export function CatalogItem() {
  return (
    <Link to='#' className='item-container'>
      <img
        src='https://www.perfectoria.ru/sites/default/files/styles/large/public/field/image/neutrogena_krem_dlya_ruk_s_zapahom_50ml.jpg?itok=C5u1ZXzh'
        alt='Крем для рук'
        height={'194'}
      />
      <div className='size'>
        <img src={'img/bottle.png'} alt='Объем' />
        <span className='additional-text'>450 мл</span>
      </div>
      <div className='title'>
        <span className='brend'>
          <b>brend1 </b>
        </span>
        <span className='text'>Крем для рук самый-самый, чтоб заполнить текстом</span>
      </div>
      <ul className='list info-list'>
        <li className='info-item'>
          <span className='gray'>Штрихкод:&nbsp;</span>
          <span className='bold'>1</span>
        </li>
        <li className='info-item'>
          <span className='gray'>Производитель:&nbsp;</span>
          <span className='bold'>1144321</span>
        </li>
        <li className='info-item'>
          <span className='gray'>Бренд:&nbsp;</span>
          <span className='bold'>111</span>
        </li>
      </ul>
      <div className='order'>
        <span className='price'>235&nbsp;&#8376;</span>
        <button className='btn order-btn'>В КОРЗИНУ</button>
      </div>
    </Link>
  );
}

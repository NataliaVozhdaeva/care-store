import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <div className='logo'>СУЛТАН</div>
      <Link to='#'>Каталог</Link>
      <input type='text' placeholder='Поиск...' />
      <div className='contants'>
        <p>+7 (777) 490-00-91</p>
        <p>время работы: 9:00-20:00</p>
        <a href='tel:+77774900091'>Заказать звонок</a>
      </div>
      <input type='file' />
      <Link to='/cart'>
        <img src='' alt='' />
        <span className='goodsCount'>0</span>
        <p className='additional-text'>Корзина</p>
        <p className='main-text'>0 &#8376;</p>
      </Link>
    </div>
  );
}

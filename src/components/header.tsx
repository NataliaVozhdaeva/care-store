import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className='header-container'>
      <div className='wrapper container'>
        <img src={'img/logo.png'} alt='Logo' className='logo' />
        <Link to='/' className='btn catalog-btn'>
          Каталог
        </Link>
        <span className='search-icon'>
          <input type='text' placeholder='Поиск...' className='btn search-btn' />
        </span>
        <div className='contants'>
          <p className='main-text'>+7 (777) 490-00-91</p>
          <p className='additional-text'>время работы: 9:00-20:00</p>
          <Link to='tel:+77774900091' className='small-text'>
            Заказать звонок
          </Link>
        </div>
        <button className='btn price-btn'>Прайс-лист</button>
        <Link to='/cart' className='cart-block'>
          <span className='goodsCount'>0</span>
          <span className='additional-text'>Корзина</span>
          <span className='main-text'>0 &#8376;</span>
        </Link>
      </div>
    </div>
  );
}

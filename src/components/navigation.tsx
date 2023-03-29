import React from 'react';

export function Navigation() {
  return (
    <div>
      <div className='flex'>
        <p className='main-text'>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
        <p className='additional-text'>(Рынок Восточный)</p>
      </div>
      <div className='flex'>
        <p className='main-text'>opt.sultan@mail.ru</p>
        <p className='additional-text'>На связи в любое время</p>
      </div>
      <nav>
        <ul className='flex'>
          <li className='nav-item'>
            <a href='№' className='nav-link'>
              О компании
            </a>
          </li>
          <li className='nav-item'>
            <a href='№' className='nav-link'>
              Доставка и оплата
            </a>
          </li>
          <li className='nav-item'>
            <a href='№' className='nav-link'>
              Возврат
            </a>
          </li>
          <li className='nav-item'>
            <a href='№' className='nav-link'>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

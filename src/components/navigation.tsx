import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <div className='top-container'>
      <div className='container wrapper'>
        <div className='container group-container'>
          <Link to='https://goo.gl/maps/gxrzYrrxVa87p8j26' className=' element-container location' target={'_blank'}>
            <p className='main-text'>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
            <p className='additional-text'>(Рынок Восточный)</p>
          </Link>
          <Link to='mailto:opt.sultan@mail.ru' className=' element-container email'>
            <p className='main-text'>opt.sultan@mail.ru</p>
            <p className='additional-text'>На связи в любое время</p>
          </Link>
        </div>
        <nav className='container'>
          <ul className='list container nav-container'>
            <li className='nav-item'>
              <Link to='#'>О компании</Link>{' '}
            </li>
            <li className='nav-item'>
              <Link to='#'>Доставка и оплата</Link>
            </li>
            <li className='nav-item'>
              <Link to='#'>Возврат</Link>
            </li>
            <li className='nav-item'>
              <Link to='#'>Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

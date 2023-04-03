import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='about'>
          <img src={'img/logo-white.svg'} alt='Logo' className='logo' width={156} />
          <div className='about-text'>
            Компания «Султан» — снабжаем розничные магазины товарами "под&nbsp;ключ" в Кокчетаве и Акмолинской области
          </div>
          <label className='subscribe' htmlFor='subscribe'>
            Подпишись на скидки и акции
          </label>
          <span className='subscribe-icon'>
            <input
              type='email'
              className='btn subscribe-btn'
              id='subscribe'
              placeholder='Введите ваш E-mail'
              pattern='.+@globex\.com'
            />
          </span>
        </div>
        <div className='footer-menu'>
          <div className='site-menu'>
            <ul className='list footer-list'>
              <li className='list-header footer-item'>Меню сайта:</li>
              <li className='footer-item'>О компании</li>
              <li className='footer-item'>Доставка и оплата</li>
              <li className='footer-item'>Возврат</li>
              <li className='footer-item'>Контакты</li>
            </ul>
          </div>
          <div className='categories'>
            <ul className='list footer-list'>
              <li className='list-header footer-item'>Категории:</li>
              <li className='footer-item'>Бытовая химия</li>
              <li className='footer-item'>Косметика и гигиена</li>
              <li className='footer-item'>Товары для дома</li>
              <li className='footer-item'>Товары для детей</li>
              <li className='footer-item'>Посуда</li>
            </ul>
          </div>
          <div className='footer-priceList'>
            <ul className='list footer-list'>
              <li className='list-header footer-item'>Скачать прайс-лист:</li>
              <li className='footer-item'>
                <button className='btn price-btn'>Прайс-лист</button>
              </li>
              <li className='footer-item'>
                Связь в мессенджерах:{' '}
                <ul className='list messenger-list'>
                  <li className='messenger-item'></li>
                  <li className='messenger-item'></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='contacts'>
            <ul className='list footer-list'>
              <li className='list-header footer-item'>Контакты:</li>
              <li className='footer-item contacts-footer'>
                <div className='contants'>
                  <p className='main-text'>+7 (777) 490-00-91</p>
                  <p className='additional-text'>время работы: 9:00-20:00</p>
                  <Link to='tel:+77774900091' className='small-text'>
                    Заказать звонок
                  </Link>
                </div>
              </li>
              <li className='footer-item contacts-footer'>
                <Link to='mailto:opt.sultan@mail.ru' className=' element-container email'>
                  <p className='main-text'>opt.sultan@mail.ru</p>
                  <p className='additional-text'>На связи в любое время</p>
                </Link>
              </li>
              <li className='footer-item'>
                <ul className='list cards-list'>
                  <li className='card-item'></li>
                  <li className='card-item'></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

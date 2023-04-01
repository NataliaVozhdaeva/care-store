import React from 'react';
import { BreadCrumps } from './breadCrumps';

export function MainTop() {
  return (
    <div className='main-top'>
      <BreadCrumps />
      <div className='top'>
        <h1 className='maintop-header'>Косметика и гигиена</h1>
        <div className='sort-container'>
          <span className='main-text'>Сортировка:&nbsp;</span>
          <select className='list sort-tist'>
            <option className='sort-item'>Название</option>
            <option className='sort-item'>Цена</option>
          </select>
          <select className='list items-order'>
            <option className='order-item'>По возрастанию</option>
            <option className='order-item'>По убыванию</option>
          </select>
        </div>
      </div>
      <ul className='list filter-top'>
        <li className='types-item'>
          <label htmlFor='for-body' className='type-label'>
            <input type='checkbox' className='type-input' id='for-body' />
            <span> Уход за телом</span>
          </label>
        </li>
        <li className='types-item'>
          <label htmlFor='for-face' className='type-label'>
            <input type='checkbox' className='type-input' id='for-face' />
            <span> Уход за лицом</span>
          </label>
        </li>
        <li className='types-item'>
          <label htmlFor='for-hands' className='type-label'>
            <input type='checkbox' className='type-input' id='for-hands' />
            <span> Уход за руками</span>
          </label>
        </li>
        <li className='types-item'>
          <label htmlFor='for-legs' className='type-label'>
            <input type='checkbox' className='type-input' id='for-legs' />
            <span> Уход за ногами</span>
          </label>
        </li>
        <li className='types-item'>
          <label htmlFor='for-hair' className='type-label'>
            <input type='checkbox' className='type-input' id='for-hair' />
            <span> Уход за волосами</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

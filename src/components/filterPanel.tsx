import React from 'react';
import { SearchPanel } from './searchPanel';

export function FilterPanel() {
  return (
    <div className='filter-container'>
      <h3 className='filter-title'>ПОДБОР ПО ПАРАМЕТРАМ</h3>
      <form action='#' className='filter-form'>
        <div className='filter-prise'>
          <p className='filter-text'>Цена&nbsp;&#8376;</p>
          <div className='price-container'>
            <input type='text' className='btn btn-small' placeholder='0' />
            &nbsp;-&nbsp;
            <input type='text' className='btn btn-small' placeholder='10 000' />
          </div>
        </div>
        <div className='filter-producer'>
          <h4 className='filer-subtitle'>Производитель</h4>
          <SearchPanel />
          <div className='checkbox-container'>
            <label htmlFor='producer' className='label'>
              <input type='checkbox' className='checkbox' id='producer0' />
              <span>
                Producer #0 <span className='goodsAmount'></span>
              </span>
            </label>
            <label htmlFor='producer' className='label'>
              <input type='checkbox' className='checkbox' id='producer1' />
              <span>
                Producer #1 <span className='goodsAmount'></span>
              </span>
            </label>
            <label htmlFor='producer' className='label'>
              <input type='checkbox' className='checkbox' id='producer2' />
              <span>
                Producer #2 <span className='goodsAmount'></span>
              </span>
            </label>
            <label htmlFor='producer' className='label'>
              <input type='checkbox' className='checkbox' id='producer3' />
              <span>
                Producer #3 <span className='goodsAmount'></span>
              </span>
            </label>
          </div>
          <button className='btn show-all'>
            Показать все &nbsp;<span className='caret'>&#9660;</span>
          </button>
        </div>
        <div className='formcontrol-container'>
          <button type='submit' className='btn submit'>
            Показать
          </button>
          <button type='reset' className='btn reset'></button>
        </div>
      </form>
      <div className='filter-care'>
        <h4 className='filer-subtitle'>ТИП УХОДА</h4>
        <ul className='list types-list'>
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
    </div>
  );
}

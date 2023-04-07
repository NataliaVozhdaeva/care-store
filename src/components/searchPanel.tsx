import React, { useEffect } from 'react';
import { useInput } from '../hooks/input';
import { useDebounce } from '../hooks/debounce';
import axios from '../axios';
import { IGood } from '../models/models';
import { ServerResponse } from '../models/models';

export function SearchPanel() {
  const input = useInput('');
  const debounced = useDebounce(input.value);
  async function searchGoods() {
    const response = await axios.get<ServerResponse<IGood>>('goods.json', { params: { search: debounced } });
    console.log(response.data.results.filter((obj) => obj.producer.includes(input.value)));
  }

  useEffect(() => {
    if (debounced.length > 3) {
      searchGoods();
    }
  }, [debounced]);

  return (
    <>
      <span className='search-icon'>
        <input type='text' placeholder='Поиск...' className='btn search-btn_filter search-btn' {...input} />
      </span>
    </>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';

export function GoodCart() {
  const params = useParams<'id'>();

  return <div className='card-container'>Card {params.id}</div>;
}

import React from 'react';
import MyInput from './UI/input/MyInput';
import { MySelect } from './UI/select/MySelect';

export function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
        placeholder='Пошук...'
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Сортування'
        options={[
          { value: 'title', name: 'По назві' },
          { value: 'body', name: 'По опису' },
        ]}
      />
    </div>
  );
}

import React from 'react';
import { useState } from 'react';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div className={css.searchWrap}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          value={value}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;

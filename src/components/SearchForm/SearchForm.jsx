import React from 'react';
import { useState } from 'react';
import css from './SearchForm.module.css';
import Notiflix from 'notiflix';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return Notiflix.Notify.warning('Enter the text in the search field');
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <div className={css.searchWrap}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          onChange={handleChange}
          name="title"
          value={value}
          placeholder="Search for movies..."
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

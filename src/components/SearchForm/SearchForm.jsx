import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('search');

  useEffect(() => {
    value !== query && setValue(query);
  }, [query, value]);

  const handleChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <div>
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

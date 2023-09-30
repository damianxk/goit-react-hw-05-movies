import React, { useState } from 'react';
import Notiflix from 'notiflix';
import css from './SearchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const normQuery = value.trim().toLowerCase();
    if (!normQuery) {
      Notiflix.Notify.warning('The query is empty!');
      return;
    }
    onSubmit(normQuery);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
          search
        </button>
        <input
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;

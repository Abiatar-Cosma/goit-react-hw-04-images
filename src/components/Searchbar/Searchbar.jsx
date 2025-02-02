import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onSubmit(input);
    setInput("");
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          🔍
        </button>
        <input
          className={styles.SearchFormInput}
          type="text"
          value={input}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

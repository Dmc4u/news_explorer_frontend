import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  // Create a dynamic className for the button
  const buttonClassName = `search-form__button ${
    searchTerm.trim() ? 'search-form__button--active' : ''
  }`;

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter topic"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button className={buttonClassName} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
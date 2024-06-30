import css from "./SearchBar.module.css";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
// import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const notify = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      notify();
      return;
    }
    onSubmit(query.trim());
    setQuery("");
  };
  return (
    <>
      <header className={css.searchWrapper}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <div className={css.inputWrapper}>
            <button className={css.searchBtn} type="submit">
              <FaMagnifyingGlass className={css.searchIcon} />
            </button>
            <input
              className={css.searchInput}
              type="text"
              name="search"
              value={query}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </form>
      </header>
    </>
  );
};

export default SearchBar;

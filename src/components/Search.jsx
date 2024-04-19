import React from "react";

const Search = () => {
  return (
    <div className="w-50">
      <form className="d-flex">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn background-color-system text-light"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

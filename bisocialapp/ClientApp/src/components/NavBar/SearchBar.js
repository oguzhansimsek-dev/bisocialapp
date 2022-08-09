import React from "react";

const SearchBar = () => {
  return (
    <>
      <form className="searchbar">
        <div className="searchbar-inner">
          <div className="searchbar-input-wrap">
            <input type="search" placeholder="Aradığın burada olabilir" />
            <i className="searchbar-icon"></i>
            <span className="input-clear-button"></span>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;

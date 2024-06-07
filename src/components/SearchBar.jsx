import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [wordToSearch, setWordToSearch] = useState("");

  function searchInputChanged(event) {
    setWordToSearch(event.target.value);
  }

  function searchInputKeydown(event) {
    if (event.keyCode === 13) {
      if (wordToSearch.trim()) onSearch(wordToSearch.trim());
    }
  }

  function clearSearchInput() {
    setWordToSearch("");
  }

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <div className="search-input-container">
          <div className="search-icon-container">
            <IoSearchSharp className="search-icon" />
          </div>
          <input
            type="text"
            className="search-input"
            autoComplete="false"
            placeholder="Search a word..."
            value={wordToSearch}
            onKeyDown={searchInputKeydown}
            onChange={searchInputChanged}
          />
          <div className="clear-search-icon-container">
            <RxCross2
              className="clear-search-icon"
              onClick={clearSearchInput}
            />
          </div>
        </div>
        <div className="search-result-container"></div>
      </div>
    </div>
  );
}

export default SearchBar;

import { IoSearchSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-container">
        <div className="search-input-container">
          <div className="search-icon-container">
            <IoSearchSharp className="search-icon" />
          </div>
          <input type="text" className="search-input" autoComplete="false" />
          <div className="clear-search-icon-container">
            <RxCross2 className="clear-search-icon" />
          </div>
        </div>
        <div className="search-result-container"></div>
      </div>
    </div>
  );
}

export default SearchBar;

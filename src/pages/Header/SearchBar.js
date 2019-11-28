import React from "react";

const SearchBar = () => {
  return (
    <form className="search-bar w-search notification-list friend-requests">
      <div className="form-group with-button">
        <input
          className="form-control js-user-search"
          placeholder="Search here people or pages..."
          type="text"
        />
        <button>
          <svg className="olymp-magnifying-glass-icon">
            {/* <use xlink: href="svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"/> */}
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

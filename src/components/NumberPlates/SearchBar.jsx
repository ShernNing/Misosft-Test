import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search.png";

function SearchBar({
  plates,
  setSearchResults,
  setIsSearching,
  setCurrentPage,
}) {
  const [search, setSearch] = useState("");

  // Function to handle the search
  const handleSearch = () => {
    // Filter plates based on the search query
    const searchFilter = plates.filter((data) =>
      data.number.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(searchFilter); // Update search results
    setIsSearching(true); // Set isSearching flag
    setCurrentPage(0); // Reset to the first page when searching
  };

  // Clear search results when search query changes
  useEffect(() => {
    setSearchResults([]);
    setIsSearching(false);
    setCurrentPage(0); // Reset to the first page when query changes
  }, [search, setCurrentPage, setIsSearching, setSearchResults]);

  // Function to clear the search input
  const handleClear = () => {
    setSearch(""); // Clear the search input
    setSearchResults([]); // Clear search results
    setIsSearching(false); // Reset isSearching flag
    setCurrentPage(0); // Reset to the first page
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder=' Enter your preferred number. Eg: VAC1'
        className='search'
      />
      {search && ( // Show the clear button only if there is input
        <button className='clear-search' onClick={handleClear}>
          &times;
        </button>
      )}
      <img src={searchIcon} alt='Search' className='search-icon' />
      <button className='search-button' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

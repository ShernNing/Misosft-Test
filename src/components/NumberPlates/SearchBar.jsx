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

  return (
    <div className='search-container'>
      <input
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        placeholder=' Enter your preferred number. Eg: VAC1'
        className='search'
      />
      <img src={searchIcon} alt='Search' className='search-icon' />
      <button className='search-button' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

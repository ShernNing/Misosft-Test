// NumberPlates.js
import React, { useEffect, useState } from "react";
import "./NumberPlates.scss";
import JsonData from "../../data.json";
import PlatesCard from "./PlatesCard/PlatesCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import StateFilter from "./StateFilter"; // Import the StateFilter component
import reset from "../assets/reset.png";

function NumberPlates() {
  const [plates, setPlates] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredStates, setFilteredStates] = useState([]); // State for filtered states
  const [resetFilter, setResetFilter] = useState(false); // State to reset the filter

  const itemsPerPage = 20;

  useEffect(() => {
    const getPlates = async () => {
      const data = await JsonData;
      setPlates(data);
    };
    getPlates().catch((err) => console.error("Error fetching data"));
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filterByStates = (data) => {
    // If no states are selected, return all plates
    if (filteredStates.length === 0) {
      return data;
    }

    // Filter plates based on selected states
    return data.filter((plate) => filteredStates.includes(plate.state));
  };

  const displayedPlates = isSearching
    ? searchResults.slice(startIndex, endIndex)
    : filterByStates(plates).slice(startIndex, endIndex); // Apply state filter

  const handleFilterChange = (selectedStates) => {
    setFilteredStates(selectedStates);
    setCurrentPage(0); // Reset to the first page when applying the filter
  };

  const handleResetFilter = () => {
    setFilteredStates([]);
    setCurrentPage(0); // Reset to the first page when resetting the filter
    setResetFilter(!resetFilter); // Toggle the resetFilter state
  };

  return (
    <div className='plates-container'>
      <section>
        <section className='filter-container'>
          <h1>Search a Car Plate</h1>
          {/* search bar */}
          <SearchBar
            plates={plates}
            setSearchResults={setSearchResults}
            setIsSearching={setIsSearching}
            setCurrentPage={setCurrentPage}
          />

          {/* state filter */}
          <StateFilter
            onFilterChange={handleFilterChange}
            selectedStates={filteredStates}
            key={resetFilter ? "reset" : "not-reset"} // Add a key prop
          />
        </section>

        {/* filtered selection & reset selections */}
        <div className='filter-buttons-container'>
          <button onClick={handleResetFilter} className='filter-reset-button'>
            <img src={reset} alt='reset' /> Reset
          </button>

          <div className='selected-filters'>
            {filteredStates.map((state) => (
              <span key={state} className='selected-state'>
                {state}

                {/* remove filter button */}
                <button
                  className='remove-filter'
                  onClick={() =>
                    handleFilterChange(
                      filteredStates.filter((s) => s !== state)
                    )
                  }
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* cards */}
      <section className='plates'>
        {displayedPlates.map((data) => (
          <div key={data.id}>
            <PlatesCard data={data} />
          </div>
        ))}
      </section>

      {/* pagination */}
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        isSearching={isSearching}
        searchResults={searchResults}
        plates={filterByStates(plates)}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}

export default NumberPlates;

// // NumberPlates.js
// import React, { useEffect, useState } from "react";
// import "./NumberPlates.scss";
// import JsonData from "../../data.json";
// import PlatesCard from "./PlatesCard/PlatesCard";
// import Pagination from "./Pagination";
// import SearchBar from "./SearchBar";
// import StateFilter from "./StateFilter"; // Import the StateFilter component

// function NumberPlates() {
//   const [plates, setPlates] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [searchResults, setSearchResults] = useState([]);
//   const [isSearching, setIsSearching] = useState(false);
//   const [filteredStates, setFilteredStates] = useState([]); // State for filtered states

//   const itemsPerPage = 20;

//   useEffect(() => {
//     const getPlates = async () => {
//       const data = await JsonData;
//       setPlates(data);
//     };
//     getPlates().catch((err) => console.error("Error fetching data"));
//   }, []);

//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const filterByStates = (data) => {
//     // If no states are selected, return all plates
//     if (filteredStates.length === 0) {
//       return data;
//     }

//     // Filter plates based on selected states
//     return data.filter((plate) => filteredStates.includes(plate.state));
//   };

//   const displayedPlates = isSearching
//     ? searchResults.slice(startIndex, endIndex)
//     : filterByStates(plates).slice(startIndex, endIndex); // Apply state filter

//   const handleFilterChange = (selectedStates) => {
//     setFilteredStates(selectedStates);
//     setCurrentPage(0); // Reset to the first page when applying the filter
//   };

//   return (
//     <div className='plates-container'>
//       <section className='filter-container'>
//         <h1>Search a Car Plate</h1>
//         <SearchBar
//           plates={plates}
//           setSearchResults={setSearchResults}
//           setIsSearching={setIsSearching}
//           setCurrentPage={setCurrentPage}
//         />
//         <StateFilter onFilterChange={handleFilterChange} />{" "}
//         {/* Add the StateFilter component */}
//       </section>

//       <section className='plates'>
//         {displayedPlates.map((data) => (
//           <div key={data.id}>
//             <PlatesCard data={data} />
//           </div>
//         ))}
//       </section>

//       <Pagination
//         setCurrentPage={setCurrentPage}
//         currentPage={currentPage}
//         isSearching={isSearching}
//         searchResults={searchResults}
//         plates={filterByStates(plates)}
//         itemsPerPage={itemsPerPage}
//       />
//     </div>
//   );
// }

// export default NumberPlates;

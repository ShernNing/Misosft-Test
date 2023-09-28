import React, { useEffect, useState } from "react";
import "./NumberPlates.scss";
import JsonData from "../../data.json";
import PlatesCard from "./PlatesCard/PlatesCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

function NumberPlates() {
  const [plates, setPlates] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredStates, setFilteredStates] = useState([]);
  const [filteredPriceRange, setFilteredPriceRange] = useState("");
  const [filteredSeries, setFilteredSeries] = useState(""); // Add state for filtered series

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

  const filterByStatesAndPrice = (data) => {
    if (
      filteredStates.length === 0 &&
      filteredPriceRange === "" &&
      filteredSeries === ""
    ) {
      return data;
    }

    let filteredData = data;

    if (filteredStates.length > 0) {
      filteredData = filteredData.filter((plate) =>
        filteredStates.includes(plate.state)
      );
    }

    if (filteredPriceRange !== "") {
      const [minPrice, maxPrice] = filteredPriceRange.split(" to ");
      filteredData = filteredData.filter((plate) => {
        const platePrice = parseFloat(plate.price);
        return (
          platePrice >= parseFloat(minPrice) &&
          platePrice <= parseFloat(maxPrice)
        );
      });
    }

    if (filteredSeries !== "") {
      filteredData = filteredData.filter(
        (plate) => plate.series === filteredSeries
      );
    }

    return filteredData;
  };

  const displayedPlates = isSearching
    ? searchResults.slice(startIndex, endIndex)
    : filterByStatesAndPrice(plates).slice(startIndex, endIndex);

  const handleFilterChange = (
    selectedStates,
    selectedPriceRange,
    selectedSeries
  ) => {
    setFilteredStates(selectedStates);
    setFilteredPriceRange(selectedPriceRange);
    setFilteredSeries(selectedSeries); // Update filteredSeries state
    setCurrentPage(0);
  };

  return (
    <div className='plates-container'>
      <section className='filter-container'>
        <h1>Search a Car Plate ></h1>
        <SearchBar
          plates={plates}
          setSearchResults={setSearchResults}
          setIsSearching={setIsSearching}
          setCurrentPage={setCurrentPage}
        />
        <Filter
          onFilterChange={handleFilterChange}
          selectedSeries={filteredSeries} // Pass selectedSeries as prop
        />
      </section>

      <section className='plates'>
        {displayedPlates.map((data) => (
          <div key={data.id}>
            <PlatesCard data={data} />
          </div>
        ))}
      </section>

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        isSearching={isSearching}
        searchResults={searchResults}
        plates={filterByStatesAndPrice(plates)}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}

export default NumberPlates;

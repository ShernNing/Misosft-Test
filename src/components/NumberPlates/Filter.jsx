import React, { useState } from "react";
import "./Filter.scss";
import reset from "../assets/reset.png";

function Filter({ onFilterChange, selectedSeries }) {
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const allSeries = [
    "1 DIGIT NUMBER",
    "2 DIGIT NUMBER",
    "3 DIGIT NUMBER",
    "4 DIGIT NUMBER",
  ];

  const allStates = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "J",
    "K",
    "M",
    "N",
    "P",
    "R",
    "S",
    "T",
    "V",
    "W",
  ];

  const priceRanges = [
    "0 to 50000",
    "50001 to 80000",
    "80001 to 100000",
    "100001 to 200000",
    "200001 to 300000",
    "300001 to 400000",
  ];

  const handleSeriesToggle = (series) => {
    let updatedSeries = selectedSeries === series ? "" : series;
    onFilterChange(selectedStates, selectedPriceRange, updatedSeries);
  };

  const handleStateToggle = (state) => {
    let updatedStates = selectedStates.includes(state)
      ? selectedStates.filter((s) => s !== state)
      : [...selectedStates, state];
    setSelectedStates(updatedStates);
    onFilterChange(updatedStates, selectedPriceRange, selectedSeries);
  };

  const handlePriceRangeToggle = (priceRange) => {
    let updatedPriceRange = selectedPriceRange === priceRange ? "" : priceRange;
    setSelectedPriceRange(updatedPriceRange);
    onFilterChange(selectedStates, updatedPriceRange, selectedSeries);
  };

  const handleResetFilter = () => {
    setSelectedStates([]);
    setSelectedPriceRange("");
    onFilterChange([], "", "");
  };

  return (
    <div className='state-filter'>
      {/* series filter */}
      <div className='series-options'>
        {allSeries.map((series) => (
          <span
            key={series}
            className={selectedSeries === series ? "selected" : "series-option"}
            onClick={() => handleSeriesToggle(series)}
          >
            {series}
          </span>
        ))}
      </div>

      {/* price filter */}
      <div className='price-options'>
        {priceRanges.map((priceRange) => (
          <span
            key={priceRange}
            className={
              selectedPriceRange === priceRange ? "selected" : "price-range"
            }
            onClick={() => handlePriceRangeToggle(priceRange)}
          >
            {priceRange}
          </span>
        ))}
      </div>

      {/* state filter */}
      <div className='state-options'>
        {allStates.map((state) => (
          <span
            key={state}
            className={selectedStates.includes(state) ? "selected" : "states"}
            onClick={() => handleStateToggle(state)}
          >
            {state}
          </span>
        ))}
      </div>

      {/* reset filter */}
      <div className='filter-buttons-container'>
        <button onClick={handleResetFilter} className='filter-reset-button'>
          <img src={reset} alt='reset' /> Reset
        </button>

        <div className='selected-filters'>
          {/* filtered series */}
          {selectedSeries && (
            <span className='selected-state'>
              {selectedSeries}
              <button
                className='remove-filter'
                onClick={() => handleSeriesToggle(selectedSeries)}
              >
                &times;
              </button>
            </span>
          )}

          {/* filtered price */}
          {selectedPriceRange && (
            <span className='selected-state'>
              {selectedPriceRange}
              <button
                className='remove-filter'
                onClick={() => handlePriceRangeToggle(selectedPriceRange)}
              >
                &times;
              </button>
            </span>
          )}

          {/* filtered state */}
          {selectedStates.map((state) => (
            <span key={state} className='selected-state'>
              {state}
              <button
                className='remove-filter'
                onClick={() => handleStateToggle(state)}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;

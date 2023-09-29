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
    "0 to 50,000",
    "50,001 to 80,000",
    "80,001 to 100,000",
    "100,001 to 200,000",
    "200,001 to 300,000",
    "300,001 to 400,000",
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
            RM {priceRange}
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
            {state} Series
          </span>
        ))}
      </div>

      {/* reset filter */}
      <div className='filter-buttons-container'>
        <button onClick={handleResetFilter} className='filter-reset-button'>
          <img src={reset} alt='reset' className='reset' />
          Reset
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
              RM {selectedPriceRange}
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
              {state} Series
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

// StateFilter.js
import React, { useEffect, useState } from "react";
import "./StateFilter.scss";

function StateFilter({ onFilterChange }) {
  const [selectedStates, setSelectedStates] = useState([]);

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

  const handleStateToggle = (state) => {
    let updatedStates;

    if (selectedStates.includes(state)) {
      updatedStates = selectedStates.filter((s) => s !== state);
    } else {
      updatedStates = [...selectedStates, state];
    }

    setSelectedStates(updatedStates); // Update the state
    onFilterChange(updatedStates); // Apply the filter immediately
  };

  return (
    <div className='state-filter'>
      <h2>Filter by State</h2>
      <div className='state-options'>
        {/* listed states */}
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
    </div>
  );
}

export default StateFilter;

// // StateFilter.js
// import React, { useState } from "react";
// import "./StateFilter.scss";
// import reset from "../assets/reset.png";

// function StateFilter({ onFilterChange }) {
//   const [selectedStates, setSelectedStates] = useState([]);

//   const allStates = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "J",
//     "K",
//     "M",
//     "N",
//     "P",
//     "R",
//     "S",
//     "T",
//     "V",
//     "W",
//   ];

//   const handleStateToggle = (state) => {
//     let updatedStates;

//     if (selectedStates.includes(state)) {
//       updatedStates = selectedStates.filter((s) => s !== state);
//     } else {
//       updatedStates = [...selectedStates, state];
//     }

//     setSelectedStates(updatedStates); // Update the state
//     onFilterChange(updatedStates); // Apply the filter immediately
//   };

//   const handleResetFilter = () => {
//     setSelectedStates([]);
//     onFilterChange([]); // Clear filters
//   };

//   return (
//     <div className='state-filter'>
//       <h2>Filter by State</h2>
//       <div className='state-options'>
//         {/* listed states */}
//         {allStates.map((state) => (
//           <span
//             key={state}
//             className={selectedStates.includes(state) ? "selected" : "states"}
//             onClick={() => handleStateToggle(state)}
//           >
//             {state}
//           </span>
//         ))}
//       </div>
//       <div className='filter-buttons-container'>
//         {/* reset button */}
//         <button onClick={handleResetFilter} className='filter-reset-button'>
//           <img src={reset} alt='reset' /> Reset
//         </button>

//         {/* selected states */}
//         <div className='selected-filters'>
//           {selectedStates.map((state) => (
//             <span key={state} className='selected-state'>
//               {state}
//               <button
//                 className='remove-filter'
//                 onClick={() => handleStateToggle(state)}
//               >
//                 &times;
//               </button>
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StateFilter;

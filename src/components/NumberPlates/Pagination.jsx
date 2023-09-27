import React from "react";
import next from "../assets/next-pagi.png";
import prev from "../assets/prev-pagi.png";

function Pagination({
  setCurrentPage,
  currentPage,
  isSearching,
  searchResults,
  plates,
  itemsPerPage,
}) {
  // Calculate the total number of pages
  const totalPages = Math.ceil(
    (isSearching ? searchResults.length : plates.length) / itemsPerPage
  );

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);

  return (
    <div className='pagination'>
      {/* prev button */}
      <button
        onClick={() =>
          setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage))
        }
        disabled={currentPage === 0}
        className='pagination-icon'
      >
        <img src={prev} alt='Prev' />
      </button>

      {/* page numbers */}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={
            pageNumber === currentPage
              ? "active"
              : "pagination-icon pagination-number"
          }
        >
          {pageNumber + 1}
        </button>
      ))}

      {/* next button */}
      <button
        onClick={() =>
          setCurrentPage((prevPage) =>
            prevPage < totalPages - 1 ? prevPage + 1 : prevPage
          )
        }
        disabled={currentPage === totalPages - 1}
        className='pagination-icon'
      >
        <img src={next} alt='Next' />
      </button>
    </div>
  );
}

export default Pagination;

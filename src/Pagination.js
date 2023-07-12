import React from 'react'

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <p className="pagination-text">
        Page {currentPage} of {totalPages}
      </p>
      <button
        className="pagination-btn"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination
import React from 'react'

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
    scrollToTop();
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
    scrollToTop();
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optionnel : ajoute une animation de défilement en douceur
    });
  }

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Précédent
      </button>
      <p className="pagination-text">
        Page {currentPage} sur {totalPages}
      </p>
      <button
        className="pagination-btn"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination
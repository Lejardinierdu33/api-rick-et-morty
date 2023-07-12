import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import logo from "./rick-and-morty-31006.png";
import "./style.css";

const API_URL = "https://rickandmortyapi.com/api/character";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}?page=${currentPage}&name=${searchQuery}`
        );
        setCharacters(response.data.results);
        console.log(response.data.results);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage, searchQuery]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Rick Et Morty</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <section className="character-grid">
        {characters.map((character, key) => (
          <CharacterCard key={key} character={character} />
        ))}
      </section>
      
    </div>
  );
};

export default App;

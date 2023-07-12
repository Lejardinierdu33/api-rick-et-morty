import React from "react";

const CharacterCard = ({ character }) => {
  const getStatusColor = () => {
    if (character.status === "Alive") {
      return "#2ecc71"; // Couleur pour les personnages vivants
    } else if (character.status === "Dead") {
      return "#e74c3c"; // Couleur pour les personnages décédés
    }
    return "#95a5a6"; // Couleur par défaut pour les statuts inconnus
  };

  return (
    <div className="character-card">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
        <div className="status-indicator" style={{ backgroundColor: getStatusColor() }}></div>
      </div>
      <div className="character-info">
        <h2>{character.name}</h2>
        <p>Status: <span style={{ color: getStatusColor() }}>{character.status}</span></p>
        <p>Species: {character.species}</p>
        <p>Origin: {character.origin.name}</p>
      </div>
    </div>
  );
};

export default CharacterCard;

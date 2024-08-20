import React from "react";
import "./Favoritos.css";

const PainelFavoritos = ({ favoritos }) => {
  return (
    <div className="painel-favoritos">
      <h2>Lutadores Favoritos</h2>
      <div className="favoritos-grid">
        {favoritos.map((atleta, index) => (
          <div key={index} className="card-atleta">
            <img className="card-img" src={atleta.photo} />
            <div className="card-body">
              <h3 className="card-title">{atleta.name}</h3>
              <p className="card-text">Apelido: {atleta.nickname}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainelFavoritos;

import React from "react";
import "./CardAtleta.css";

const CardAtleta = ({ atleta, adicionarFavorito }) => {
  return (
    <div className="card-atleta">
      <img className="card-img" src={atleta.photo} />
      <div className="card-body">
        <h3 className="card-title">{atleta.name}</h3>
        <p className="card-text">Apelido: {atleta.nickname}</p>
        <button className="btn" onClick={() => adicionarFavorito(atleta)}>
          Adicionar aos favoritos
        </button>
      </div>
    </div>
  );
};

export default CardAtleta;

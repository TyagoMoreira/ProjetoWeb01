import React, { useState } from "react";
import axios from "axios";
import CardAtleta from "./componentes/CardAtleta";
import PainelFavoritos from "./componentes/Favoritos";
import "./App.css";

function App() {
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const buscarAtletas = async () => {
    try {
      const response = await axios.get(
        "https://v1.mma.api-sports.io/fighters",
        {
          headers: {
            "x-apisports-key": "90d70b1ba68db02e2c4560d674b34d05",
          },
          params: {
            name: searchQuery,
          },
        }
      );
      setAtletas(response.data.response);
    } catch (error) {
      console.error("Erro ao buscar atletas:", error);
    }
  };

  const adicionarFavorito = (atleta) => {
    setFavoritos([...favoritos, atleta]);
  };

  return (
    <div className="app-container">
      <h1>Pesquisa de Lutadores de MMA</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Digite o nome do atleta"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={buscarAtletas}>Pesquisar</button>
      </div>
      <div className="atletas-grid">
        {atletas.map((atleta, index) => (
          <CardAtleta
            key={index}
            atleta={atleta}
            adicionarFavorito={adicionarFavorito}
          />
        ))}
      </div>
      <PainelFavoritos favoritos={favoritos} />
    </div>
  );
}

export default App;

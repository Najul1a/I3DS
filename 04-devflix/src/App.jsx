import { useEffect, useState } from "react";
import "./App.css";
import Lupa from "./assets/search.svg";
import Logo from "./assets/devflix.png";
import Footer from "./components/footer/Footer";
import MovieCard from "./components/movieCard/MovieCard";

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //Ultilizando a chave de API do arquivo .env
  // const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Alimentando com dados para não ficar nulo com useEffect
  useEffect(() => {
    searchMovies("batman");
  }, []);

  //criando a conexao com API e trazendo informaçoes

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //alimentando o movie
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(search);
  };
  return (
    <div id="app">
      <img className="logo" src={Logo} alt="" />

      <div className="search">
        <input
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="pesquise por filmes"
        />
        <img onClick={() => searchMovies(search)} src={Lupa} alt="" />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} apiUrl={apiUrl} {...movie} />
          ))}
        </div>
      ) : (
        <h2 className="empty"> Filme não encontrado 🤦‍♀️🤦‍♀️</h2>
      )}

      <Footer devName={"Najulia"} devLinks={"http://github.com"} />
    </div>
  );
};

export default App;

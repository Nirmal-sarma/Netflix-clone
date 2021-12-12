import React, { useState, useEffect } from "react";
import { instances } from "./axios";
import Request from "./Request";
import './Banner.css';
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const value = await instances.get(Request.fetchNetFlixOriginals);
      setMovie(
        value.data.results[
          Math.floor(Math.random() * value.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  console.log(movie);
  return ( 
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
        </div>

        <div className="banner_description">
        <h4>{movie.overview}</h4> 
        </div>
        <div className="banner_fatebottom"/>
      </div>
    </header>
  );
}

export default Banner;

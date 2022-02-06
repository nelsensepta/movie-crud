import React from "react";
import "./MovieList.css";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, title }) => {
  return (
    <section className="content-movies">
      <div className="card-title">
        <h1 className="title">{title}</h1>
      </div>
      <div className="card-movies">
        {movies &&
          movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};

export default MovieList;

import React, { useEffect } from "react";
import MovieList from "../components/MovieList";
import "./Home.css";
import Hero from "../components/Hero";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpComingMovies,
} from "../store/actions/movieAction";

const Home = ({
  moviesTopRated,
  moviesTrending,
  moviesNowPlaying,
  moviesUpComing,
  moviesPopular,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getNowPlayingMovies());
    dispatch(getUpComingMovies());
    dispatch(getPopularMovies());
  }, [dispatch]);
  return (
    <>
      <Hero movies={moviesTrending} />
      <main className="content-main">
        <MovieList title="Top Rated Movies 2022" movies={moviesTopRated} />
        <MovieList title="Now Playing Movies 2022" movies={moviesNowPlaying} />
        <MovieList title="Up Coming Movies 2022" movies={moviesUpComing} />
        <MovieList title="Popular Movies 2022" movies={moviesPopular} />
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesTopRated: state.movieReducer.movies.topRated,
    moviesTrending: state.movieReducer.movies.trending,
    moviesNowPlaying: state.movieReducer.movies.nowPlaying,
    moviesUpComing: state.movieReducer.movies.upComing,
    moviesPopular: state.movieReducer.movies.popular,
    moviesLoading: state.movieReducer.moviesLoading,
    moviesError: state.movieReducer.moviesError,
  };
};

export default connect(mapStateToProps, null)(Home);

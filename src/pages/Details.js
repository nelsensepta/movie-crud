import React, { useEffect } from "react";
import "./Details.css";
import { useParams, useLocation } from "react-router-dom";
import { ImageServices } from "../services/APIservice";
import {
  getDetails,
  getCredits,
  getSimilar,
} from "../store/actions/movieAction";
import { connect, useDispatch } from "react-redux";
import CastList from "../components/CastList";
import MovieList from "../components/MovieList";

const Details = ({ movieError, movieDetails, movieLoading, similar }) => {
  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
    dispatch(getCredits(id));
    dispatch(getSimilar(id));
  }, [dispatch]);

  return (
    <>
      {movieDetails && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${ImageServices.original(
                movieDetails.backdrop_path || movieDetails.poster_path
              )})`,
            }}
          ></div>
          <div className="movie-content container">
            <div className="movie-content-poster">
              <div
                className="movie-content-poster-img"
                style={{
                  backgroundImage: `url(${ImageServices.w500Image(
                    movieDetails.poster_path || movieDetails.backdrop_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-content-info">
              <h1 className="title">
                {movieDetails.title || movieDetails.name}
              </h1>
              <div className="genres">
                {movieDetails.genres &&
                  movieDetails.genres.slice(0, 5).map((genre, i) => (
                    <span key={i} className="genres-item">
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{movieDetails.overview}</p>
              <div className="cast">
                <div className="section-header">
                  <h2>Casts</h2>
                </div>
                <CastList />
              </div>
            </div>
          </div>
          <div className="similar-content">
            {/* <div className="section mb-3">
              <VideoList id={item.id} />
            </div> */}
            <MovieList title="Similar" movies={similar} />
          </div>
        </>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    movieDetails: state.movieReducer.movies.details,
    similar: state.movieReducer.movies.similar,
    movieLoading: state.movieReducer.moviesLoading,
    movieError: state.movieReducer.moviesError,
  };
};

export default connect(mapStateToProps, null)(Details);

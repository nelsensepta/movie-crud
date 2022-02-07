import {
  GET_TRENDING_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_DETAILS,
  GET_CREDITS,
  GET_NOW_PLAYING_MOVIES,
  GET_UP_COMING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_SIMILAR,
} from "../../actions/movieAction";

const initialState = {
  movies: false,
  moviesLoading: false,
  moviesError: false,
};

const Movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        movies: { ...state.movies, trending: action.payload.data },
        moviesLoading: action.payload.loading,
        moviesError: action.payload.errorMessage,
      };
    case GET_TOP_RATED_MOVIES:
      return {
        ...state,
        movies: { ...state.movies, topRated: action.payload.data },
        moviesLoading: action.payload.loading,
        moviesError: action.payload.errorMessage,
      };
    case GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        movies: { ...state.movies, nowPlaying: action.payload.data },
        moviesLoading: action.payload.loading,
        moviesError: action.payload.errorMessage,
      };
    case GET_UP_COMING_MOVIES:
      return {
        ...state,
        movies: { ...state.movies, upComing: action.payload.data },
        moviesLoading: action.payload.loading,
        moviesError: action.payload.errorMessage,
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: { ...state.movies, popular: action.payload.data },
        moviesLoading: action.payload.loading,
        moviesError: action.payload.errorMessage,
      };
    case GET_DETAILS:
      return {
        ...state,
        movies: { ...state.movies, details: action.payload.data },
        moviesLoading: action.payload.loading,
        moviesError: action.payload.errorMessage,
      };
    case GET_CREDITS:
      const castSlice = action.payload.data.slice(0, 20);
      return {
        ...state,
        movies: { ...state.movies, credits: castSlice },
        moviesLoading: action.payload.loading,
        moviesError: action.payload.errorMessage,
      };
    case GET_SIMILAR:
      return {
        ...state,
        movies: { ...state.movies, similar: action.payload.data },
        moviesLoading: action.payload.loading,
        moviesError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Movie;

import { Api } from "../../services/APIservice";

// Movies
export const GET_TRENDING_MOVIES = "GET_TRENDING_MOVIES";
export const GET_TOP_RATED_MOVIES = "GET_TOP_RATED_MOVIES";
export const GET_NOW_PLAYING_MOVIES = "GET_NOW_PLAYING_MOVIES";
export const GET_UP_COMING_MOVIES = "GET_UP_COMING_MOVIES";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";

export const GET_DETAILS = "GET_DETAILS";
export const GET_CREDITS = "GET_CREDITS";
export const GET_SIMILAR = "GET_SIMILAR";
export const getDetails = (id) => async (dispatch) => {
  try {
    const req = await fetch(Api.fetchDetails(id));
    const res = await req.json();
    dispatch({
      type: GET_DETAILS,
      payload: {
        loading: false,
        data: res,
        errorMessage: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_DETAILS,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
    });
  }
};

export const getCredits = (id) => async (dispatch) => {
  try {
    const req = await fetch(Api.fetchCredits(id));
    const res = await req.json();
    dispatch({
      type: GET_CREDITS,
      payload: {
        loading: false,
        data: res.cast,
        errorMessage: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_CREDITS,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
    });
  }
};
export const getSimilar = (id) => async (dispatch) => {
  try {
    const req = await fetch(Api.fetchSimilar(id));
    const res = await req.json();
    dispatch({
      type: GET_SIMILAR,
      payload: {
        loading: false,
        data: res.results,
        errorMessage: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_SIMILAR,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
    });
  }
};

export const getTrendingMovies = () => async (dispatch) => {
  try {
    const req = await fetch(Api.fetchTrending);
    const res = await req.json();
    dispatch({
      type: GET_TRENDING_MOVIES,
      payload: {
        loading: false,
        data: res.results,
        errorMessage: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_TRENDING_MOVIES,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
    });
  }
};

export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const req = await fetch(Api.fetchTopRated);
    const res = await req.json();
    dispatch({
      type: GET_TOP_RATED_MOVIES,
      payload: {
        loading: false,
        data: res.results,
        errorMessage: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_TOP_RATED_MOVIES,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
    });
  }
};

export const getNowPlayingMovies = () => async (dispatch) => {
  try {
    const req = await fetch(Api.fetchNowPlaying);
    const res = await req.json();
    dispatch({
      type: GET_NOW_PLAYING_MOVIES,
      payload: {
        loading: false,
        data: res.results,
        errorMessage: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_NOW_PLAYING_MOVIES,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
    });
  }
};

export const getUpComingMovies = () => async (dispatch) => {
  try {
    const req = await fetch(Api.fetchUpComing);
    const res = await req.json();
    dispatch({
      type: GET_UP_COMING_MOVIES,
      payload: {
        loading: false,
        data: res.results,
        errorMessage: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_UP_COMING_MOVIES,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
    });
  }
};

export const getPopularMovies = () => async (dispatch) => {
  try {
    const req = await fetch(Api.fetchPopular);
    const res = await req.json();
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: {
        loading: false,
        data: res.results,
        errorMessage: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: {
        loading: false,
        data: false,
        errorMessage: error,
      },
    });
  }
};

// export const getGenres = () => async (dispatch) => {
//   const res = await axios.get(Api.fetchHorrorMovies);
//   // console.log(res);
//   dispatch({
//     type: GET_POPULAR_MOVIES,
//     payload: res.data,
//   });
// };

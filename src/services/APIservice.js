export const Api = {
  fetchTrending: `${process.env.REACT_APP_API_URL_MOVIE}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY_V3}`,
  fetchTopRated: `${process.env.REACT_APP_API_URL_MOVIE}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
  fetchNowPlaying: `${process.env.REACT_APP_API_URL_MOVIE}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
  fetchUpComing: `${process.env.REACT_APP_API_URL_MOVIE}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,
  fetchPopular: `${process.env.REACT_APP_API_URL_MOVIE}/movie/popular?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,

  fetchActionMovies: `${process.env.REACT_APP_API_URL_MOVIE}/discover/movie?api_key=${process.env.REACT_APP_API_KEY_V3}&with_genres=28`,
  fetchComedyMovies: `${process.env.REACT_APP_API_URL_MOVIE}/discover/movie?api_key=${process.env.REACT_APP_API_KEY_V3}&with_genres=35`,
  fetchHorrorMovies: `${process.env.REACT_APP_API_URL_MOVIE}/discover/movie?api_key=${process.env.REACT_APP_API_KEY_V3}&with_genres=27`,
  fetchRomanceMovies: `${process.env.REACT_APP_API_URL_MOVIE}/discover/movie?api_key=${process.env.REACT_APP_API_KEY_V3}&with_genres=10479`,
  fetchMystery: `${process.env.REACT_APP_API_URL_MOVIE}/discover/movie?api_key=${process.env.REACT_APP_API_KEY_V3}&with_genres=9648`,
  fetchSciFi: `${process.env.REACT_APP_API_URL_MOVIE}/discover/movie?api_key=${process.env.REACT_APP_API_KEY_V3}&with_genres=878`,
  fetchDetails: (id) =>
    `${process.env.REACT_APP_API_URL_MOVIE}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US`,
  fetchCredits: (id) =>
    `${process.env.REACT_APP_API_URL_MOVIE}/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY_V3}`,
  fetchSimilar: (id) =>
    `${process.env.REACT_APP_API_URL_MOVIE}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY_V3}&language=en-US&page=1`,

  // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
};

export const ImageServices = {
  original: (path) => `https://image.tmdb.org/t/p/original/${path}`,
  large: (path) => `https://image.tmdb.org/t/p/w1280/${path}`,
  w500Image: (path) => `https://image.tmdb.org/t/p/w500/${path}`,
};

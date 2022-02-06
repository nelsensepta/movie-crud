import { setAlert } from "./alertAction";

export const NEW_LIST = "NEW_LIST";
export const ADD_MOVIE = "ADD_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";
export const UPDATE_LIST = "UPDATE_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const newList =
  ({ id, name }) =>
  (dispatch) => {
    dispatch(setAlert(`New list ${name} created successfully`, "success"));
    dispatch({
      type: NEW_LIST,
      payload: {
        id,
        name,
        movies: [],
      },
    });
  };

export const addMovie = (movie, id) => (dispatch) => {
  dispatch(setAlert(`Movie ${movie.title} has been Add`, "success"));
  dispatch({
    type: ADD_MOVIE,
    payload: {
      id,
      movies: movie,
      isAdd: true,
    },
  });
};

export const updateMovie =
  ({ ...draggableId }) =>
  (dispatch) => {
    dispatch(setAlert("Movie has been Update", "success"));
    dispatch({
      type: UPDATE_MOVIE,
      payload: {
        draggableId,
      },
    });
  };

export const updateList =
  ({ id, name }) =>
  (dispatch) => {
    dispatch(setAlert(`List has been Update`, "success"));
    dispatch({
      type: UPDATE_LIST,
      payload: {
        id,
        name,
      },
    });
  };
export const deleteList =
  ({ id, name }) =>
  (dispatch) => {
    dispatch(setAlert(`List has been Delete`, "success"));
    dispatch({
      type: DELETE_LIST,
      payload: {
        id,
        name,
      },
    });
  };

export const deleteMovie = (idList, idMovie) => (dispatch) => {
  dispatch(setAlert(`Movie has been Delete`, "success"));
  dispatch({
    type: DELETE_MOVIE,
    payload: {
      idList,
      idMovie,
    },
  });
};

// export const isAdd = (id) => (dispatch) => {
//   dispatch({
//     type: IS_ADD,
//     payload: {
//       id,
//     },
//   });
// };

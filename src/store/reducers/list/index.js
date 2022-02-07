import {
  NEW_LIST,
  ADD_MOVIE,
  UPDATE_MOVIE,
  UPDATE_LIST,
  DELETE_LIST,
  DELETE_MOVIE,
} from "../../actions/listAction";

const initialState = [];

const Lists = (state = initialState, action) => {
  let newState;
  let index;
  let newMovie;
  switch (action.type) {
    case NEW_LIST:
      if (!state.length) {
        newState = [...state];
        newState.push(action.payload);
        return newState;
      } else {
        newState = [...state];
        const duplicat = newState.some(
          (list) => list.name === action.payload.name
        );
        if (duplicat) {
          return newState;
        }
        newState.push(action.payload);
        return newState;
      }

    case ADD_MOVIE:
      newState = [...state];
      index = newState.findIndex((value) => value.id === action.payload.id);
      let movieAdd = { ...action.payload.movies, idAdd: action.payload.isAdd };

      if (index !== -1) {
        const duplicat = newState[index].movies.some(
          (movie) => movie.id === action.payload.movies.id
        );
        if (duplicat) {
          return newState;
        } else {
          newState[index].movies.push(movieAdd);
        }
      }

    case UPDATE_MOVIE:
      newState = [...state];
      if (!action.payload.draggableId) return newState;
      const { destination, source } = action.payload.draggableId;
      if (!destination) {
        return newState;
      }
      const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
      };
      const move = (
        source,
        destination,
        droppableSource,
        droppableDestination
      ) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);
        destClone.splice(droppableDestination.index, 0, removed);
        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;
        // if(result){
        //   dispatch(setAlert("Movie has been Update", "success"));
        // }
        return result;
      };
      const sInd = +source.droppableId;
      const dInd = +destination.droppableId;
      if (sInd === dInd) {
        const items = reorder(
          newState[sInd].movies,
          source.index,
          destination.index
        );
        newState[sInd].movies = items;
        return newState;
      } else {
        const result = move(
          newState[sInd].movies,
          newState[dInd].movies,
          source,
          destination
        );
        newState[sInd].movies = result[sInd];
        newState[dInd].movies = result[dInd];
        return newState;
      }
    case UPDATE_LIST:
      newState = [...state];
      newState = newState.map((list) => {
        if (list.id === action.payload.id) {
          return { ...list, name: action.payload.name };
        }
        return list;
      });
      return newState;

    case DELETE_LIST:
      newState = state.filter((list) => {
        return (
          list.id !== action.payload.id && list.name !== action.payload.name
        );
      });
      return newState;
    case DELETE_MOVIE:
      newState = [...state];
      index = state.findIndex((list) => list.id === action.payload.idList);
      if (index !== -1) {
        newMovie = newState[index].movies.filter((movie) => {
          return movie.id !== action.payload.idMovie;
        });
        newState[index].movies = newMovie;
      }
      return newState;
    default:
      return state;
  }
};

export default Lists;

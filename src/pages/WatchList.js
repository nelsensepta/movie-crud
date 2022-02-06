import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import "./WatchList.css";
import {
  newList,
  updateMovie,
  updateList,
  deleteList,
  deleteMovie,
} from "../store/actions/listAction";
import { v1 as uuid } from "uuid";
import Modal from "../components/ui/Modal";
import { ImageServices } from "../services/APIservice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import Input from "../components/ui/Input";

const WatchList = ({ lists, updateMovie, deleteMovie }) => {
  const dispatch = useDispatch();
  const [nameList, setNameList] = useState("");
  const [btnAdd, setBtnAdd] = useState(false);
  const [updateName, setUpdateName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameList !== "") {
      dispatch(newList({ id: uuid(), name: nameList }));
    }
    setNameList("");
  };
  const handleSubmitName = (e) => {
    e.preventDefault();
    if (nameList !== "") {
      dispatch(updateList({ id: updateName, name: nameList }));
    }
    setNameList("");
    setUpdateName("");
  };
  const handleUpdateName = (e) => {
    if (e.target.id) {
      setUpdateName(e.target.id);
    } else {
      console.log("Masuk");
      setUpdateName("");
    }
  };

  const handleDeleteList = (e) => {
    const id = e.target.id;
    const name = e.target.name;

    if (id && name) {
      alert("Are You Sure ?");
      dispatch(deleteList({ id, name }));
    }
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    display: isDragging ? "none" : "block",
    ...draggableStyle,
  });

  return (
    <>
      <main className="main-content">
        <div className="content">
          <button className="btn " onClick={() => setBtnAdd(!btnAdd)}>
            Add New List
          </button>
          <div className="list-movies">
            <DragDropContext
              onDragEnd={(draggableId) => updateMovie(draggableId)}
            >
              {lists.map((list, i) => (
                <Droppable
                  key={list.id}
                  droppableId={`${i}`}
                  direction="horizontal"
                >
                  {(provided) => (
                    <div
                      className="list-card"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <div className="wrapper-title">
                        {list.id === updateName ? (
                          <Input
                            handleSubmit={handleSubmitName}
                            setChange={setNameList}
                            valueChange={nameList}
                            placeholder="Update Name List"
                            btnX={handleUpdateName}
                          />
                        ) : (
                          <div className="wrapper-action">
                            <p className="list-title">{list.name}</p>
                            <button
                              id={list.id}
                              name={list.name}
                              onClick={(e) => handleUpdateName(e)}
                            >
                              Update
                            </button>
                            <button
                              id={list.id}
                              name={list.name}
                              onClick={(e) => handleDeleteList(e)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="movies-card">
                        {list.movies ? (
                          list.movies.map((movie, i) => (
                            <Draggable
                              key={movie.id}
                              draggableId={`${movie.id}`}
                              index={i}
                            >
                              {(provided, snapshot) => (
                                <>
                                  <Link
                                    to={`/movie/${movie.id}`}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <img
                                      src={`${ImageServices.w500Image(
                                        movie.poster_path
                                      )}`}
                                      alt={`${movie.title}`}
                                    />
                                  </Link>
                                  <div
                                    className="card-watch"
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <button
                                      onClick={() =>
                                        deleteMovie(list.id, movie.id)
                                      }
                                      className="trash-icon"
                                      type="button"
                                    >
                                      <FiTrash2 />
                                    </button>
                                  </div>
                                </>
                              )}
                            </Draggable>
                          ))
                        ) : (
                          <span>Drag and Drop</span>
                        )}
                        {provided.placeholder}
                      </div>
                    </div>
                  )}
                </Droppable>
              ))}
            </DragDropContext>
          </div>
        </div>
        <Modal add={btnAdd} setAdd={setBtnAdd}>
          <Input
            handleSubmit={handleSubmit}
            setChange={setNameList}
            valueChange={nameList}
            placeholder="Add new List"
          />
        </Modal>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.listReducer,
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateMovie: (draggableId) => {
    const { destination } = draggableId;
    if (!destination) return;
    return dispatch(updateMovie(draggableId));
  },
  deleteMovie: (idList, idMovie) => dispatch(deleteMovie(idList, idMovie)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WatchList);

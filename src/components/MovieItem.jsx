import React, { useState } from "react";
import "./MovieItem.css";
import { ImageServices } from "../services/APIservice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { addMovie, newList } from "../store/actions/listAction";
import Input from "../components/ui/Input";
import Modal from "./ui/Modal";
import "react-lazy-load-image-component/src/effects/blur.css";
import { v1 as uuid } from "uuid";

const MovieItem = ({ movie, scrollPosition }) => {
  const lists = useSelector((state) => state.listReducer);
  const [add, setAdd] = useState(false);
  const [list, setList] = useState(false);
  const [nameList, setNameList] = useState("");

  const dispatch = useDispatch();
  const handleAdd = (id) => {
    dispatch(addMovie(movie, id));
    setAdd(!add);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameList !== "") {
      dispatch(newList({ id: uuid(), name: nameList }));
    }
    setNameList("");
  };

  return (
    <>
      <div className="card">
        <a href={`/movie/${movie.id}`}>
          <LazyLoadImage
            alt={movie.title}
            height={340}
            effect="blur"
            src={`${ImageServices.w500Image(movie.poster_path)}`}
            width={220}
            className="coverImg"
          />
        </a>
        <div className="data">
          <div className="wrapper_rating">
            <span className="icon">
              <AiFillStar className="icon" />
            </span>
            <span className="rating">{movie.vote_average}</span>
          </div>
          <button onClick={() => setAdd({ btn: !add, movie: movie })}>
            <AiFillHeart
              className="icon"
              style={{
                color: movie.isAdd ? "red" : "#aaaaaa",
              }}
            />
          </button>
        </div>
      </div>
      <Modal add={add} setAdd={setAdd}>
        {!lists.length ? (
          <>
            {list ? (
              <Input
                handleSubmit={handleSubmit}
                setChange={setNameList}
                valueChange={nameList}
                placeholder="Add new List"
              />
            ) : (
              <button className="btn-list" onClick={() => setList(!list)}>
                no list, add list ?
              </button>
            )}
          </>
        ) : (
          <div className="wrapper-btn">
            {lists.map((list) => (
              <button
                key={list.id}
                onClick={() => handleAdd(list.id)}
                className="btn-list"
              >
                {list.name}
              </button>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
};

export default MovieItem;

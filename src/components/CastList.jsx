import React from "react";
import { ImageServices } from "../services/APIservice";
import "./CastList.css";
import { useSelector } from "react-redux";

const CastList = () => {
  const credits = useSelector((state) => state.movieReducer.movies.credits);
  return (
    <div className="casts">
      {credits &&
        credits.map((item, i) => (
          <div key={i} className="casts-item">
            <img
              className="casts-item-img"
              src={
                item.profile_path
                  ? ImageServices.w500Image(item.profile_path)
                  : "/no-photo1.png"
              }
            />
            <p className="casts-item-name">{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default CastList;

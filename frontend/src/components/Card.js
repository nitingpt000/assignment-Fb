import React from "react";
// card component
const Card = ({ name, rating, date }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="movie-name">
            Movie Name:<span>{name}</span>
          </p>
          <p className="movie-rating">
            Rating:
            <span>{rating}</span>
          </p>
          <p className="movie-date">
            Date:<span>{date}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;

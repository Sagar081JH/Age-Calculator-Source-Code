import React, { useState } from "react";

export default function MovieGrid({ movie, movieId }) {
  console.log("key : ", movieId);

  const errorHandler = (e) => {
    e.target.src = "./images/default.jpg";
  };

  //   const ratingColor = Number(movie.rating) < 7 ? "red" : "green";

  function ratingClass(rating) {
    if (rating > 8) return "green";
    if (rating >= 5 && rating <= 8) return "yellow";
    if (rating < 5) return "red";
  }

  return (
    <div>
      <div key={movie.id} className="movie-card">
        <img
          src={`images/${movie.image}`}
          alt={movie.title}
          onError={errorHandler}
        />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-genre">{movie.genre}</p>
          <p
            className="movie-card-rating"
            style={{ color: ratingClass(movie.rating) }}
          >
            {movie.rating}
          </p>
        </div>
      </div>
    </div>
  );
}

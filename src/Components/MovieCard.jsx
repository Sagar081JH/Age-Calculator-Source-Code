import React from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchListed, toggleWatchlist }) {

  const errorHandler = (e) => {
    e.target.src = "./images/default.jpg";
  };

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
          <div>
              <span className="movie-card-genre">{movie.genre}</span>
              <span className="movie-card-rating"
                 style={{ color: ratingClass(movie.rating) }}>
                {movie.rating}
              </span>
          </div>
              <label className="switch">
                  <input 
                    type="checkbox" 
                    checked={isWatchListed} 
                    onChange={() => toggleWatchlist(movie.id)}>
                  </input> 

                  <span className="slider">
                      <span className="slider-label" >
                        {isWatchListed ? "In Watchlist" : "Add to Watchlist"}
                      </span>
                  </span>
              </label>          
        </div>
      </div>
    </div>
  );
}

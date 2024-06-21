import React from "react";
import "../styles.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    console.log("genre", genre);
    return (
      genre === "All Genres" ||
      genre.toLowerCase() === movie.genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating > 8;
      case "Ok":
        return movie.rating > 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const fileredMovies = movies.filter(
    (movie) =>
      matchesRating(movie, rating) &&
      matchesGenre(movie, genre) &&
      matchesSearchTerm(movie)
  );

  return (
    <div>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search Movies..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {fileredMovies.map((movie) => (
          <MovieCard movie={movie} movieId={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Watchlist from "./Components/Watchlist";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MoviesGrid from "./Components/MoviesGrid";

function App() {

  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchList] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchList((prev) =>
      prev.includes(movieId) ?
       prev.filter((id) => id !== movieId) 
       : [...prev,movieId]
    );
  }

  return (
    <div className="App">
      <div className="container">
      <Header />
        <Router>
          <nav>
            <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            </ul>
          </nav>
          <Routes>
            <Route 
                path="/" 
                element={
                  <MoviesGrid 
                      movies={movies} 
                      watchlist={watchlist} 
                      toggleWatchlist={toggleWatchlist}>
                  </MoviesGrid>}>
            </Route>
            <Route 
                path="/watchlist" 
                element={
                  <Watchlist 
                      movies={movies} 
                      watchlist={watchlist} 
                      toggleWatchlist={toggleWatchlist}>
                  </Watchlist>}>
              </Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

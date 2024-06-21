import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MovieGrid from "./Components/MoviesGrid";
import Watchlist from "./Components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav></nav>

          <Routes>
            <Route path="./"> element={<MovieGrid />}</Route>
            <Route path="/watchlist" element={<Watchlist />}></Route>
          </Routes>
        </Router>

        <Watchlist />
        <MovieGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;

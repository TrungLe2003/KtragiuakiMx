import { useState } from "react";
import { listMovie } from "./data";
import Movie from "./components/Movie";
import MovieBanner from "./components/MovieBanner";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(listMovie);
  const [modal, setModal] = useState({
    open: false,
    data: null,
  });
  let viewModal = null;
  if (modal.open) {
    viewModal = (
      <MovieBanner
        movie={modal.data}
        onCloseBanner={() => {
          setModal({
            open: false,
            data: null,
          });
        }}
      ></MovieBanner>
    );
  }
  return (
    <div className="home">
      {viewModal}
      <div className="navBar">
        <h1 className="navBar-title">Anonime</h1>
        <div className="navBar-home">home</div>
        <div className="navBar-list">List anime</div>
        <input
          type="search"
          placeholder="Search anime or movie"
          className="navBar-input"
        />
      </div>
      <h2 className="explore">Explore</h2>
      <div className="suggest">What are you gonna watch today ?</div>
      <div className="carousel">
        <img src="/public/carousel.png" alt="" />
      </div>
      <div className="Latest_release">
        <h2>New Release</h2>
        <div className="movieList">
          {movies.map((item) => {
            return <Movie dataMovie={item} onOpenBanner={setModal}></Movie>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

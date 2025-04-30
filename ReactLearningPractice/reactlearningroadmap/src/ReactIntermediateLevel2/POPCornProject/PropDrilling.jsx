import React, { useState } from "react";
import "./PopCorn.css";
// import { MdKeyboardDoubleArrowUp } from "react-icons/md";
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function PropDrilling() {
  const tempMovieData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt6751668",
      Title: "Parasite",
      Year: "2019",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
  ];

  const tempWatchedData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ];

  return (
    <div>
      <div className="navBar">
        <NavBar watchedMovies={tempWatchedData} />
      </div>
      <div className="main">
        <Main movies={tempMovieData} watchedMovies={tempWatchedData} />
      </div>
    </div>
  );
}

export default PropDrilling;

function NavBar({ watchedMovies }) {
  return (
    <>
      <Logo />
      <SearchBar />
      <MovieCount mwatchedMoviesCount={watchedMovies} />
    </>
  );
}

function Logo() {
  return (
    <>
      <div>
        <h3>🍿 usePopcorn</h3>
      </div>
    </>
  );
}

function SearchBar() {
  return (
    <>
      <input type="text" placeholder="Search Movies..." className="input" />
    </>
  );
}

function MovieCount({ mwatchedMoviesCount }) {
  return (
    <>
      <h3>Found {mwatchedMoviesCount.length} reults</h3>
    </>
  );
}

function Main({ movies, watchedMovies }) {
  return (
    <>
      <MoviesLsit movieList={movies} />
      <WatchedMovies watchedMovies={watchedMovies} />
    </>
  );
}

function MoviesLsit({ movieList }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="moviesList">
        <div>Movies List</div>
        <div onClick={() => setIsOpen(!isOpen)} className="togglebutton">
          {isOpen ? "-" : "+"}
        </div>

        {isOpen ? movieList.map((movies) => <Movies movie={movies} />) : ""}
      </div>
    </>
  );
}
function WatchedMovies({ watchedMovies }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="moviesList">
        <div>Movies You Watched</div>
        <div onClick={() => setIsOpen(!isOpen)} className="togglebutton">
          {isOpen ? "-" : "+"}
        </div>
        {isOpen
          ? watchedMovies.map((movieWatched) => (
              <MoviesWatched moviesWatched={movieWatched} />
            ))
          : ""}
      </div>
    </>
  );
}

function Movies({ movie }) {
  return (
    <>
      <div>
        <div className="movie">
          <div>
            <img src={movie.Poster} alt="poster" className="poster" />
          </div>
          <div>
            <p>{movie.Title}</p>
            <p>📅{movie.Year}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function MoviesWatched({ moviesWatched }) {
  return (
    <>
      <div>
        <div className="movie">
          <div>
            <img src={moviesWatched.Poster} alt="poster" className="poster" />
          </div>
          <div>
            <div>{moviesWatched.Title}</div>
            <div className="movie">
              <p>⏳{moviesWatched.runtime}Min</p>
              <p>⭐{moviesWatched.imdbRating}</p>
              <p>🌟{moviesWatched.userRating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

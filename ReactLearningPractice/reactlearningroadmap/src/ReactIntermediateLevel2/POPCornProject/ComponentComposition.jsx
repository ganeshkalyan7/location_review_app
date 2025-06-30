import React, { useState, useEffect, useRef } from "react";
import "./PopCorn.css";
import NoImage from "../../../public/Noimage.png";
import { use } from "react";
import Star from "./Star";
function ComponentComposition() {
  const [tempMovieData, setTempMovieData] = useState([]);
  //const [moviesWatched, setMoviesWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [MovieSearch, setMovieSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [moviesWatched, setMoviesWatched] = useState(function () {
    const storedValue = localStorage.getItem("wachedMovie");
    return JSON.parse(storedValue);
  });

  const [error, setError] = useState("");
  const key = "f84fc31d";
  const Movie = "one";

  const SelectedMovie = (id) => {
    console.log("Selected Movie:", id);
    setSelectedMovie((selectedMovie) => (id === selectedMovie ? null : id));
  };

  const HandleDeleteMovie = (id) => {
    setMoviesWatched((moviesWatched) =>
      moviesWatched.filter((movieID) => movieID.imdbID !== id)
    );
    console.log(moviesWatched);
  };
  const UnselectMovie = () => {
    setSelectedMovie(null);
  };

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    //{ signal: controller.signal }
    const fetchMovies = async () => {
      try {
        setError(""); // Reset error state before fetching

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${MovieSearch}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log(data);

        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setTempMovieData(data.Search);
      } catch (error) {
        console.log("Error fetching data:", error);
        // setError(error.message);
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [MovieSearch]);

  console.log(tempMovieData);
  console.log(isLoading);
  console.log(error);

  // const tempMovieData = [
  //   {
  //     imdbID: "tt1375666",
  //     Title: "Inception",
  //     Year: "2010",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  //   },
  //   {
  //     imdbID: "tt0133093",
  //     Title: "The Matrix",
  //     Year: "1999",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  //   },
  //   {
  //     imdbID: "tt6751668",
  //     Title: "Parasite",
  //     Year: "2019",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  //   },
  // ];

  const WishListMovies = (movie) => {
    setMoviesWatched((moviesWatched) => [...moviesWatched, movie]);
  };

  useEffect(() => {
    localStorage.setItem("wachedMovie", JSON.stringify(moviesWatched));
  }, [moviesWatched]);
  return (
    <div>
      <div className="navBar">
        <NavBar>
          <Logo />
          <SearchBar setMovieSearch={setMovieSearch} />
          <MovieCount
            mwatchedMoviesCount={tempMovieData}
            MovieSearch={MovieSearch}
          />
        </NavBar>
      </div>
      <div className="main">
        <Main>
          <MoviesLsit
            movieList={tempMovieData}
            loading={isLoading}
            error={error}
            SelectedMovie={SelectedMovie}
          />
          {selectedMovie ? (
            <MovieDetails
              selectedMovieID={selectedMovie}
              UnselectMovie={UnselectMovie}
              Key={key}
              WishListMovies={WishListMovies}
              watchedMovies={moviesWatched}
            />
          ) : (
            <>
              <WatchedMovies
                watchedMovies={moviesWatched}
                selectedMovieID={selectedMovie}
                HandleDeleteMovie={HandleDeleteMovie}
              />
            </>
          )}
        </Main>
      </div>
    </div>
  );
}

export default ComponentComposition;

function NavBar({ children }) {
  return <>{children}</>;
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

function SearchBar({ setMovieSearch }) {
  const selectElement = useRef(null);
  useEffect(() => {
    const callback = (e) => {
      // if (document.activeElement === selectElement.current) return;
      if (e.code === "Enter") {
        selectElement.current.focus();
        setMovieSearch("");
      }
    };
    document.addEventListener("Keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, [setMovieSearch]);
  console.log(selectElement.current);
  return (
    <>
      <input
        type="text"
        placeholder="Search Movies..."
        className="input"
        onChange={(e) => setMovieSearch(e.target.value)}
        ref={selectElement}
      />
    </>
  );
}

function MovieCount({ mwatchedMoviesCount, MovieSearch }) {
  return (
    <>
      <h3>
        Found{" "}
        {mwatchedMoviesCount && MovieSearch ? mwatchedMoviesCount.length : "0"}{" "}
        reults
      </h3>
    </>
  );
}

function Main({ children }) {
  return <>{children}</>;
}

function MoviesLsit({ movieList, loading, error, SelectedMovie }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="moviesList">
        <div>Movies List</div>
        <div onClick={() => setIsOpen(!isOpen)} className="togglebutton">
          {isOpen ? "-" : "+"}
        </div>
        {loading && <div>Loading Data.....</div>}
        {!loading &&
          !error &&
          movieList.map((movies) => (
            <Movies movie={movies} SelectedMovie={SelectedMovie} />
          ))}
        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
}

function WatchedMovies({ watchedMovies, HandleDeleteMovie }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("SelectedMovie:", watchedMovies);

  return (
    <>
      <div className="moviesList">
        <div>Movies You Watched</div>
        <div onClick={() => setIsOpen(!isOpen)} className="togglebutton">
          {isOpen ? "-" : "+"}
        </div>
        {/* {watchedMovies && <MoviesWatched moviesWatched={watchedMovies} />} */}
        {watchedMovies.map((moviesWatched) => (
          <MoviesWatched
            moviesWatched={moviesWatched}
            key={moviesWatched.imdbRating}
            HandleDeleteMovie={HandleDeleteMovie}
          />
        ))}

        {/* {isOpen
          ? watchedMovies.map((movieWatched) => (
              <MoviesWatched moviesWatched={movieWatched} />
            ))
          : ""} */}
      </div>
    </>
  );
}

function MovieDetails({
  selectedMovieID,
  UnselectMovie,
  Key,
  WishListMovies,
  watchedMovies,
}) {
  console.log("SelectedMovie:", watchedMovies);
  const [movieSelectedDetails, setMovieSelectedDetails] = useState({});
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [rating, setrating] = useState("");

  console.log(rating);
  console.log(movieSelectedDetails);

  const {
    Poster: Poster,
    Title: Title,
    imdbID: imdbID,
    Plot: Plot,
    Genre: Genre,
    Year: Year,
    imdbRating: imdbRating,
    cast: Actors,
  } = movieSelectedDetails;
  const duplicateMovie = watchedMovies
    .map((movie) => movie.imdbID)
    .includes(selectedMovieID);
  console.log(duplicateMovie);

  const moviesWatched = () => {
    const newMovieList = {
      Poster,
      Title,
      imdbID,
      rating: rating,
      Plot: Plot,
      imdbRating: imdbRating,
      Genre: Genre,
    };
    WishListMovies(newMovieList);
    UnselectMovie();
  };
  useEffect(() => {
    const FetchSelectedMovie = async () => {
      setIsLoadingState(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${Key}&i=${selectedMovieID}`
        );
        const data = await response.json();
        console.log("Selected Movie Data:", data);
        setMovieSelectedDetails(data);
        setIsLoadingState(false);
      } catch (error) {
        console.log("Error fetching selected movie:", error);
      }
    };
    FetchSelectedMovie();
  }, [selectedMovieID]);
  console.log(movieSelectedDetails);
  console.log(selectedMovieID);

  useEffect(() => {
    document.title = `${movieSelectedDetails.Title}`;
  }, [movieSelectedDetails.Title]);

  return (
    <>
      <div className="movie">
        <div onClick={() => UnselectMovie()}>🔙</div>

        {!isLoadingState ? (
          <div className="movieDetailsContainer">
            <img
              src={movieSelectedDetails.Poster}
              alt="poster"
              className="poster"
              style={{ width: "300px", height: "400px" }}
            />
            <p>{movieSelectedDetails.Title}</p>

            {duplicateMovie ? (
              <p>movie added</p>
            ) : (
              <>
                {" "}
                <Star star={5} onSetRating={setrating} />
                <p>{Plot}</p>
                <p>{Genre}</p>
                <p>{imdbRating}</p>
              </>
            )}
            {rating > 0 ? (
              <button onClick={() => moviesWatched()}>+ADD</button>
            ) : (
              ""
            )}

            {/*  */}
          </div>
        ) : (
          "loading..."
        )}
      </div>
    </>
  );
}
function Movies({ movie, SelectedMovie }) {
  return (
    <>
      <div>
        <div className="movie" onClick={() => SelectedMovie(movie.imdbID)}>
          <div>
            <img
              src={movie.Poster === "N/A" ? NoImage : movie.Poster}
              alt="poster"
              className="poster"
            />
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

function MoviesWatched({ moviesWatched, HandleDeleteMovie }) {
  const poster = moviesWatched.Poster;
  console.log(poster);

  console.log(moviesWatched);
  return (
    <>
      <div>
        <div className="movie">
          <div>
            <img src={poster} alt="poster" className="poster" />
          </div>
          <div>{moviesWatched.Title}</div>
          <div>{moviesWatched.rating}🌟</div>

          <button onClick={() => HandleDeleteMovie(moviesWatched.imdbID)}>
            Delete ❌
          </button>
          {/* <div>
            <div>{moviesWatched.Title}</div>
            <div className="movie">
              <p>⏳{moviesWatched.Year}Min</p>
              <p>⭐{moviesWatched.imdbRating}</p>
              <p>🌟{moviesWatched.userRating}</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

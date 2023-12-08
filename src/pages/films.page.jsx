import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  filterFilmsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";

export default function FilmsPage() {
  const [movieList, setMovieList] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setMovieList(result);
      })
      .catch((err) => console.error);
  }, []);

  function tomatoPic(rtScore) {
    if (rtScore >= 75) {
      return "public/CertFreshTomatoes.png";
    } else if (rtScore >= 60) {
      return "public/60Tomato.png";
    } else {
      return "public/less59Tomato.jpg";
    }
  }

  // Derived State
  const filmsByDirector = filterFilmsByDirector(movieList, searchDirector);
  const directors = getListOf(movieList, "director");
  /* const { total, avg_score, latest } = getFilmStats(movieList); */

  return (
    <>
      <h1>Studio Ghibli API</h1>
      <form>
        <div className="form-group">
          <label htmlFor="searchDirector">Search by Director</label>
          <select
            name="searchDirector"
            id="searchDirector"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All</option>
            {directors.map((director, index) => {
              return (
                <option key={index} value={director}>
                  {director}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div id="cardContainer">
        <ul>
          {filmsByDirector.map((movieObj, index) => {
            return (
              <div className="card" key={index}>
                  <Link to={`${index}`}>
                  <h2>{movieObj.title}</h2>
                  </Link>
                  <img
                    src={movieObj.image}
                    className="movieImg"
                    width="300px"
                    alt=""
                  />
                  <h5>{"Director: " + movieObj.director}</h5>
                  <div className="movieScore">
                    <img
                      src={tomatoPic(movieObj.rt_score)}
                      width="100px"
                      alt=""
                    />
                    <p>{movieObj.rt_score}</p>
                  </div>
                  <p className="movieDesc">{movieObj.description}</p>
                </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

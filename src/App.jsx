import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setMovieList(result);
      })
      .catch((err) => console.error);
  }, []);

  function tomatoPic(rtScore){
    if (rtScore >= 75){
      return "public/CertFreshTomatoes.png"
    } else if (rtScore >= 60){
      return "public/60Tomato.png"
    } else {
      return "public/less59Tomato.jpg"
    }
  }

  return (
    <>
      <h1>Studio Ghibli API</h1>
      <div id="cardContainer">
        <ul>
          {movieList.map((movieObj, index) => {
            return (
              <div className="card" key={index}>
                <h2>{movieObj.title}</h2>
                <img src={movieObj.image} className="movieImg" width="300px"alt=""/>
                <h5>{"Director: " + movieObj.director}</h5> 
                <img src= {tomatoPic(movieObj.rt_score)} width="100px" alt="" />
                <p>{movieObj.rt_score}</p>
                <p>{movieObj.description}</p>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

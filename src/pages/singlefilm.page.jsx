import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleFilmPage() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  console.log(id)

  function getFilm() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setItem(result);
      })
      .catch((err) => console.error);
  }

  useEffect(() => {
    getFilm();
  }, []);
console.log(item);
  return (
    <>
      <div className="spgContainer">
        <div>
          <img src={`${item.image}`} width="300px" alt={`${item.title} Poster`} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>
            Directed by {item.director}. Produced by {item.producer}.
          </p>
          <p className="spgP">
            The film was released in <strong>{item.release_date}</strong> and
            garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
            <a
              href="https://www.rottentomatoes.com/"
              target="_blank"
              rel="noreferrer"
            >
              Rotten Tomatoes
            </a>
            .
          </p>
          <h2>Description</h2>
          <p className="spgP">{item.description}</p>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, Col, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import MainLayout from "../components/index.js";
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
  const { total, avg_score, latest } = getFilmStats(filmsByDirector);
  console.log(typeof avg_score)
  return (
    <MainLayout>
      <div className="">
        <h1>Studio Ghibli Films</h1>
        <Form>
          <Form.Group className="mb-3" controlId="searchDirector">
            <Form.Label>Filter by Director</Form.Label>
            <Form.Select
              value={searchDirector}
              onChange={(e) => setSearchDirector(e.target.value)}
            >
              <option value="">All</option>
              {directors.map((item, idx) => {
                return (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Form>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <small># Of Films</small>
                  <Badge bg="dark">{total}</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <small>Average Rating</small>
                  <Badge bg="dark">{avg_score.toFixed(2)}</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <small>Latest Film</small>
                  <Badge bg="dark">{latest}</Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <ListGroup>
          {filmsByDirector.map((item) => {
            return (
              <ListGroupItem key={item.id}>
                <Link to={`${item.id}`}>{item.title}</Link>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </MainLayout>
  );
}

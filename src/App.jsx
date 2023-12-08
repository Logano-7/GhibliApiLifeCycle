import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage} from "./pages/index";
import NavBar from "./routes/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<FilmsPage />} path="/films" />
          <Route element={<SingleFilmPage />} path="/films/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

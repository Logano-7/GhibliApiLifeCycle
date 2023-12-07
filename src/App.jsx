import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage, FilmsPage} from "./pages/index";
import NavBar from "./Route/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<FilmsPage />} path="/films" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { HomePage, FilmsPage  } from "./pages/index"
import "./App.css";

function App() {

  return (
    <>
    <BrowserRouter>
      <nav>
        <ul style={{
          display: 'flex',
          justifyContent: 'space-around',
          listStyle: 'none',
          padding: '1rem',
        }}>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
          <NavLink to='/films'>Films</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<FilmsPage />} path="/films" />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

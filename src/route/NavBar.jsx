import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            padding: "1rem",
          }}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
  );
}

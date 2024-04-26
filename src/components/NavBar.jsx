import "../styles/components/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faSquarePollVertical,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li>
          <NavLink to="/">
            <FontAwesomeIcon icon={faClipboard} style={{ color: "#fcfcfc" }} />
            <p>Tipo de Tarjetón</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/params">
            <FontAwesomeIcon icon={faPencil} style={{ color: "#f5f5f5" }} />
            <p>Parámetros</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/fileInput">
            <FontAwesomeIcon
              icon={faSquarePollVertical}
              style={{ color: "#fcfcfc" }}
            />
            <p>Ver resultados</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

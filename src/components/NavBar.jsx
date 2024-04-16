import "../styles/components/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faSquarePollVertical,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { checkValidParams } from "../helpers/helpers";
import { Link, NavLink } from "react-router-dom";

function NavBar({ setShowResults, sharedParams, tarjetonType, setShowParmas }) {
  let handleClick = (param) => {
    switch (param) {
      case "TarjetonType":
        if (tarjetonType) setShowParmas(false);
        break;
      case "TarjetonParams":
        if (tarjetonType) setShowParmas(true);
        setShowResults(false);
        break;
      case "TarjetonResults":
        if (tarjetonType) setShowParmas(true);
        if (checkValidParams(sharedParams, sharedParams.type))
          setShowResults(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="navbar">
      <nav>
        <ul className="navList">
          <li >
            <FontAwesomeIcon icon={faClipboard} style={{ color: "#fcfcfc" }} />
            <NavLink to="/">
              <p>Tipo de Tarjetón</p>
            </NavLink>
          </li>
          <li >
            <FontAwesomeIcon icon={faPencil} style={{ color: "#f5f5f5" }} />
            <NavLink to="/params">
              <p>Parámetros</p>
            </NavLink>
          </li>
          <li >
            <FontAwesomeIcon
              icon={faSquarePollVertical}
              style={{ color: "#fcfcfc" }}
            />
            <NavLink to="/fileInput">
              <p>Ver resultados</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  showResults: PropTypes.bool,
  setShowResults: PropTypes.func,
  sharedParams: PropTypes.object,
  tarjetonType: PropTypes.string,
  setShowParmas: PropTypes.func,
};

export default NavBar;

import "../styles/components/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faSquarePollVertical,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { checkValidParams } from "../helpers/helpers";

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
          <li onClick={() => handleClick("TarjetonType")}>
            <FontAwesomeIcon icon={faClipboard} style={{ color: "#fcfcfc" }} />
            <p>Tipo de Tarjetón</p>
          </li>
          <li onClick={() => handleClick("TarjetonParams")}>
            <FontAwesomeIcon icon={faPencil} style={{ color: "#f5f5f5" }} />
            <p>Párametros</p>
          </li>
          <li onClick={() => handleClick("TarjetonResults")}>
            <FontAwesomeIcon
              icon={faSquarePollVertical}
              style={{ color: "#fcfcfc" }}
            />
            <p>Ver resultados</p>
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

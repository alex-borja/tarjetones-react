import PropTypes from "prop-types";
import "../styles/components/Warning.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Warning({ warnings, setWarnings }) {
  let closeBtn = () => {
    setWarnings(!warnings);
  };

  return (
    <div className="warning">
      <div className="warning-wrapper">
        <p>{warnings}</p>
        <button className="closeBtn" onClick={closeBtn}>
          <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

Warning.propTypes = {
  warnings: PropTypes.string,
  setWarnings: PropTypes.func,
};

export default Warning;

import PropTypes from "prop-types";
import "../styles/components/ResultCard.css";
import { getDiff } from "../helpers/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function ResultCard({ results, errors }) {
  let displayResults = (results) => {
    let results_jsx = results.map((val, idx) => {
      return (
        <div key={idx} className="resItem correct-res">
          <h4 className="resTitle">{val}</h4>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "green", fontSize: "30px" }}
            className="icon-res"
          ></FontAwesomeIcon>
        </div>
      );
    });

    return results_jsx;
  };

  const displayErrors = (errors) => {
    let errors_jsx = errors.map((val, idx) => {
      let correctVal = `Valor correcto: ${val.correctValue}`;
      let incorrectValue = `Valor del archivo: ${val.valueProvided}`;

      let original = val.correctValue.split("");
      let new_val = val.valueProvided.split("");

      let diff = getDiff(new_val, original);
      return (
        <div key={idx} className="resItem">
          <h4 className="resTitle">{val.title}</h4>
          <div className="vals">
            <p className="correct">{correctVal}</p>
            <p className="incorrect">{incorrectValue}</p>
            <ul className="diff-sec">
              {diff.map((item, idx) => (
                <li
                  className="diff-li"
                  key={idx}
                  style={{
                    color:
                      item.type === "added"
                        ? "green"
                        : item.type === "removed"
                          ? "red"
                          : "white",
                  }}
                >
                  <pre style={{ fontSize: "15px" }}>
                    {item.type === "added" && "+"}
                    {item.type === "removed" && "-"}
                    {item.value}
                  </pre>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    });

    return errors_jsx;
  };

  return (
    <div className="displayResults">
      <div className="results">
        <h4 className="numErrors">
          El archivo contiene: {errors.length + " "}
          {errors.length === 1 ? "error" : "errores"} (basado en tus parámetros)
        </h4>
        {displayResults(results)}
        {displayErrors(errors)}
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  errors: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
};

export default ResultCard;

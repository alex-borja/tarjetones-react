import PropTypes from "prop-types";
import "../styles/components/ResultCard.css";
import { getDiff } from "../helpers/helpers";

function ResultCard({ errors }) {
  let displayResults = (data) => {
    return data.map((val, idx) => {
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
                  {item.type === "added" && "+"}
                  {item.type === "removed" && "-"}
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="displayResults">
      <div className="errors">
        <h4 className="numErrors">
          El archivo contiene: {errors.length}{" "}
          {errors.length === 1 ? "error" : "errores"} (basado en tus parámetros)
        </h4>
        {displayResults(errors)}
      </div>
    </div>
  );
}

ResultCard.propTypes = {
  errors: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
};

export default ResultCard;

/*
abcd
----
1011
acd  
----
111

-> acd -> 1, b -> 0

*/

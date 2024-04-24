import PropTypes from "prop-types";
import "../styles/components/ResultCard.css";
import { getDiff } from "../helpers/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ResultCard({ reports }) {
  return (
    <>
      {reports.map((report, idx) => (
        <ReportItem report={report} key={idx} />
      ))}
    </>
  );
}

const ReportItem = ({ report }) => {
  const [isActive, setIsActive] = useState();

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

  return (
    <div className="accordion">
      <div className="results">
        {report.dafaultError ? (
          <h4 className="accordionBtn">
            Hubo un error con el archivo:
            <span style={{ color: "rgb(235, 79, 52)" }}>
              {" " + report.fileName}
            </span>
          </h4>
        ) : (
          <>
            <h4 className="accordionBtn" onClick={() => setIsActive(!isActive)}>
              El archivo{" "}
              <span style={{ color: "#8bb2ea" }}>{report.fileName}</span>{" "}
              contiene: {report.errors.length + " "}
              {report.errors.length === 1 ? "error" : "errores"} (basado en tus
              parámetros)
            </h4>
            <div
              className={
                isActive
                  ? "resultAccordion active-accordeon"
                  : "resultAccordion"
              }
            >
              {displayResults(report.validations)}
              {displayErrors(report.errors)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ResultCard.propTypes = {
  reports: PropTypes.array.isRequired,
};

export default ResultCard;

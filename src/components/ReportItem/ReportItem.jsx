import "../../styles/components/ResultCard.css";
import { useState } from "react";
import displayErrors from "./displayErrors";
import displayResults from "./displayResults";

function ReportItem({ report }) {
  const [isActive, setIsActive] = useState();
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
}

export default ReportItem;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function displayResults(results) {
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
}

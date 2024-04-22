import { useEffect, useState } from "react";
import "../styles/views/FileInputView.css";
import ResultCard from "../components/resultCard";
import { checkValidParams } from "../utils/utils";
import Warning from "../components/warning";
import { useNavigate } from "react-router-dom";
import { add } from "../slices/tarjetonStoreSlice";
import { useSelector, useDispatch } from "react-redux";
import Validator from "../utils/validation";

function FileInput() {
  const [reports, setReports] = useState([]);
  const [warnings, setWarnings] = useState("");
  const [fileNames, setFileNames] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const dispatch = useDispatch();
  const tarjetonStore = useSelector((state) => state.tarjetonStore.store);
  const params = useSelector((state) => state.tarjetonParams.params);
  const tarjetonType = useSelector(
    (state) => state.tarjetonParams.tarjetonType,
  );

  let navigate = useNavigate();
  useEffect(() => {
    if (!checkValidParams(params)) return navigate("/params");
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!tarjetonStore.length)
      return setWarnings("Ingresa un tarjeton para validar!");

    let validator = new Validator(tarjetonStore, params, tarjetonType);
    setReports(validator.getReports());
    setShowResult(true);
  };

  let handleFile = (e) => {
    setShowResult(false);
    addFiles(e.target.files);
    e.target.value = null;
  };

  let addFiles = (files) => {
    for (let file of files) {
      if (file.type !== "text/html") {
        setWarnings(`${file.name}: El archivo no es HTML!`);
        continue;
      }

      setFileNames((n) => (n = [...n, file.name]));
      const reader = new FileReader();
      reader.onload = (e) => {
        dispatch(add({ tarjeton: e.target.result, name: file.name }));
      };
      reader.readAsText(file);
    }
  };

  let renderResults = () => {
    return showResult ? (
      <ResultCard reports={reports}></ResultCard>
    ) : (
      <h3>Suba un archivo para analizar</h3>
    );
  };

  let displayWarnings = () => {
    if (warnings.length) {
      return <Warning warnings={warnings} setWarnings={setWarnings}></Warning>;
    }
  };

  return (
    <div className="fileInput">
      {displayWarnings()}
      <div className="fileInputWrapper">
        <div className="left">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label className="uploadFile" htmlFor="file">
              Ingrese un archivo compilado
            </label>
            <input
              type="file"
              accept=".html"
              id="file"
              onChange={handleFile}
              multiple
            />
            <div className="selectedFiles">
              <h4>Archivo seleccionado:</h4>
              {fileNames.map((name, idx) => (
                <div key={idx}>
                  <p>{name}</p>
                  <br />
                </div>
              ))}
            </div>
            <button type="submit" className="uploadBtn">
              Subir
            </button>
          </form>
        </div>
        <div className="right">{renderResults()}</div>
      </div>
    </div>
  );
}

export default FileInput;

import { useEffect, useState } from "react";
import "../styles/views/FileInputView.css";
import ResultCard from "../components/resultCard";
import { checkValidParams } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import {
  add,
  deleteAll,
  deleteFileFromStore,
} from "../slices/tarjetonStoreSlice";
import { useSelector, useDispatch } from "react-redux";
import Validator from "../utils/validation";
import { getSedeFromFileName } from "../helpers/helpers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FileInput() {
  const [reports, setReports] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const dispatch = useDispatch();
  const tarjetonStore = useSelector((state) => state.tarjetonStore.store);
  const params = useSelector((state) => state.tarjetonParams.params);
  const tarjetonType = useSelector(
    (state) => state.tarjetonParams.tarjetonType,
  );

  useEffect(() => {
    if (!fileNames.length) {
      dispatch(deleteAll());
    }
  }, [fileNames]);

  let navigate = useNavigate();
  useEffect(() => {
    if (!tarjetonType || !checkValidParams(params)) {
      return navigate("/params");
    }
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!tarjetonStore.length) return warn("Ingresa un tarjetón para validar!");

    for (let tarjeton of tarjetonStore) {
      let sede = getSedeFromFileName(tarjeton.name);
      if (!params.sedes.includes(sede)) {
        return warn(
          "Tarjeton " + sede + " no existe en la lista de tus parametros",
        );
      }
    }

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
        warn(`${file.name} no es HTML!`);
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

  let deleteFile = (e, file) => {
    e.preventDefault;

    let files = fileNames.filter((f) => f !== file);
    setFileNames(files);
    setReports([]);
    dispatch(deleteFileFromStore({ file }));
  };

  const warn = (warn) => {
    toast.warn(warn, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="fileInput">
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
              onChange={(e) => handleFile(e)}
              multiple
            />
            <div className="selectedFiles">
              <h4>Archivos seleccionados:</h4>
              {fileNames.map((name, idx) => (
                <div key={idx} className="file">
                  <p>{name}</p>
                  <button
                    onClick={(e) => deleteFile(e, name)}
                    className="deleteFile"
                  >
                    DEL
                  </button>
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
      <ToastContainer position="top-center" pauseOnHover={false} />
    </div>
  );
}

export default FileInput;

import "../styles/views/TarjetonParams.css";
import { useEffect, useState } from "react";
import Warning from "../components/warning";
import { INPUT_FIELDS } from "../utils/utils";
import ParamInput from "../components/paramInput";
import { FURRIEL_MAP_FUNIBER } from "../utils/furriels";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../slices/tarjetonParamsSlice";

function TarjetonParamsView() {
  let [warnings, setWarnings] = useState("");
  const params = useSelector((state) => state.tarjetonParams.params);
  const tarjetonType = useSelector((state) => state.tarjetonParams.tarjetonType);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (!tarjetonType) return navigate("/")
  }, [])

  let submitParams = (e) => {
    e.preventDefault();
    validateParams();
  };

  let validateParams = () => {
    if (checkValidParams()) {
      return navigate("/fileInput")
    }
  };

  let handleInput = (e) => {
    let { name, value } = e.target;
    dispatch(update({ tarjetonType, params: { ...params, [name]: value.trim() } }))
  };

  let checkValidParams = () => {
    for (const property in params) {
      if (params[property] === "") {
        setWarnings("Por favor, rellena todos los campos.");
        return false;
      }
    }

    if (!FURRIEL_MAP_FUNIBER[params.sede]) {
      setWarnings("La sede que indicaste no existe.");
      return false;
    }
    return true;
  };

  let clearInputs = () => {
    setSharedParams({
      sede: "",
      pixel: "",
      linkFinal: "",
      bannerUrl: "",
      kw: "",
      matomo: "",
    });
  };

  let renderInputFields = () => {
    let tarjetonParams = INPUT_FIELDS.filter(
      (param) => param.name in params,
    );

    let pms = localStorage.getItem("sharedParams");
    pms = JSON.parse(pms);

    return tarjetonParams.map((field) => (
      <ParamInput
        key={field.id}
        name={field.name}
        label={field.label}
        id={field.id}
        placeholder={field.placeholder}
        onChange={handleInput}
        value={params[field.name]}
      ></ParamInput>
    ));
  };

  let displayWarnings = () => {
    return warnings.length ? (
      <Warning warnings={warnings} setWarnings={setWarnings}></Warning>
    ) : (
      <></>
    );
  };

  return (
    <div className="tarjetonParams">
      {displayWarnings()}
      <form className="paramsForm" onSubmit={(e) => submitParams(e)}>
        <div className="inputFields">{renderInputFields()}</div>
        <div className="btns">
          <div className="btnContainer">
            <button type="submit" className="btn submit">
              Seguir
            </button>
            <button
              type="button"
              className="btn clearBtn"
              onClick={clearInputs}
            >
              Limpiar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TarjetonParamsView;

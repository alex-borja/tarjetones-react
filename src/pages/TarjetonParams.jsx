import "../styles/views/TarjetonParams.css";
import { useEffect, useState } from "react";
import { INPUT_FIELDS } from "../utils/utils";
import ParamInput from "../components/paramInput";
import { FURRIEL_MAP_FUNIBER } from "../utils/furriels";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update } from "../slices/tarjetonParamsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TarjetonParams() {
  const params = useSelector((state) => state.tarjetonParams.params);
  const paramsStore = useSelector((state) => state.tarjetonParams);
  const tarjetonType = useSelector(
    (state) => state.tarjetonParams.tarjetonType,
  );

  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (!tarjetonType) return navigate("/");
  }, []);

  let submitParams = (e) => {
    e.preventDefault();
    validateParams();
  };

  let validateParams = () => {
    if (checkValidParams()) {
      return navigate("/fileInput");
    }
  };

  let handleInput = (e) => {
    let { name, value } = e.target;
    dispatch(
      update({ tarjetonType, params: { ...params, [name]: value.trim() } }),
    );
  };

  let checkValidParams = () => {
    for (const property in params) {
      if (params[property] === "") {
        warn("Por favor, rellena todos los campos.");
        return false;
      }
    }

    let sedes = params.sedes.split(",");
    for (let sede of sedes) {
      if (!FURRIEL_MAP_FUNIBER[sede.trim()]) {
        warn("La sede que indicaste no existe: " + sede.trim());
        return false;
      }
    }
    return true;
  };

  let clearInputs = () => {
    let clearInputs = {};
    for (let param in params) {
      clearInputs[param] = "";
    }

    dispatch(
      update({ tarjetonType: paramsStore.tarjetonType, params: clearInputs }),
    );
  };

  let renderInputFields = () => {
    let tarjetonParams = INPUT_FIELDS.filter((param) => param.name in params);

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
    <div className="tarjetonParams">
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
      <ToastContainer />
    </div>
  );
}

export default TarjetonParams;

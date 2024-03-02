import "../App.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Warning from "../components/warning";
import { INPUT_FIELDS } from "../utils/utils";
import ParamInput from "../components/paramInput";
import { SEDE_MAP_FUNIBER, SEDE_MAP_UNEATLANTICO } from "../utils/db";


function TarjetonParamsView({
   showParams,
   setShowParams,
   sharedParams,
   setSharedParams,
}) {
   let [warnings, setWarnings] = useState("");

   let submitParams = (e) => {
      e.preventDefault();
      validateParams();
   };

   let validateParams = () => {
      if (checkValidParams()) {
         setShowParams(!showParams);
      }
   };

   let handleInput = (e) => {
      let { name, value } = e.target;
      setSharedParams((prev) => ({ ...prev, [name]: value.trim() }));
   };

   let checkValidParams = () => {
      for (const property in sharedParams) {
         if (sharedParams[property] === "") {
            setWarnings("Por favor, rellena todos los campos.");
            return false;
         }
      }

      if (!SEDE_MAP_FUNIBER[sharedParams.sede]) {
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
      let tarjetonParams = INPUT_FIELDS.filter((param) => param.name in sharedParams);

      return tarjetonParams.map((field) => (
         <ParamInput
            key={field.id}
            name={field.name}
            label={field.label}
            id={field.id}
            placeholder={field.placeholder}
            onChange={handleInput}
            value={sharedParams[field.name]}
         ></ParamInput>
      ));

   };

   let renderWarnings = () => {
      return warnings.length ? (
         <Warning
            warnings={warnings}
            setWarnings={setWarnings}
         ></Warning>
      ) : (
         <></>
      );
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
         {renderWarnings()}
      </div>
   );
}

TarjetonParamsView.propTypes = {
   showParams: PropTypes.bool,
   setShowParams: PropTypes.func,
   sharedParams: PropTypes.object,
   setSharedParams: PropTypes.func,
};

export default TarjetonParamsView;

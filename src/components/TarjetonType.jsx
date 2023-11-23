import PropTypes from "prop-types";
import { TARJETON_TYPE } from "../utils/tarjetonType";
import "../styles/components/TarjetonTypes.css";

function TarjetonType({
  tarjetonType,
  setTarjetonType,
  setSharedParams,
  setShowParmas,
}) {
  let handleSelect = (e) => {
    setTarjetonType(e.target.value);
    setSharedParams(() => ({ ...TARJETON_TYPE[e.target.value].params }));

    setShowParmas(true);
  };

  return (
    <form className="tarjetonType">
      <label>Elije el tipo de Tarjeton:</label>
      <select onChange={(e) => handleSelect(e)} value={tarjetonType}>
        <option value="none">Selecciona un tarjeton</option>
        <option value="GGU">Generico de Grado Uneatlantico</option>
        <option value="GAF">Generico de Area Funiber</option>
        <option value="TEF">Tarjeton Evento Funiber</option>
        <option value="WBNRS_ENV_1">Tarjeton Webinar Env 1</option>
        <option value="WBNRS_ENV_2">Tarjeton Webinar Env 2</option>
      </select>
    </form>
  );
}

TarjetonType.propTypes = {
  tarjetonType: PropTypes.string,
  setTarjetonType: PropTypes.func,
  setSharedParams: PropTypes.func,
  setShowParmas: PropTypes.func,
  setPTests: PropTypes.func,
};

export default TarjetonType;

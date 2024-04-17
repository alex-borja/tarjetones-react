import PropTypes from "prop-types";
import { TARJETON_TYPE } from "../utils/tarjetonType";
import "../styles/views/TarjetonTypes.css";

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
      <select
        className="selectTargeton"
        onChange={(e) => handleSelect(e)}
        value={tarjetonType}
      >
        <option value="AREA">Tarjetón Tipo Área</option>
        <option value="PROGRAM">Tarjetón Tipo Programa</option>
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

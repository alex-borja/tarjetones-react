import PropTypes from "prop-types";
import { FUNIBER_AREA_URLS } from "../utils/utils";

function ParamInput({ label, id, placeholder, name, onChange, value }) {

  let grados = []
  for (let i in FUNIBER_AREA_URLS["ES"]) {
    grados.push(i);
  }

  if (name === "area") {
    return (
      < div className="paramComponent" >
        <label>{label}</label>
        <select
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        >
          <option value="Selecciona un grado">Selecciona un grado</option>
          {
            grados.map((g, idx) => (
              <option value={g} key={idx}>{g}</option>
            ))
          }
        </select>
      </div >
    )
  }

  return (
    <div className="paramComponent select">
      <label>{label}</label>
      <input
        autoComplete="off"
        type="text"
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

ParamInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default ParamInput;

import PropTypes from "prop-types";
import { TARJETON_TYPE } from "../utils/tarjetonType";

function TarjetonType({ tarjetonType, setTarjetonType, sharedParams, setSharedParams  }) {

	let handleSelect = (e) => {
		setTarjetonType(e.target.value);

		setSharedParams((prev) => ({ ...prev, ...TARJETON_TYPE[tarjetonType] }))
	}

    return (
	    <form>
			<label>Elije el tipo de Tarjeton:</label>
			<select onChange={(e) => handleSelect(e)} >
			    <option value="none">Selecciona un tarjeton</option>
			    <option value="GGU">Generico de Grado Uneatlantico</option>
				<option value="GAF">Generico de área Funiber</option>
			</select>
			<input type="submit" />
		</form>
    )
}

TarjetonType.propTypes = {
	tarjetonType: PropTypes.string,
	setTarjetonType: PropTypes.func,
	sharedParams: PropTypes.object,
	setSharedParams: PropTypes.func,
}


export default TarjetonType;

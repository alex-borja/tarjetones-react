import { SEDE_MAP } from "../db";
import PropTypes from "prop-types";

function Tarjeton_Params({ showParams, setShowParams, sharedParams, setSharedParams }) {
	let submitParams = (e) => {
		e.preventDefault();

		if (!(sharedParams.sede in SEDE_MAP)) {
			console.log("No existe una sede con esas siglas");
		}

		setShowParams(!showParams);
	}

	let handleInput = (e) => {
		let {name, value} = e.target;

		setSharedParams((prevParams) => ({ ...prevParams, [name]: value  }));
	}

	return (
		<div className="tarjetonParams">
			<form className="paramsForm" onSubmit={(e) => submitParams(e)}>
				<div className="paramComponent">
					<label>Sede:</label>
					<input type="text" id="sede" placeholder="Introduzca la sede"
						name="sede"
						onChange={handleInput}
						value={sharedParams.sede}
					/>
				</div>
				<div className="paramComponent">
					<label>Link Final:</label>
					<input type="text" id="linkFinal" placeholder="Introduzca la sede"
						name="linkFinal"
						onChange={handleInput}
						value={sharedParams.linkFinal}
					/>
				</div>
				<div className="paramComponent">
					<label>KW:</label>
					<input type="text" id="kw" placeholder="Introduzca el KW"
						name="kw"
						onChange={handleInput}
						value={sharedParams.kw}
					/>
				</div>
				<div className="paramComponent">
					<label>Matomo:</label>
					<input type="text" id="matomo" placeholder="Introduzca el Matomo"
						name="matomo"
						onChange={handleInput}
						value={sharedParams.matomo}
					/>
				</div>
				<div className="paramComponent">
					<label>URL del banner y botón:</label>
					<input type="text" id="url" placeholder="Introduzca la url"
						name="bannerUrl"
						onChange={handleInput}
						value={sharedParams.bannerUrl}
					/>
				</div>
				<div className="paramComponent">
					<button type="submit" className="submit">Seguir</button>
				</div>
			</form>
		</div>
	)
}

Tarjeton_Params.propTypes = {
	showParams: PropTypes.bool,
	setShowParams: PropTypes.func,
	sharedParams: PropTypes.object,
	setSharedParams: PropTypes.func,
}

export default Tarjeton_Params 

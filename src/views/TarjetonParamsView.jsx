import "../App.css"
import { useState } from "react";
import PropTypes from "prop-types";
import { SEDE_MAP } from "../utils/db";
import Warning from "../components/warning";
import { INPUT_FIELDS } from "../utils/utils";
import ParamInput from "../components/paramInput";
import { TARJETON_TYPE } from "../utils/tarjetonType";

function TarjetonParamsView({ showParams, setShowParams, sharedParams, setSharedParams }) {
	let [validParams, setValidParams] = useState("");
	let [tarjetonType, setTarjetonType] = useState("");

	let submitParams = (e) => {
		e.preventDefault();
		validateParams();
	}

	let handleTarjetonType = (e) => {
		e.preventDefault();

		if(TARJETON_TYPE[tarjetonType]) {
			return true
		}
	}

	let validateParams = () => {
		if (!(sharedParams.sede in SEDE_MAP)) {
			console.log("No existe una sede con esas siglas");
		}

		if (checkValidParams()) {
			setShowParams(!showParams);
		}

	}

	let handleInput = (e) => {
		let { name, value } = e.target;
		setSharedParams((prevParams) => ({ ...prevParams, [name]: value.trim() }));
	}

	let checkValidParams = () => {
		for (const property in sharedParams) {
			if (sharedParams[property] === "") {
				setValidParams("Por favor, rellena todos los campos.");
				return false
			}
		}

		if (!SEDE_MAP[sharedParams.sede]) {
			setValidParams("La sede que indicastes no existe.");
			return false
		}
		return true
	}

	let clearInputs = () => {
		setSharedParams({
			sede: "",
			pixel: "",
			linkFinal: "",
			bannerUrl: "",
			kw: "",
			matomo: ""
		})
	}

	let renderInputFields = () => {
		return INPUT_FIELDS.map((field) => (
			<ParamInput
				key={field.id}
				name={field.name}
				label={field.label}
				id={field.id}
				placeholder={field.placeholder}
				onChange={handleInput}
				value={sharedParams[field.name]}
			>
			</ParamInput>
		))
	}

	let validTarjetonType = () => {
		return (
			tarjetonType ?
				<form className="paramsForm" onSubmit={(e) => submitParams(e)}>
					{renderInputFields()}
					<div className="btns">
						<button type="submit" className="btn submit">Seguir</button>
						<button type="button" className="btn clearBtn" onClick={clearInputs}>Limpiar</button>
					</div>
				</form>
				:
				<form onSubmit={(e) => handleTarjetonType(e)}>
					<label>Elije el tipo de Tarjeton:</label>
					<select onChange={(e) => (setTarjetonType(e.target.value))} value={tarjetonType}>
						<option value="GGU">Generico de Grado Uneatlantico</option>
						<option value="EU">Evento Uneatlantico</option>
					</select>
					<input type="submit" />
				</form>

		)
	}

	let renderWarnings = () => {
		return validParams.length ? <Warning validParams={validParams} setValidParams={setValidParams}></Warning> : <></>
	}

	return (
		<div className="tarjetonParams">
			{validTarjetonType()}
			{renderWarnings()}
		</div>
	)
}

TarjetonParamsView.propTypes = {
	showParams: PropTypes.bool,
	setShowParams: PropTypes.func,
	sharedParams: PropTypes.object,
	setSharedParams: PropTypes.func,
}

export default TarjetonParamsView

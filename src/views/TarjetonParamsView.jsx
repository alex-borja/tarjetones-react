import "../App.css"
import { useState } from "react";
import PropTypes from "prop-types";
import { SEDE_MAP } from "../utils/db";
import { INPUT_FIELDS } from "../utils/utils";
import ParamInput from "../components/paramInput";

function TarjetonParamsView({ showParams, setShowParams, sharedParams, setSharedParams }) {
	let [validParams, setValidParams] = useState("");

	let submitParams = (e) => {
		e.preventDefault();
		validateParams();
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

	let renderWarnings = () => {
		return validParams.length ? <div className="validParams">{validParams}</div> : <></>
	}

	return (
		<div className="tarjetonParams">
			<form className="paramsForm" onSubmit={(e) => submitParams(e)}>
				{renderInputFields()}
				<div className="paramComponent">
					<div className="btns">
						<button type="submit" className="btn submit">Seguir</button>
						<button type="button" className="btn clearBtn" onClick={clearInputs}>Limpiar</button>
					</div>
				</div>
			</form>
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

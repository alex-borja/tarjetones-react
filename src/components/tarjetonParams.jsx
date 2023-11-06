import { useEffect, useState } from "react";
import { SEDE_MAP } from "../db";

function Tarjeton_Params({ showParams, setShowParams}) {
	const [sede, setSede] = useState("");
	const [linkFinal, setLinkFinal] = useState("");
	const [furriel, setFurriel] = useState("");
	const [kw, setKw] = useState("");
	const [matomo, setMatomo] = useState("");
	const [url, setUrl] = useState("");

	useEffect(() => {
		console.log("furriel updated:", furriel);
	}, [furriel])

	let submitParams = (e) => {
		e.preventDefault();

		if (!(sede in SEDE_MAP)) {
			console.log("No existe una sede con esas siglas");
		}

		setFurriel(SEDE_MAP[sede]);
		setShowParams(!showParams);
	}

	return (
		<div className="tarjetonParams">
			<form className="paramsForm" onSubmit={(e) => submitParams(e)}>
				<div className="paramComponent">
					<label>Sede:</label>
					<input type="text" id="sede" placeholder="Introduzca la sede" onChange={e => setSede(e.target.value)} value={sede} />
				</div>
				<div className="paramComponent">
					<label>Link Final:</label>
					<input type="text" id="linkFinal" placeholder="Introduzca la sede" onChange={e => setLinkFinal(e.target.value)} value={linkFinal} />
				</div>
				<div className="paramComponent">
					<label>KW:</label>
					<input type="text" id="kw" placeholder="Introduzca el KW" onChange={(e) => setKw(e.target.value)} value={kw} />
				</div>
				<div className="paramComponent">
					<label>Matomo:</label>
					<input type="text" id="matomo" placeholder="Introduzca el Matomo" onChange={(e) => setMatomo(e.target.value)} value={matomo} />
				</div>
				<div className="paramComponent">
					<label>URL del banner y botón:</label>
					<input type="text" id="url" placeholder="Introduzca la url" onChange={(e) => setUrl(e.target.value)} value={url} />
				</div>
				<div className="paramComponent">
					<button type="submit" className="submit">Seguir</button>
				</div>
			</form>
		</div>
	)
}

export default Tarjeton_Params 

import { useState } from "react"
import cheerio from "cheerio";
import { SEDE_MAP } from "../db";
import "../styles/fileInput.css";
import PropTypes from "prop-types";
import ResultCard from "./resultCard";

function FileInput({ sharedParams, showParams, setShowParams}) {
	const [htmlFile, setHtmlFile] = useState('');
	const [fileName, setFileName] = useState('');
	const [showResult, setShowResult] = useState(false);
	const [error, setError] = useState([]);
	const [result, setResult] = useState([]);

	let handleFile = (e) => {
		let file = e.target.files[0];
		setFileName(file.name);
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setHtmlFile(e.target.result);
			}
			reader.readAsText(file);
		}
	}

	let handleSubmit = (e) => {
		e.preventDefault();
		const $ = cheerio.load(htmlFile);

		const links = $('a');
		const title = $('title')[0].children[0].data;

		let finalLink = links[0].attribs.href;
		let bannerLink = links[1].attribs.href;
		let buttonLink = links[2].attribs.href;
		let urlLink = links[6].attribs.href;

		checkSedeTitle(title);
		checkFinalLink(finalLink)
		checkUrls(finalLink, bannerLink, buttonLink, urlLink);
		setShowResult(!showResult);
	}

	let checkSedeTitle = (title) => {
		let titleData = title.slice(0, 2)

		if (titleData === sharedParams.sede) {
			setResult((curr) => [...curr, "Sede del titulo correcto"])
		} else {
			setError((curr) => [...curr, "Sede del titulo incorrecta"])
		}
	}

	let checkFinalLink = (finalLink) => {
		let indexOfQuestionMark = finalLink.indexOf("?");
		let subUrl = finalLink.substring(0, indexOfQuestionMark);
		let url = subUrl.slice(-7).slice(0, 2)

		if (url === sharedParams.sede.toLowerCase()) {
			setResult((curr) => [...curr, "Link final correcto"])
		} else {
			setError((curr) => [...curr, "El link final no es correcto"])
		}
	}

	let checkUrls = (finalLink, bannerLink, buttonLink, urlLink) => {
		if (!SEDE_MAP[sharedParams.sede]) {
			setError("No existe esa sede");
		} else {
			let furriel = SEDE_MAP[sharedParams.sede];
			let url = "https://www.uneatlantico.es/"

			let correctFinalLink = sharedParams.linkFinal + furriel + sharedParams.kw + sharedParams.matomo;
			let correctBannerLink = sharedParams.bannerUrl + furriel + sharedParams.kw + sharedParams.matomo;
			let correctButtonLink = sharedParams.bannerUrl + furriel + sharedParams.kw + sharedParams.matomo;
			let correctUrlLink = url + furriel + sharedParams.kw + sharedParams.matomo;

			if (correctFinalLink !== finalLink) {
				let err = "Hay un error en el link final";
				setError((curr) => [...curr, err]);
			} else {
				let res = "Link final sin problemas"
				setResult((curr) => [...curr, res]);
			}

			if (correctBannerLink !== bannerLink) {
				let err = "Hay un error en link del banner";
				setError((curr) => [...curr, err]);
			} else {
				let res = "Link del banner y del botton sin problemas"
				setResult((curr) => [...curr, res]);
			}

			if (correctButtonLink !== buttonLink) {
				let err = "Hay un error en el link del botón";
				setError((curr) => [...curr, err]);
			} else {
				let res = "Link del botón sin problemas"
				setResult((curr) => [...curr, res]);
			}

			if (correctUrlLink !== urlLink) {
				let err = "Hay un error en el link del botón";
				setError((curr) => [...curr, err]);
			} else {
				let res = "Link del botón sin problemas"
				setResult((curr) => [...curr, res]);
			}
		}
	}

	let handleClick = () => {
		setShowParams(!showParams);
	}

	return (
		<div className="fileInput">
			<div className="left">
				<form onSubmit={(e) => handleSubmit(e)}>
					<label>Ingrese un archivo compilado:</label>
					<input type="file" accept=".html" id="file" onChange={handleFile} />
					<button type="submit">Subir</button>
				</form>

				<div className="selectedFiles">
					<h4>Archivo seleccionado:</h4>
					<p>{fileName}</p>
				</div>
				<div className="returnToParams">
					<button className="returnBtn" onClick={handleClick}>Regresar a los parametros</button>
				</div>
			</div>
			<div className="right">
				{
					showResult ?
						<ResultCard
							results={result} errors={error}>
						</ResultCard>
						:
						<h3>Suba un archivo para analizar</h3>
				}
			</div>
		</div>
	)
}

FileInput.propTypes = {
	sharedParams: PropTypes.object,
	showParams: PropTypes.bool,
	setShowParams: PropTypes.func
}

export default FileInput

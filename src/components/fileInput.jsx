import { useState } from "react"
import cheerio from "cheerio";
import { SEDE_MAP } from "../db";
import "../styles/fileInput.css";
import PropTypes from "prop-types";
import ResultCard from "./resultCard";

function FileInput({ sharedParams }) {
	const [htmlFile, setHtmlFile] = useState('');
	const [fileName, setFileName] = useState('');
	const [error, setError] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [result, setResult] = useState("");

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
		let finalLink = links[0].attribs.href;
		let bannerLink = links[1].attribs.href;
		let emailLink = links[6].attribs.href;

		checkUrls(finalLink, bannerLink, emailLink);
		setShowResult(!showResult);
	}

	let checkUrls = (finalLink, bannerLink, emailLink) => {
		if (!SEDE_MAP[sharedParams.sede]) {
			setError("No existe esa sede");
		} else {
			let furriel = SEDE_MAP[sharedParams.sede];

			let finalUrl = sharedParams.linkFinal + furriel + sharedParams.kw + sharedParams.matomo;
			let finalBannerLink = sharedParams.bannerUrl + furriel + sharedParams.kw + sharedParams.matomo;

			if (finalUrl !== finalLink) {
				let err = "Hay un error en el link final";
				setError(error.push(err));
			}

			if (bannerLink === finalBannerLink) {
				let err = "Hay un error en link del banner";
				setError(error.push(err));
			}

			if (emailLink === finalLink) {
				let err = "Hay un error en el link del correo";
				setError(error.push(err));
			}
		}
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
}

export default FileInput

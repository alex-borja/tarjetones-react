import cheerio from "cheerio";
import { useState } from "react"
import PropTypes from "prop-types";
import { SEDE_MAP_UNEATLANTICO } from "../utils/db";
import "../styles/views/FileInputView.css"
import ResultCard from "../components/resultCard"
import { PARAMS_INFO, getSedeFromFile } from "../utils/utils";

function FileInputView({ sharedParams }) {
	const [htmlFile, setHtmlFile] = useState('');
	const [fileName, setFileName] = useState('');
	const [showResult, setShowResult] = useState(false);
	const [error, setError] = useState([]);
	const [result, setResult] = useState([]);

	const furriel = SEDE_MAP[sharedParams.sede];
	const uneatUrl = "https://www.uneatlantico.es/"

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
		const pixel = $('img')[0].attribs.src;
		const title = $('title')[0].children[0].data;


		let finalLink = links[0].attribs.href;
		let bannerLink = links[1].attribs.href;
		let buttonLink = links[2].attribs.href;
		let urlLink = links[6].attribs.href;

		checkParams(title, pixel, finalLink, bannerLink, buttonLink, urlLink);
		setShowResult(!showResult);
	}

	let checkParams = (sede, pixel, finalLink, bannerLink, buttonLink, urlLink) => {
		sede = sede.slice(0, 2)

		const correctSede = sharedParams.sede;
		const correctFinalLink = sharedParams.linkFinal + furriel + sharedParams.kw + sharedParams.matomo;
		const correctPixel = sharedParams.pixel;
		const correctBannerLink = sharedParams.bannerUrl + furriel + sharedParams.kw + sharedParams.matomo;
		const correctButtonLink = sharedParams.bannerUrl + furriel + sharedParams.kw + sharedParams.matomo;
		const correctUrlLink = uneatUrl + furriel + sharedParams.kw + sharedParams.matomo;

		checkSingleParam(correctSede, sede, PARAMS_INFO.sede.result, PARAMS_INFO.sede.error)
		checkSingleParam(correctPixel, pixel, PARAMS_INFO.pixel.result, PARAMS_INFO.pixel.error)

		checkFinalLink(correctFinalLink, finalLink)

		checkSingleParam(correctBannerLink, bannerLink, PARAMS_INFO.banner.result, PARAMS_INFO.banner.error)
		checkSingleParam(correctButtonLink, buttonLink, PARAMS_INFO.button.result, PARAMS_INFO.button.error)
		checkSingleParam(correctUrlLink, urlLink, PARAMS_INFO.url.result, PARAMS_INFO.url.error)
	}

	let checkFinalLink = (correctFinalLink, finalLink) => {
		let fileSede = getSedeFromFile(finalLink);

		if (fileSede === sharedParams.sede.toLowerCase()) {
			checkSingleParam(correctFinalLink, finalLink, PARAMS_INFO.linkFinal.result, PARAMS_INFO.linkFinal.error)
		} else {
			setError((curr) => [...curr, {
				title: PARAMS_INFO.linkFinal.error,
				correctValue: correctFinalLink,
				valueProvided: finalLink,
			}])
		}
	}

	let checkSingleParam = (correctValue, providedValue, res, err) => {
		if (correctValue === providedValue) {
			setResult((curr) => [...curr, res])
		} else {
			handleError(err, correctValue, providedValue)
		}
	}

	let handleError = (title, correctValue, valueProvided) => {
		setError((curr) => [...curr, {
			title,
			correctValue,
			valueProvided
		}])
	}

	let renderResults = () => {
		return showResult ?
			<ResultCard
				results={result}
				errors={error}>
			</ResultCard>
			:
			<h3>Suba un archivo para analizar</h3>

	}

	return (
		<div className="fileInput">
			<div className="left">
				<form onSubmit={(e) => handleSubmit(e)}>
					<label className="uploadFile" htmlFor="file">Ingrese un archivo compilado</label>
					<input type="file" accept=".html" id="file" onChange={handleFile} />
					<div className="selectedFiles">
						<h4>Archivo seleccionado:</h4>
						<p>{fileName}</p>
					</div>
					<button type="submit" className="uploadBtn">Subir</button>
				</form>
			</div>
			<div className="right">
				{renderResults()}
			</div>
		</div>
	)
}
/*
	<div className="returnToParams">
	<button className="returnBtn" onClick={returnToParams}>Regresar a los parametros</button>
	</div>
*/

FileInputView.propTypes = {
	sharedParams: PropTypes.object,
	showParams: PropTypes.bool,
	setShowParams: PropTypes.func
}

export default FileInputView 

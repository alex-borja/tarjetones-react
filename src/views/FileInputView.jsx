import cheerio from "cheerio";
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/views/FileInputView.css";
import ResultCard from "../components/resultCard";
import {
	PARAMS_INFO,
	buildLinks,
	getSedeFromFile,
	hasSede,
} from "../utils/utils";
import { TARJETON_TYPE } from "../utils/tarjetonType";
import { FUNIBER_URL_LINKS } from "../utils/funiberUrlLinks";

function FileInputView({ sharedParams, tarjetonType }) {
	const [htmlFile, setHtmlFile] = useState("");
	const [fileName, setFileName] = useState("");
	const [showResult, setShowResult] = useState(false);
	const [error, setError] = useState([]);
	const [result, setResult] = useState([]);

	let footerUrlLink =
		sharedParams.appliedUrl
			? FUNIBER_URL_LINKS[sharedParams.sede]
			: TARJETON_TYPE[tarjetonType].urlLink;

	const indexes = TARJETON_TYPE[tarjetonType].toCheck;

	let handleFile = (e) => {
		let file = e.target.files[0];

		setError([]);
		setResult([]);
		setShowResult(false);
		setFileName(file.name);

		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setHtmlFile(e.target.result);
			};
			reader.readAsText(file);
		}
	};

	let handleSubmit = (e) => {
		e.preventDefault();

		if (error.length || result.length) {
			console.log("ya tienes un archivo abierto!!");
			return;
		}

		const $ = cheerio.load(htmlFile);

		const links = $("a");
		const pixel = $("img")[0].attribs.src;
		const title = $("title")[0].children[0].data;

		let finalLink = links[indexes.finalLinkIndex].attribs.href;
		let bannerLink = links[indexes.bannerLinkIndex].attribs.href;
		let buttonLink = links[indexes.buttonLinkIndex].attribs.href;
		let urlLink = links[indexes.urlLinkIndex].attribs.href;

		checkParams(title, pixel, finalLink, bannerLink, buttonLink, urlLink);
		setShowResult(true);
	};

	let checkParams = (
		sede,
		pixel,
		finalLink,
		bannerLink,
		buttonLink,
		urlLink
	) => {
		sede = sede.slice(0, 2);

		//footerUrlLink = repairUrl(urlLink);

		let [
			correctSede,
			correctFinalLink,
			correctPixel,
			correctBannerLink,
			correctButtonLink,
			correctUrlLink,
		] = buildLinks(sharedParams, urlLink);

		if (hasSede(tarjetonType)) {
			checkSingleParam(
				correctSede,
				sede,
				PARAMS_INFO.sede.result,
				PARAMS_INFO.sede.error
			);
		}

		checkFinalLink(correctFinalLink, finalLink);

		checkSingleParam(
			correctPixel,
			pixel,
			PARAMS_INFO.pixel.result,
			PARAMS_INFO.pixel.error
		);

		checkSingleParam(
			correctBannerLink,
			bannerLink,
			PARAMS_INFO.banner.result,
			PARAMS_INFO.banner.error
		);
		checkSingleParam(
			correctButtonLink,
			buttonLink,
			PARAMS_INFO.button.result,
			PARAMS_INFO.button.error
		);
		checkSiteUrl(correctUrlLink, urlLink);
	};

	let repairUrl = (url) => {
		let finalChar = url.length - 1;
		if (url[finalChar] === "/") {
			return url;
		} else {
			return url + "/";
		}
	}

	let checkSiteUrl = (correctUrlLink, urlLink) => {
		let indexOfQuestionMark = urlLink.indexOf("?");
		let leftSide = urlLink.substring(0, indexOfQuestionMark);
		let rightSide = urlLink.substring(indexOfQuestionMark, urlLink.length);

		let link = repairUrl(leftSide);
		link += rightSide;

		checkSingleParam(
			correctUrlLink,
			link,
			PARAMS_INFO.url.result,
			PARAMS_INFO.url.error
		);
	}

	let checkFinalLink = (correctFinalLink, finalLink) => {
		if (!sharedParams.hasSede) {
			return checkSingleParam(
				correctFinalLink,
				finalLink,
				PARAMS_INFO.linkFinal.result,
				PARAMS_INFO.linkFinal.error
			);
		}

		let fileSede = getSedeFromFile(finalLink);
		let validSede = fileSede === sharedParams.sede.toLowerCase();

		if (!validSede) {
			setError((curr) => [
				...curr,
				{
					title: PARAMS_INFO.linkFinal.error,
					correctValue: correctFinalLink,
					valueProvided: finalLink,
				},
			]);
		} else {
			setResult((curr) => [...curr, PARAMS_INFO.linkFinal.result]);
		}
	};

	let checkSingleParam = (correctValue, providedValue, res, err) => {
		if (correctValue === providedValue) {
			setResult((curr) => [...curr, res]);
		} else {
			handleError(err, correctValue, providedValue);
		}
	};

	let handleError = (title, correctValue, valueProvided) => {
		setError((curr) => [
			...curr,
			{
				title,
				correctValue,
				valueProvided,
			},
		]);
	};

	let renderResults = () => {
		return showResult ? (
			<ResultCard results={result} errors={error}></ResultCard>
		) : (
			<h3>Suba un archivo para analizar</h3>
		);
	};

	let deleteAction = () => {
		setError([]);
		setResult([]);
		setShowResult(false);
		setHtmlFile("");
		setFileName("");
	};

	// fix later
	let deleteFile = () => {
		return htmlFile ? (
			<button onClick={() => deleteAction()}>Eliminar</button>
		) : (
			<></>
		);
	};

	return (
		<div className="fileInput">
			<div className="leftContent">
				<div className="left">
					<form onSubmit={(e) => handleSubmit(e)}>
						<label className="uploadFile" htmlFor="file">
							Ingrese un archivo compilado
						</label>
						<input type="file" accept=".html" id="file" onChange={handleFile} />
						<div className="selectedFiles">
							<h4>Archivo seleccionado:</h4>
							<p>{fileName}</p>
						</div>
						<button type="submit" className="uploadBtn">
							Subir
						</button>
					</form>
				</div>
				<div className="right">{renderResults()}</div>
			</div>
		</div>
	);
}

FileInputView.propTypes = {
	sharedParams: PropTypes.object,
	showParams: PropTypes.bool,
	setShowParams: PropTypes.func,
	tarjetonType: PropTypes.string,
};

export default FileInputView;

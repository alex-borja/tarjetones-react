import cheerio from "cheerio";
import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/views/FileInputView.css";
import ResultCard from "../components/resultCard";
import {
  PARAMS_INFO,
  buildLinks,
  getSedeFromFile,
  buildCorrectText,
  getFooterText,
  getFooterLink,
} from "../utils/utils";
import { TARJETON_TYPE } from "../utils/tarjetonType";
import { FUNIBER_URL_LINKS } from "../utils/funiberUrlLinks";
import { repairUrl } from "../helpers/helpers";
import Warning from "../components/warning";

function FileInputView({ sharedParams, tarjetonType }) {
  const [htmlFile, setHtmlFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState([]);
  const [result, setResult] = useState([]);
  let [warnings, setWarnings] = useState("");

  let footerUrlLink =
    tarjetonType === "PROGRAM"
      ? "https://www.uneatlantico.es/"
      : FUNIBER_URL_LINKS[sharedParams.sede];

  const indexes = TARJETON_TYPE[tarjetonType].paramsIndexes;

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!htmlFile) return setWarnings("Ingresa un tarjeton para validar!");
      let $ = cheerio.load(htmlFile);
      setError([]);
      setResult([]);

      const links = $("a");
      const pixel = $("img")[0].attribs.src;
      const sede = $("title")[0].children[0].data.slice(0, 2);
      const footerText = getFooterText(links, indexes.urlLinkIndex);

      let finalLink = links[indexes.finalLinkIndex].attribs.href;
      let bannerLink = links[indexes.bannerLinkIndex].attribs.href;
      let buttonLink = links[indexes.buttonLinkIndex].attribs.href;
      let footerLink = getFooterLink(links, indexes.urlLinkIndex);

      checkParams(pixel, finalLink, bannerLink, buttonLink, footerLink);
      checkText(sede, footerText);
      setShowResult(true);
    } catch (e) {
      setWarnings("Ha occurido un error!");
      console.error(e);
    }
  };

  let handleFile = (e) => {
    setShowResult(false);

    let file = e.target.files[0];
    setFileName(file.name);

    if (file.type !== "text/html") {
      setWarnings("El archivo no es HTML!");
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setHtmlFile(e.target.result);
      };
      reader.readAsText(file);
    }
    e.target.value = null;
  };

  let checkParams = (pixel, finalLink, bannerLink, buttonLink, footerLink) => {
    footerUrlLink = repairUrl(footerUrlLink);

    let [
      correctFinalLink,
      correctPixel,
      correctBannerLink,
      correctButtonLink,
      correctFooterLink,
    ] = buildLinks(sharedParams, footerUrlLink, tarjetonType);

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

    checkSiteUrl(correctFooterLink, footerLink);
  };

  let checkText = (sede, footerText) => {
    footerUrlLink = repairUrl(footerUrlLink);

    let [correctSede, correctFooterText] = buildCorrectText(
      sharedParams,
      footerUrlLink
    );

    if (tarjetonType !== "PROGRAM") {
      checkSingleParam(
        correctSede,
        sede,
        PARAMS_INFO.sede.result,
        PARAMS_INFO.sede.error
      );
    }

    checkSingleParam(
      correctFooterText,
      footerText,
      PARAMS_INFO.footerText.result,
      PARAMS_INFO.footerText.error
    );
  };

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
  };

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
    correctValue = correctValue.replaceAll("%20", " ");
    providedValue = providedValue.replaceAll("%20", " ");

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

  let displayWarnings = () => {
    if (warnings.length) {
      return <Warning warnings={warnings} setWarnings={setWarnings}></Warning>;
    }
  };

  return (
    <div className="fileInput">
      {displayWarnings()}
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

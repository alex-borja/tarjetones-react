import cheerio from "cheerio";
import { TARJETON_TYPE } from "./tarjetonType";
import { FUNIBER_URL_LINKS } from "./funiberUrlLinks";
import { repairUrl } from "../helpers/helpers";
import {
  getFooterText,
  getFooterLink,
  buildCorrectText,
  PARAMS_INFO,
  buildLinks,
  getSedeFromFile,
} from "./utils";

class Report {
  constructor(fileName, validations, errors) {
    this.fileName = fileName;
    this.validations = validations;
    this.errors = errors;
  }

  addError(data) {
    this.errors.push(data);
  }

  addValidation(data) {
    this.validations.push(data);
  }
}

export default class Validator {
  reports = [];
  currentReport = [];

  constructor(files, params, tarjetonType) {
    (this.files = files),
      (this.params = params),
      (this.tarjetonType = tarjetonType);
  }

  getReports() {
    for (let file of this.files) {
      this.#validate(file);
    }
    return this.reports;
  }

  #validate(file) {
    this.currentReport = new Report(file.name, [], []);
    try {
      let $ = cheerio.load(file.tarjeton);
      let footerUrlLink = this.#getFooterUrlLink();
      let indexes = TARJETON_TYPE[this.tarjetonType].paramsIndexes;

      const links = $("a");
      const pixel = $("img")[0].attribs.src;
      const sede = $("title")[0].children[0].data.slice(0, 2);
      const footerText = getFooterText(links, indexes.urlLinkIndex);

      let finalLink = links[indexes.finalLinkIndex].attribs.href;
      let bannerLink = links[indexes.bannerLinkIndex].attribs.href;
      let buttonLink = links[indexes.buttonLinkIndex].attribs.href;
      let footerLink = getFooterLink(links, indexes.urlLinkIndex);

      this.#checkText(sede, footerText, footerUrlLink);
      this.#checkParams(
        pixel,
        finalLink,
        bannerLink,
        buttonLink,
        footerLink,
        footerUrlLink,
      );

      this.reports.push(this.currentReport);
    } catch (err) {
      // debugging
      console.error(err);

      this.currentReport.addError("Hubo un error con el archivo");
      this.reports.push(this.currentReport);
    }
  }

  #getFooterUrlLink() {
    return this.tarjetonType === "PROGRAM"
      ? "https://www.uneatlantico.es/"
      : FUNIBER_URL_LINKS[this.params.sede];
  }

  #checkText(sede, footerText, footerUrlLink) {
    footerUrlLink = repairUrl(footerUrlLink);
    let [correctSede, correctFooterText] = buildCorrectText(
      this.params,
      footerUrlLink,
    );

    if (this.tarjetonType !== "PROGRAM") {
      this.#checkSingleParam(
        correctSede,
        this.sede,
        PARAMS_INFO.sede.result,
        PARAMS_INFO.sede.error,
      );

      this.#checkSingleParam(
        correctFooterText,
        footerText,
        PARAMS_INFO.footerText.result,
        PARAMS_INFO.footerText.error,
      );
    }

    this.#checkSingleParam(
      correctSede,
      sede,
      PARAMS_INFO.sede.result,
      PARAMS_INFO.sede.error,
    );

    this.#checkSingleParam(
      correctFooterText,
      footerText,
      PARAMS_INFO.footerText.result,
      PARAMS_INFO.footerText.error,
    );
  }

  #checkSingleParam(correctValue, valueToCheck, validation, error) {
    correctValue = correctValue.replaceAll("%20", " ");
    valueToCheck = valueToCheck.replaceAll("%20", " ");

    if (correctValue === valueToCheck) {
      this.currentReport.addValidation(validation);
    } else {
      this.currentReport.addError({
        title: error,
        correctValue,
        valueProvided: valueToCheck,
      });
    }
  }

  #checkParams(
    pixel,
    finalLink,
    bannerLink,
    buttonLink,
    footerLink,
    footerUrlLink,
  ) {
    footerUrlLink = repairUrl(footerUrlLink);
    let [
      correctFinalLink,
      correctPixel,
      correctBannerLink,
      correctButtonLink,
      correctFooterLink,
    ] = buildLinks(this.params, footerUrlLink, this.tarjetonType);

    this.#checkFinalLink(correctFinalLink, finalLink);
    this.#checkSingleParam(
      correctPixel,
      pixel,
      PARAMS_INFO.pixel.result,
      PARAMS_INFO.pixel.error,
    );

    this.#checkSingleParam(
      correctBannerLink,
      bannerLink,
      PARAMS_INFO.banner.result,
      PARAMS_INFO.banner.error,
    );

    this.#checkSingleParam(
      correctButtonLink,
      buttonLink,
      PARAMS_INFO.button.result,
      PARAMS_INFO.button.error,
    );

    this.#checkSiteUrl(correctFooterLink, footerLink);
  }

  #checkFinalLink(correctFinalLink, finalLink) {
    let fileSede = getSedeFromFile(finalLink);
    let validSede = fileSede === this.params.sede.toLowerCase();

    if (!validSede) {
      this.currentReport.addError({
        title: PARAMS_INFO.linkFinal.error,
        correctValue: correctFinalLink,
        valueProvided: finalLink,
      });
    } else {
      this.currentReport.addValidation(PARAMS_INFO.linkFinal.result);
    }
  }

  #checkSiteUrl(correctUrlLink, urlLink) {
    let indexOfQuestionMark = urlLink.indexOf("?");
    let leftSide = urlLink.substring(0, indexOfQuestionMark);
    let rightSide = urlLink.substring(indexOfQuestionMark, urlLink.length);

    let link = repairUrl(leftSide);
    link += rightSide;

    this.#checkSingleParam(
      correctUrlLink,
      link,
      PARAMS_INFO.url.result,
      PARAMS_INFO.url.error,
    );
  }
}

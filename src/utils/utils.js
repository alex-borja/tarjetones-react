import { SEDE_MAP_FUNIBER, SEDE_MAP_UNEATLANTICO } from "./db";

export const INPUT_FIELDS = [
   {
      label: "Sede:",
      name: "sede",
      id: "sede",
      placeholder: "Introduzca la sede",
   },
   {
      label: "Pixel:",
      name: "pixel",
      id: "pixel",
      placeholder: "Introduzca el pixel de seguimiento",
   },
   {
      label: "Link Final:",
      name: "linkFinal",
      id: "linkFinal",
      placeholder: "Introduzca el Link Final",
   },
   {
      label: "Furriel",
      name: "furriel",
      id: "furriel",
      placeholder: "Introduce el furriel de la sede",
   },
   {
      label: "KW:",
      name: "kw",
      id: "kw",
      placeholder: "Introduzca el KW",
   },
   {
      label: "Matomo:",
      name: "matomo",
      id: "matomo",
      placeholder: "Introduzca el matomo",
   },
   {
      label: "Url del botón y del banner:",
      name: "heroUrl",
      id: "heroUrl",
      placeholder: "Introduce la url del banner y del botón",
   },
   {
      label: "Url funiber: ",
      name: "urlFuniber",
      id: "urlFuniber",
      placeholder: "Introduce la url de Funiber",
   },
   {
      label: "Introduce el mtm_medium: ",
      name: "matomo_medium",
      id: "matomo_medium",
      placeholder: "Introduce el mtm_medium",
   },
   {
      label: "Introduce el mtm_cid: ",
      name: "matomo_cid",
      id: "matomo_cid",
      placeholder: "Introduce el mtm_cid",
   },
   {
      label: "Introduce la url de funiber: ",
      name: "funiberUrl",
      id: "funiberUrl",
      placeholder: "Introduce la url de funiber",
   },
];

export const PARAMS_INFO = {
   sede: {
      error: "Hay un error con la sede",
      result: "Sede sin problemas",
   },
   pixel: {
      error: "Hay un error con el pixel de seguimiento",
      result: "Pixel de seguimiento sin problemas",
   },
   linkFinal: {
      error: "Hay un error con el link final",
      result: "Link final sin problemas",
   },
   banner: {
      error: "Hay un error en el link del banner",
      result: "Link del banner sin problemas",
   },
   button: {
      error: "Hay un error en el link del botón",
      result: "Link del botón sin problemas",
   },
   url: {
      error: "Hay un error en la URL del uneatlantico",
      result: "Link de la URL de uneatlantico sin problemas",
   },
};

export function getSedeFromFile(link) {
   let indexOfQuestionMark = link.indexOf("?");
   let subUrl = link.substring(0, indexOfQuestionMark);
   let fileSede = subUrl.slice(-7).slice(0, 2);

   return fileSede;
}


export function buildCorrectFinalLink(link, sede) {
   let indexOfFileType = link.indexOf(".html");
   let arr = link.split("");

   arr[indexOfFileType - 2] = sede[0];
   arr[indexOfFileType - 1] = sede[1];

   return arr.join("");
}

// may be good to remove this function
export function hasSede(type) {
   if (type !== "TEF" && type !== "WBNRS_ENV_1" && type !== "WBNRS_ENV_2") {
      return true;
   }
   return false;
}

export function getFurriel(tarjetonType, sharedParams) {
   switch (tarjetonType) {
      case "AREA":
         return SEDE_MAP_FUNIBER[sharedParams.sede];
      case "PROGRAM":
         return SEDE_MAP_UNEATLANTICO[sharedParams.sede];
      default:
         return sharedParams.furriel;
   }
};

export function buildLinks(sharedParams, footerUrl, tarjetonType) {
   let furriel = getFurriel(tarjetonType, sharedParams);

   const correctSede = sharedParams.sede;
   const finalLink = buildCorrectFinalLink(sharedParams.linkFinal, sharedParams.sede.toLowerCase());

   const correctFinalLink =
      finalLink +
      furriel +
      sharedParams.kw +
      sharedParams.matomo;

   const correctPixel = sharedParams.pixel;

   const correctBannerLink =
      sharedParams.heroUrl +
      furriel +
      sharedParams.kw +
      sharedParams.matomo;

   const correctButtonLink =
      sharedParams.heroUrl +
      furriel +
      sharedParams.kw +
      sharedParams.matomo;

   const correctFooterLink =
      footerUrl + furriel + sharedParams.kw + sharedParams.matomo;

   return [
      correctSede,
      correctFinalLink,
      correctPixel,
      correctBannerLink,
      correctButtonLink,
      correctFooterLink,
   ];
}

export function checkValidParams(sharedParams, tt) {
   for (const property in sharedParams) {
      if (sharedParams[property] === "") {
         return false;
      }
   }

   if (!SEDE_MAP_UNEATLANTICO[sharedParams.sede] && tt !== "TEF") {
      return false;
   }
   return true;
}

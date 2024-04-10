import { FURRIEL_MAP_FUNIBER, FURRIEL_MAP_UNEATLANTICO } from "./furriels";

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
    error: "Hay un error en la URL del footer",
    result: "URL del footer sin problemas",
  },
  footerText: {
    error: "Hay un error en el texto del footer",
    result: "Texto del footer sin problemas",
  },
};

export function buildLinks(sharedParams, footerUrl, tarjetonType) {
  let furriel = getFurriel(tarjetonType, sharedParams);

  const finalLink = buildCorrectFinalLink(
    sharedParams.linkFinal,
    sharedParams.sede.toLowerCase(),
  );

  const correctFinalLink =
    finalLink + furriel + sharedParams.kw + sharedParams.matomo;

  const correctPixel = sharedParams.pixel;

  const correctBannerLink =
    sharedParams.heroUrl + furriel + sharedParams.kw + sharedParams.matomo;

  const correctButtonLink =
    sharedParams.heroUrl + furriel + sharedParams.kw + sharedParams.matomo;

  const correctFooterLink =
    footerUrl + furriel + sharedParams.kw + sharedParams.matomo;

  return [
    correctFinalLink,
    correctPixel,
    correctBannerLink,
    correctButtonLink,
    correctFooterLink,
  ];
}

export function buildCorrectText(sharedParams, footerUrlLink) {
  const correctSede = sharedParams.sede;

  let correctFooterText = footerUrlLink.slice(8);
  correctFooterText = correctFooterText.substring(
    0,
    correctFooterText.length - 1,
  );

  return [correctSede, correctFooterText];
}

export function buildCorrectFinalLink(link, sede) {
  let indexOfFileType = link.indexOf(".html");
  let arr = link.split("");

  arr[indexOfFileType - 2] = sede[0];
  arr[indexOfFileType - 1] = sede[1];

  return arr.join("");
}

export function getSedeFromFile(link) {
  let indexOfQuestionMark = link.indexOf("?");
  let subUrl = link.substring(0, indexOfQuestionMark);
  let fileSede = subUrl.slice(-7).slice(0, 2);

  return fileSede;
}

export function getFurriel(tarjetonType, sharedParams) {
  switch (tarjetonType) {
    case "AREA":
      return FURRIEL_MAP_FUNIBER[sharedParams.sede];
    case "PROGRAM":
      return FURRIEL_MAP_UNEATLANTICO[sharedParams.sede];
    default:
      return sharedParams.furriel;
  }
}

export function getFooterText(links, idx) {
  let text;
  while (!text) {
    let link = links[idx].children;
    link.forEach((element) => {
      if (element.name === "span") {
        text = element.children[0].data;
        return;
      } else {
        idx--;
      }
    });
  }
  return text;
}

export function getFooterLink(links, idx) {
  let link;
  while (!link) {
    let element = links[idx];
    for (let e of element.children) {
      if (e.name === "span") {
        link = element.attribs.href;
        return link;
      }
    }
    idx--;
  }
}

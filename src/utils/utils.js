import { FURRIEL_MAP_FUNIBER, FURRIEL_MAP_UNEATLANTICO } from "./furriels";

export const INPUT_FIELDS = [
  {
    label: "Sedes:",
    name: "sedes",
    id: "sede",
    placeholder: "Introduzca la sede",
  },
  {
    label: "Area:",
    name: "area",
    id: "area",
    placeholder: "Introduzca el área",
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

const FUNIBER_AREA_URLS = {
  ES: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.es/master-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.es/master-deporte",
    DERECHO: "https://www.funiber.es/master-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.es/master-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.es/master-empresas",
    COMUNICACION: "https://www.funiber.es/master-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.es/idiomas",
    INGENIERIAS:
      "https://www.funiber.es/master-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.es/master-medio-ambiente",
    PROYECTOS: "https://www.funiber.es/master-proyectos",
    PSICOLOGIA: "https://www.funiber.es/master-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.es/master-salud-y-nutricion",
    TIC: "https://www.funiber.es/master-tecnologias-tic",
    TURISMO: "https://www.funiber.es/master-turismo",
    DOCTORADOS: "https://www.funiber.es/doctorados",
  },
  AO: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.co.ao/mestrados-arquitetura-desenho",
    DEPORTE: "https://www.funiber.co.ao/mestrados-esporte",
    DERECHO: "https://www.funiber.co.ao/mestrados-direito-politicas",
    PROFESORADO:
      "https://www.funiber.co.ao/mestrados-educacao-formacao-professores",
    EMPRESAS: "https://www.funiber.co.ao/mestrados-empresas",
    COMUNICACION:
      "https://www.funiber.co.ao/mestrados-humanidades-e-comunicacao",
    IDIOMAS: "https://www.funiber.co.ao/idiomas",
    INGENIERIAS:
      "https://www.funiber.co.ao/mestrados-engenharia-prevencao-e-qualidade",
    MEDIO_AMBIENTE: "https://www.funiber.co.ao/mestrados-meio-ambiente",
    PROYECTOS: "https://www.funiber.co.ao/mestrados-projetos",
    PSICOLOGIA: "https://www.funiber.co.ao/mestrados-psicologia-rh",
    SALUD_NUTRICION: "https://www.funiber.co.ao/mestrados-saude-e-nutricao",
    TIC: "https://www.funiber.co.ao/mestrados-tecnologias-tic",
    TURISMO: "https://www.funiber.co.ao/mestrados-turismo",
    DOCTORADOS: "https://www.funiber.co.ao/doutorados",
  },
  CM: {},
  CV: {},
  CI: {},
  AR: {},
  IT: {},
  PT: {},
  BO: {},
  BR: {},
  CR: {},
  SV: {},
  GT: {},
  HN: {},
  NI: {},
  GA: {},
  GQ: {},
  PA: {},
  CL: {},
  CO: {},
  EC: {},
  MX: {},
  ML: {},
  MA: {},
  MZ: {},
  SN: {},
  PY: {},
  PE: {},
  PR: {},
  DO: {},
  UY: {},
  VE: {},
  US: {},
  CN: {},
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

  const [correctBannerLink, correctButtonLink] = buildButtonAndBannerUrl(
    sharedParams,
    tarjetonType,
    furriel,
  );

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

function buildButtonAndBannerUrl(sharedParams, tarjetonType, furriel) {
  let correctBannerLink;
  let correctButtonLink;

  if (tarjetonType === "PROGRAM") {
    correctBannerLink =
      sharedParams.heroUrl + furriel + sharedParams.kw + sharedParams.matomo;

    correctButtonLink =
      sharedParams.heroUrl + furriel + sharedParams.kw + sharedParams.matomo;
  }

  if (tarjetonType === "AREA") {
    let area = FUNIBER_AREA_URLS[sharedParams.sede][sharedParams.area];
    correctBannerLink = area + furriel + sharedParams.kw + sharedParams.matomo;
    correctButtonLink = area + furriel + sharedParams.kw + sharedParams.matomo;
  }

  return [correctBannerLink, correctButtonLink];
}

export function buildCorrectText(params, footerUrlLink) {
  const correctSede = params.sede;

  let correctFooterText = footerUrlLink.slice(8);
  correctFooterText = correctFooterText.substring(
    0,
    correctFooterText.length - 1,
  );

  return [correctSede, correctFooterText];
}

export function checkValidParams(params) {
  for (const property in params) {
    if (params[property] === "") {
      return false;
    }
  }

  let sedes = params.sedes.split(",");
  for (let sede of sedes) {
    if (!FURRIEL_MAP_FUNIBER[sede.trim()]) {
      return false;
    }
  }
  return true;
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

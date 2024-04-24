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

// angel
const FUNIBER_AREA_URLS = {
  ES: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.es/master-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.es/master-deporte",
    DERECHO: "https://www.funiber.es/master-derecho-politicas",
    PROFESORADO: "https://www.funiber.es/master-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.es/master-empresas",
    COMUNICACION: "https://www.funiber.es/master-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.es/idiomas",
    INGENIERIAS: "https://www.funiber.es/master-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.es/master-medio-ambiente",
    PROYECTOS: "https://www.funiber.es/master-proyectos",
    PSICOLOGIA: "https://www.funiber.es/master-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.es/master-salud-y-nutricion",
    TIC : "https://www.funiber.es/master-tecnologias-tic",
    TURISMO: "https://www.funiber.es/master-turismo",
    DOCTORADOS: "https://www.funiber.es/doctorados",
  },
  AO: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.co.ao/mestrados-arquitetura-desenho",
    DEPORTE: "https://www.funiber.co.ao/mestrados-esporte",
    DERECHO: "https://www.funiber.co.ao/mestrados-direito-politicas",
    PROFESORADO: "https://www.funiber.co.ao/mestrados-educacao-formacao-professores",
    EMPRESAS: "https://www.funiber.co.ao/mestrados-empresas",
    COMUNICACION: "https://www.funiber.co.ao/mestrados-humanidades-e-comunicacao",
    IDIOMAS: "https://www.funiber.co.ao/idiomas",
    INGENIERIAS: "https://www.funiber.co.ao/mestrados-engenharia-prevencao-e-qualidade",
    MEDIO_AMBIENTE: "https://www.funiber.co.ao/mestrados-meio-ambiente",
    PROYECTOS: "https://www.funiber.co.ao/mestrados-projetos",
    PSICOLOGIA: "https://www.funiber.co.ao/mestrados-psicologia-rh",
    SALUD_NUTRICION: "https://www.funiber.co.ao/mestrados-saude-e-nutricao",
    TIC : "https://www.funiber.co.ao/mestrados-tecnologias-tic",
    TURISMO: "https://www.funiber.co.ao/mestrados-turismo",
    DOCTORADOS: "https://www.funiber.co.ao/doutorados", 
  },
  CM: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.cm/masters-architecture-et-design",
    DEPORTE: "https://www.funiber.cm/masters-sport",
    DERECHO: "https://www.funiber.cm/masters-droit-politiques",
    PROFESORADO: "https://www.funiber.cm/masters-formation-des-enseignants-et-education",
    EMPRESAS: "https://www.funiber.cm/masters-entreprise",
    COMUNICACION: "https://www.funiber.cm/masters-humanites-et-communication",
    IDIOMAS: "https://www.funiber.cm/langues-etrangeres",
    INGENIERIAS: "https://www.funiber.cm/masters-ingenierie-prevention-et-qualite",
    MEDIO_AMBIENTE: "https://www.funiber.cm/masters-environnement",
    PROYECTOS: "https://www.funiber.cm/masters-projets",
    PSICOLOGIA: "https://www.funiber.cm/masters-psychologie-rh",
    SALUD_NUTRICION: "https://www.funiber.cm/masters-sante-et-nutrition",
    TIC : "https://www.funiber.cm/masters-technologies-tice",
    TURISMO: "https://www.funiber.cm/masters-tourisme",
    DOCTORADOS: "https://www.funiber.cm/doctorats", 
  },
  CV: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.cv/mestrados-arquitetura-desenho",
    DEPORTE: "https://www.funiber.cv/mestrados-esporte",
    DERECHO: "https://www.funiber.cv/mestrados-direito-politicas",
    PROFESORADO: "https://www.funiber.cv/mestrados-educacao-formacao-professores",
    EMPRESAS: "https://www.funiber.cv/mestrados-empresas",
    COMUNICACION: "https://www.funiber.cv/mestrados-humanidades-e-comunicacao",
    IDIOMAS: "https://www.funiber.cv/idiomas",
    INGENIERIAS: "https://www.funiber.cv/mestrados-engenharia-prevencao-e-qualidade",
    MEDIO_AMBIENTE: "https://www.funiber.cv/mestrados-meio-ambiente",
    PROYECTOS: "https://www.funiber.cv/mestrados-projetos",
    PSICOLOGIA: "https://www.funiber.cv/mestrados-psicologia-rh",
    SALUD_NUTRICION: "https://www.funiber.cv/mestrados-saude-e-nutricao",
    TIC : "https://www.funiber.cv/mestrados-tecnologias-tic",
    TURISMO: "https://www.funiber.cv/mestrados-turismo",
    DOCTORADOS: "https://www.funiber.cv/doutorados", 
  },
  CI: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.ci/masters-architecture-et-design",
    DEPORTE: "https://www.funiber.ci/masters-sport",
    DERECHO: "https://www.funiber.ci/masters-droit-politiques",
    PROFESORADO: "https://www.funiber.ci/masters-formation-des-enseignants-et-education",
    EMPRESAS: "https://www.funiber.ci/masters-entreprise",
    COMUNICACION: "https://www.funiber.ci/masters-humanites-et-communication",
    IDIOMAS: "https://www.funiber.ci/langues-etrangeres",
    INGENIERIAS: "https://www.funiber.ci/masters-ingenierie-prevention-et-qualite",
    MEDIO_AMBIENTE: "https://www.funiber.ci/masters-environnement",
    PROYECTOS: "https://www.funiber.ci/masters-projets",
    PSICOLOGIA: "https://www.funiber.ci/masters-psychologie-rh",
    SALUD_NUTRICION: "https://www.funiber.ci/masters-sante-et-nutrition",
    TIC : "https://www.funiber.ci/masters-technologies-tice",
    TURISMO: "https://www.funiber.ci/masters-tourisme",
    DOCTORADOS: "https://www.funiber.ci/doctorats", 
  },
  AR: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.org.ar/master-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.ar/master-deporte",
    DERECHO: "https://www.funiber.org.ar/master-derecho-politicas",
    PROFESORADO: "https://www.funiber.org.ar/master-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.ar/master-empresas",
    COMUNICACION: "https://www.funiber.org.ar/master-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.ar/idiomas",
    INGENIERIAS: "https://www.funiber.org.ar/master-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.ar/master-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.ar/master-proyectos",
    PSICOLOGIA: "https://www.funiber.org.ar/master-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.ar/master-salud-y-nutricion",
    TIC : "https://www.funiber.org.ar/master-tecnologias-tic",
    TURISMO: "https://www.funiber.org.ar/master-turismo",
    DOCTORADOS: "https://www.funiber.org.ar/doctorados", 
  },
  IT: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.it/masters-architettura-e-design",
    DEPORTE: "https://www.funiber.it/masters-sport",
    DERECHO: "https://www.funiber.it/masters-diritto-scienze-politiche",
    PROFESORADO: "https://www.funiber.it/masters-educazione-formazione-insegnanti",
    EMPRESAS: "https://www.funiber.it/masters-impresa",
    COMUNICACION: "https://www.funiber.it/masters-scienze-umanistiche-e-comunicazione",
    IDIOMAS: "https://www.funiber.it/lingue",
    INGENIERIAS: "https://www.funiber.it/masters-ingegneria-prevenzione-e-qualita",
    MEDIO_AMBIENTE: "https://www.funiber.it/masters-ambiente",
    PROYECTOS: "https://www.funiber.it/masters-progetti",
    PSICOLOGIA: "https://www.funiber.it/masters-psicologia",
    SALUD_NUTRICION: "https://www.funiber.it/masters-salute-e-nutrizione",
    TIC : "https://www.funiber.it/masters-tecnologie-tic",
    TURISMO: "https://www.funiber.it/masters-turismo",
    DOCTORADOS: "https://www.funiber.it/dottorati", 
  },
  PT: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.pt/masters-arquitetura-desenho",
    DEPORTE: "https://www.funiber.pt/masters-esporte",
    DERECHO: "https://www.funiber.pt/masters-direito-politicas",
    PROFESORADO: "https://www.funiber.pt/masters-educacao-formacao-professores",
    EMPRESAS: "https://www.funiber.pt/masters-empresas",
    COMUNICACION: "https://www.funiber.pt/masters-humanidades-e-comunicacao",
    IDIOMAS: "https://www.funiber.pt/idiomas",
    INGENIERIAS: "https://www.funiber.pt/masters-engenharia-prevencao-e-qualidade",
    MEDIO_AMBIENTE: "https://www.funiber.pt/masters-meio-ambiente",
    PROYECTOS: "https://www.funiber.pt/masters-projetos",
    PSICOLOGIA: "https://www.funiber.pt/masters-psicologia-rh",
    SALUD_NUTRICION: "https://www.funiber.pt/masters-saude-e-nutricao",
    TIC : "https://www.funiber.pt/masters-tecnologias-tic",
    TURISMO: "https://www.funiber.pt/masters-turismo",
    DOCTORADOS: "https://www.funiber.pt/doutorados", 
  },
  BO: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.org.bo/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.bo/maestrias-deporte",
    DERECHO: "https://www.funiber.org.bo/maestrias-derecho-politicas",
    PROFESORADO: "https://www.funiber.org.bo/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.bo/maestrias-empresas",
    COMUNICACION: "https://www.funiber.org.bo/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.bo/idiomas",
    INGENIERIAS: "https://www.funiber.org.bo/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.bo/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.bo/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.bo/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.bo/maestrias-salud-y-nutricion",
    TIC : "https://www.funiber.org.bo/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.bo/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.bo/doctorados", 
  },
  BR: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.org.br/mestrados-arquitetura-desenho",
    DEPORTE: "https://www.funiber.org.br/mestrados-esporte",
    DERECHO: "https://www.funiber.org.br/mestrados-direito-politicas",
    PROFESORADO: "https://www.funiber.org.br/mestrados-educacao-formacao-professores",
    EMPRESAS: "https://www.funiber.org.br/mestrados-empresas",
    COMUNICACION: "https://www.funiber.org.br/mestrados-humanidades-e-comunicacao",
    IDIOMAS: "https://www.funiber.org.br/idiomas",
    INGENIERIAS: "https://www.funiber.org.br/mestrados-engenharia-prevencao-e-qualidade",
    MEDIO_AMBIENTE: "https://www.funiber.org.br/mestrados-meio-ambiente",
    PROYECTOS: "https://www.funiber.org.br/mestrados-projetos",
    PSICOLOGIA: "https://www.funiber.org.br/mestrados-psicologia-rh",
    SALUD_NUTRICION: "https://www.funiber.org.br/mestrados-saude-e-nutricao",
    TIC : "https://www.funiber.org.br/mestrados-tecnologias-tic",
    TURISMO: "https://www.funiber.org.br/mestrados-turismo",
    DOCTORADOS: "https://www.funiber.org.br/doutorados", 
  },
  CR: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.or.cr/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.or.cr/maestrias-deporte",
    DERECHO: "https://www.funiber.or.cr/maestrias-derecho-politicas",
    PROFESORADO: "https://www.funiber.or.cr/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.or.cr/maestrias-empresas",
    COMUNICACION: "https://www.funiber.or.cr/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.or.cr/idiomas",
    INGENIERIAS: "https://www.funiber.or.cr/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.or.cr/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.or.cr/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.or.cr/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.or.cr/maestrias-salud-y-nutricion",
    TIC : "https://www.funiber.or.cr/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.or.cr/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.or.cr/doctorados", 
  },
  SV: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.sv/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.sv/maestrias-deporte",
    DERECHO: "https://www.funiber.sv/maestrias-derecho-politicas",
    PROFESORADO: "https://www.funiber.sv/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.sv/maestrias-empresas",
    COMUNICACION: "https://www.funiber.sv/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.sv/idiomas",
    INGENIERIAS: "https://www.funiber.sv/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.sv/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.sv/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.sv/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.sv/maestrias-salud-y-nutricion",
    TIC : "https://www.funiber.sv/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.sv/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.sv/doctorados", 
  },
  GT: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  HN: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  NI: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  GA: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  GQ: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  PA: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  CL: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  CO: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  EC: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  MX: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  ML: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  MA: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  MZ: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  SN: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  PY: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  PE: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  PR: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  DO: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  UY: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  VE: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  US: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
  CN: {
    ARQUITECTURA_DISEÑO: "",
    DEPORTE: "",
    DERECHO: "",
    PROFESORADO: "",
    EMPRESAS: "",
    COMUNICACION: "",
    IDIOMAS: "",
    INGENIERIAS: "",
    MEDIO_AMBIENTE: "",
    PROYECTOS: "",
    PSICOLOGIA: "",
    SALUD_NUTRICION: "",
    TIC : "",
    TURISMO: "",
    DOCTORADOS: "", 
  },
}

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

export function checkValidParams(params) {
  for (const property in params) {
    if (params[property] === "") {
      return false;
    }
  }

  if (!FURRIEL_MAP_FUNIBER[params.sede]) {
    return false;
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

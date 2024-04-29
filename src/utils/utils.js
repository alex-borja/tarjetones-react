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

export const FUNIBER_AREA_URLS = {
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
  CM: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.cm/masters-architecture-et-design",
    DEPORTE: "https://www.funiber.cm/masters-sport",
    DERECHO: "https://www.funiber.cm/masters-droit-politiques",
    PROFESORADO:
      "https://www.funiber.cm/masters-formation-des-enseignants-et-education",
    EMPRESAS: "https://www.funiber.cm/masters-entreprise",
    COMUNICACION: "https://www.funiber.cm/masters-humanites-et-communication",
    IDIOMAS: "https://www.funiber.cm/langues-etrangeres",
    INGENIERIAS:
      "https://www.funiber.cm/masters-ingenierie-prevention-et-qualite",
    MEDIO_AMBIENTE: "https://www.funiber.cm/masters-environnement",
    PROYECTOS: "https://www.funiber.cm/masters-projets",
    PSICOLOGIA: "https://www.funiber.cm/masters-psychologie-rh",
    SALUD_NUTRICION: "https://www.funiber.cm/masters-sante-et-nutrition",
    TIC: "https://www.funiber.cm/masters-technologies-tice",
    TURISMO: "https://www.funiber.cm/masters-tourisme",
    DOCTORADOS: "https://www.funiber.cm/doctorats",
  },
  CV: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.cv/mestrados-arquitetura-desenho",
    DEPORTE: "https://www.funiber.cv/mestrados-esporte",
    DERECHO: "https://www.funiber.cv/mestrados-direito-politicas",
    PROFESORADO:
      "https://www.funiber.cv/mestrados-educacao-formacao-professores",
    EMPRESAS: "https://www.funiber.cv/mestrados-empresas",
    COMUNICACION: "https://www.funiber.cv/mestrados-humanidades-e-comunicacao",
    IDIOMAS: "https://www.funiber.cv/idiomas",
    INGENIERIAS:
      "https://www.funiber.cv/mestrados-engenharia-prevencao-e-qualidade",
    MEDIO_AMBIENTE: "https://www.funiber.cv/mestrados-meio-ambiente",
    PROYECTOS: "https://www.funiber.cv/mestrados-projetos",
    PSICOLOGIA: "https://www.funiber.cv/mestrados-psicologia-rh",
    SALUD_NUTRICION: "https://www.funiber.cv/mestrados-saude-e-nutricao",
    TIC: "https://www.funiber.cv/mestrados-tecnologias-tic",
    TURISMO: "https://www.funiber.cv/mestrados-turismo",
    DOCTORADOS: "https://www.funiber.cv/doutorados",
  },
  CI: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.ci/masters-architecture-et-design",
    DEPORTE: "https://www.funiber.ci/masters-sport",
    DERECHO: "https://www.funiber.ci/masters-droit-politiques",
    PROFESORADO:
      "https://www.funiber.ci/masters-formation-des-enseignants-et-education",
    EMPRESAS: "https://www.funiber.ci/masters-entreprise",
    COMUNICACION: "https://www.funiber.ci/masters-humanites-et-communication",
    IDIOMAS: "https://www.funiber.ci/langues-etrangeres",
    INGENIERIAS:
      "https://www.funiber.ci/masters-ingenierie-prevention-et-qualite",
    MEDIO_AMBIENTE: "https://www.funiber.ci/masters-environnement",
    PROYECTOS: "https://www.funiber.ci/masters-projets",
    PSICOLOGIA: "https://www.funiber.ci/masters-psychologie-rh",
    SALUD_NUTRICION: "https://www.funiber.ci/masters-sante-et-nutrition",
    TIC: "https://www.funiber.ci/masters-technologies-tice",
    TURISMO: "https://www.funiber.ci/masters-tourisme",
    DOCTORADOS: "https://www.funiber.ci/doctorats",
  },
  AR: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.ar/master-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.ar/master-deporte",
    DERECHO: "https://www.funiber.org.ar/master-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.ar/master-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.ar/master-empresas",
    COMUNICACION:
      "https://www.funiber.org.ar/master-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.ar/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.ar/master-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.ar/master-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.ar/master-proyectos",
    PSICOLOGIA: "https://www.funiber.org.ar/master-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.ar/master-salud-y-nutricion",
    TIC: "https://www.funiber.org.ar/master-tecnologias-tic",
    TURISMO: "https://www.funiber.org.ar/master-turismo",
    DOCTORADOS: "https://www.funiber.org.ar/doctorados",
  },
  IT: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.it/masters-architettura-e-design",
    DEPORTE: "https://www.funiber.it/masters-sport",
    DERECHO: "https://www.funiber.it/masters-diritto-scienze-politiche",
    PROFESORADO:
      "https://www.funiber.it/masters-educazione-formazione-insegnanti",
    EMPRESAS: "https://www.funiber.it/masters-impresa",
    COMUNICACION:
      "https://www.funiber.it/masters-scienze-umanistiche-e-comunicazione",
    IDIOMAS: "https://www.funiber.it/lingue",
    INGENIERIAS:
      "https://www.funiber.it/masters-ingegneria-prevenzione-e-qualita",
    MEDIO_AMBIENTE: "https://www.funiber.it/masters-ambiente",
    PROYECTOS: "https://www.funiber.it/masters-progetti",
    PSICOLOGIA: "https://www.funiber.it/masters-psicologia",
    SALUD_NUTRICION: "https://www.funiber.it/masters-salute-e-nutrizione",
    TIC: "https://www.funiber.it/masters-tecnologie-tic",
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
    INGENIERIAS:
      "https://www.funiber.pt/masters-engenharia-prevencao-e-qualidade",
    MEDIO_AMBIENTE: "https://www.funiber.pt/masters-meio-ambiente",
    PROYECTOS: "https://www.funiber.pt/masters-projetos",
    PSICOLOGIA: "https://www.funiber.pt/masters-psicologia-rh",
    SALUD_NUTRICION: "https://www.funiber.pt/masters-saude-e-nutricao",
    TIC: "https://www.funiber.pt/masters-tecnologias-tic",
    TURISMO: "https://www.funiber.pt/masters-turismo",
    DOCTORADOS: "https://www.funiber.pt/doutorados",
  },
  BO: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.bo/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.bo/maestrias-deporte",
    DERECHO: "https://www.funiber.org.bo/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.bo/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.bo/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.bo/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.bo/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.bo/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.bo/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.bo/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.bo/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.bo/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.bo/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.bo/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.bo/doctorados",
  },
  BR: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.br/mestrados-arquitetura-desenho",
    DEPORTE: "https://www.funiber.org.br/mestrados-esporte",
    DERECHO: "https://www.funiber.org.br/mestrados-direito-politicas",
    PROFESORADO:
      "https://www.funiber.org.br/mestrados-educacao-formacao-professores",
    EMPRESAS: "https://www.funiber.org.br/mestrados-empresas",
    COMUNICACION:
      "https://www.funiber.org.br/mestrados-humanidades-e-comunicacao",
    IDIOMAS: "https://www.funiber.org.br/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.br/mestrados-engenharia-prevencao-e-qualidade",
    MEDIO_AMBIENTE: "https://www.funiber.org.br/mestrados-meio-ambiente",
    PROYECTOS: "https://www.funiber.org.br/mestrados-projetos",
    PSICOLOGIA: "https://www.funiber.org.br/mestrados-psicologia-rh",
    SALUD_NUTRICION: "https://www.funiber.org.br/mestrados-saude-e-nutricao",
    TIC: "https://www.funiber.org.br/mestrados-tecnologias-tic",
    TURISMO: "https://www.funiber.org.br/mestrados-turismo",
    DOCTORADOS: "https://www.funiber.org.br/doutorados",
  },
  CR: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.or.cr/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.or.cr/maestrias-deporte",
    DERECHO: "https://www.funiber.or.cr/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.or.cr/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.or.cr/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.or.cr/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.or.cr/idiomas",
    INGENIERIAS:
      "https://www.funiber.or.cr/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.or.cr/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.or.cr/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.or.cr/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.or.cr/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.or.cr/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.or.cr/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.or.cr/doctorados",
  },
  SV: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.sv/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.sv/maestrias-deporte",
    DERECHO: "https://www.funiber.sv/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.sv/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.sv/maestrias-empresas",
    COMUNICACION: "https://www.funiber.sv/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.sv/idiomas",
    INGENIERIAS:
      "https://www.funiber.sv/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.sv/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.sv/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.sv/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.sv/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.sv/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.sv/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.sv/doctorados",
  },
  GT: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.gt/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.gt/maestrias-deporte",
    DERECHO: "https://www.funiber.org.gt/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.gt/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.gt/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.gt/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.gt/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.gt/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.gt/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.gt/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.gt/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.gt/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.gt/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.gt/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.gt/doctorados",
  },
  HN: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.hn/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.hn/maestrias-deporte",
    DERECHO: "https://www.funiber.org.hn/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.hn/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.hn/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.hn/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.hn/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.hn/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.hn/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.hn/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.hn/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.hn/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.hn/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.hn/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.hn/doctorados",
  },
  NI: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.ni/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.ni/maestrias-deporte",
    DERECHO: "https://www.funiber.org.ni/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.ni/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.ni/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.ni/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.ni/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.ni/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.ni/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.ni/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.ni/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.ni/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.ni/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.ni/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.ni/doctorados",
  },
  GA: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.ga/masters-architecture-et-design",
    DEPORTE: "https://www.funiber.ga/masters-sport",
    DERECHO: "https://www.funiber.ga/masters-droit-politiques",
    PROFESORADO:
      "https://www.funiber.ga/masters-formation-des-enseignants-et-education",
    EMPRESAS: "https://www.funiber.ga/masters-entreprise",
    COMUNICACION: "https://www.funiber.ga/masters-humanites-et-communication",
    IDIOMAS: "https://www.funiber.ga/langues-etrangeres",
    INGENIERIAS:
      "https://www.funiber.ga/masters-ingenierie-prevention-et-qualite",
    MEDIO_AMBIENTE: "https://www.funiber.ga/masters-environnement",
    PROYECTOS: "https://www.funiber.ga/masters-projets",
    PSICOLOGIA: "https://www.funiber.ga/masters-psychologie-rh",
    SALUD_NUTRICION: "https://www.funiber.ga/masters-sante-et-nutrition",
    TIC: "https://www.funiber.ga/masters-technologies-tice",
    TURISMO: "https://www.funiber.ga/masters-tourisme",
    DOCTORADOS: "https://www.funiber.ga/doctorats",
  },
  GQ: {
    ARQUITECTURA_DISEÑO: "https://www.funiber.gq/master-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.gq/master-deporte",
    DERECHO: "https://www.funiber.gq/master-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.gq/master-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.gq/master-empresas",
    COMUNICACION: "https://www.funiber.gq/master-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.gq/idiomas",
    INGENIERIAS:
      "https://www.funiber.gq/master-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.gq/master-medio-ambiente",
    PROYECTOS: "https://www.funiber.gq/master-proyectos",
    PSICOLOGIA: "https://www.funiber.gq/master-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.gq/master-salud-y-nutricion",
    TIC: "https://www.funiber.gq/master-tecnologias-tic",
    TURISMO: "https://www.funiber.gq/master-turismo",
    DOCTORADOS: "https://www.funiber.gq/doctorados",
  },
  PA: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.pa/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.pa/maestrias-deporte",
    DERECHO: "https://www.funiber.org.pa/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.pa/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.pa/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.pa/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.pa/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.pa/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.pa/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.pa/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.pa/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.pa/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.pa/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.pa/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.pa/doctorados",
  },
  CL: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.cl/magister-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.cl/magister-deporte",
    DERECHO: "https://www.funiber.cl/magister-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.cl/magister-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.cl/magister-empresas",
    COMUNICACION: "https://www.funiber.cl/magister-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.cl/idiomas",
    INGENIERIAS:
      "https://www.funiber.cl/magister-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.cl/magister-medio-ambiente",
    PROYECTOS: "https://www.funiber.cl/magister-proyectos",
    PSICOLOGIA: "https://www.funiber.cl/magister-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.cl/magister-salud-y-nutricion",
    TIC: "https://www.funiber.cl/magister-tecnologias-tic",
    TURISMO: "https://www.funiber.cl/magister-turismo",
    DOCTORADOS: "https://www.funiber.cl/doctorados",
  },
  CO: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.co/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.co/maestrias-deporte",
    DERECHO: "https://www.funiber.org.co/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.co/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.co/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.co/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.co/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.co/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.co/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.co/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.co/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.co/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.co/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.co/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.co/doctorados",
  },
  EC: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.ec/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.ec/maestrias-deporte",
    DERECHO: "https://www.funiber.org.ec/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.ec/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.ec/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.ec/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.ec/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.ec/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.ec/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.ec/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.ec/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.ec/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.ec/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.ec/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.ec/doctorados",
  },
  MX: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.mx/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.mx/maestrias-deporte",
    DERECHO: "https://www.funiber.org.mx/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.mx/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.mx/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.mx/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.mx/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.mx/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.mx/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.mx/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.mx/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.mx/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.mx/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.mx/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.mx/doctorados",
  },
  ML: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.ml/masters-architecture-et-design",
    DEPORTE: "https://www.funiber.ml/masters-sport",
    DERECHO: "https://www.funiber.ml/masters-droit-politiques",
    PROFESORADO:
      "https://www.funiber.ml/masters-formation-des-enseignants-et-education",
    EMPRESAS: "https://www.funiber.ml/masters-entreprise",
    COMUNICACION: "https://www.funiber.ml/masters-humanites-et-communication",
    IDIOMAS: "https://www.funiber.ml/langues-etrangeres",
    INGENIERIAS:
      "https://www.funiber.ml/masters-ingenierie-prevention-et-qualite",
    MEDIO_AMBIENTE: "https://www.funiber.ml/masters-environnement",
    PROYECTOS: "https://www.funiber.ml/masters-projets",
    PSICOLOGIA: "https://www.funiber.ml/masters-psychologie-rh",
    SALUD_NUTRICION: "https://www.funiber.ml/masters-sante-et-nutrition",
    TIC: "https://www.funiber.ml/masters-technologies-tice",
    TURISMO: "https://www.funiber.ml/masters-tourisme",
    DOCTORADOS: "https://www.funiber.ml/doctorats",
  },
  MA: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.ma/masters-architecture-et-design",
    DEPORTE: "https://www.funiber.ma/masters-sport",
    DERECHO: "https://www.funiber.ma/masters-droit-politiques",
    PROFESORADO:
      "https://www.funiber.ma/masters-formation-des-enseignants-et-education",
    EMPRESAS: "https://www.funiber.ma/masters-entreprise",
    COMUNICACION: "https://www.funiber.ma/masters-humanites-et-communication",
    IDIOMAS: "https://www.funiber.ma/langues-etrangeres",
    INGENIERIAS:
      "https://www.funiber.ma/masters-ingenierie-prevention-et-qualite",
    MEDIO_AMBIENTE: "https://www.funiber.ma/masters-environnement",
    PROYECTOS: "https://www.funiber.ma/masters-projets",
    PSICOLOGIA: "https://www.funiber.ma/masters-psychologie-rh",
    SALUD_NUTRICION: "https://www.funiber.ma/masters-sante-et-nutrition",
    TIC: "https://www.funiber.ma/masters-technologies-tice",
    TURISMO: "https://www.funiber.ma/masters-tourisme",
    DOCTORADOS: "https://www.funiber.ma/doctorats",
  },
  MZ: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.co.mz/mestrados-arquitetura-desenho",
    DEPORTE: "https://www.funiber.co.mz/mestrados-esporte",
    DERECHO: "https://www.funiber.co.mz/mestrados-direito-politicas",
    PROFESORADO:
      "https://www.funiber.co.mz/mestrados-educacao-formacao-professores",
    EMPRESAS: "https://www.funiber.co.mz/mestrados-empresas",
    COMUNICACION:
      "https://www.funiber.co.mz/mestrados-humanidades-e-comunicacao",
    IDIOMAS: "https://www.funiber.co.mz/idiomas",
    INGENIERIAS:
      "https://www.funiber.co.mz/mestrados-engenharia-prevencao-e-qualidade",
    MEDIO_AMBIENTE: "https://www.funiber.co.mz/mestrados-meio-ambiente",
    PROYECTOS: "https://www.funiber.co.mz/mestrados-projetos",
    PSICOLOGIA: "https://www.funiber.co.mz/mestrados-psicologia-rh",
    SALUD_NUTRICION: "https://www.funiber.co.mz/mestrados-saude-e-nutricao",
    TIC: "https://www.funiber.co.mz/mestrados-tecnologias-tic",
    TURISMO: "https://www.funiber.co.mz/mestrados-turismo",
    DOCTORADOS: "https://www.funiber.co.mz/doutorados",
  },
  SN: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.sn/masters-architecture-et-design",
    DEPORTE: "https://www.funiber.sn/masters-sport",
    DERECHO: "https://www.funiber.sn/masters-droit-politiques",
    PROFESORADO:
      "https://www.funiber.sn/masters-formation-des-enseignants-et-education",
    EMPRESAS: "https://www.funiber.sn/masters-entreprise",
    COMUNICACION: "https://www.funiber.sn/masters-humanites-et-communication",
    IDIOMAS: "https://www.funiber.sn/langues-etrangeres",
    INGENIERIAS:
      "https://www.funiber.sn/masters-ingenierie-prevention-et-qualite",
    MEDIO_AMBIENTE: "https://www.funiber.sn/masters-environnement",
    PROYECTOS: "https://www.funiber.sn/masters-projets",
    PSICOLOGIA: "https://www.funiber.sn/masters-psychologie-rh",
    SALUD_NUTRICION: "https://www.funiber.sn/masters-sante-et-nutrition",
    TIC: "https://www.funiber.sn/masters-technologies-tice",
    TURISMO: "https://www.funiber.sn/masters-tourisme",
    DOCTORADOS: "https://www.funiber.sn/doctorats",
  },
  PY: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.py/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.py/maestrias-deporte",
    DERECHO: "https://www.funiber.org.py/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.py/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.py/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.py/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.py/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.py/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.py/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.py/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.py/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.py/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.py/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.py/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.py/doctorados",
  },
  PE: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.pe/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.pe/maestrias-deporte",
    DERECHO: "https://www.funiber.org.pe/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.pe/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.pe/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.pe/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.pe/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.pe/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.pe/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.pe/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.pe/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.pe/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.pe/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.pe/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.pe/doctorados",
  },
  PR: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.pr/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.pr/maestrias-deporte",
    DERECHO: "https://www.funiber.org.pr/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.pr/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.pr/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.pr/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.pr/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.pr/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.pr/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.pr/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.pr/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.pr/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.pr/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.pr/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.pr/doctorados",
  },
  DO: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.do/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.do/maestrias-deporte",
    DERECHO: "https://www.funiber.org.do/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.do/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.do/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.do/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.do/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.do/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.do/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.do/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.do/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.do/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.do/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.do/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.do/doctorados",
  },
  UY: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.uy/master-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.uy/master-deporte",
    DERECHO: "https://www.funiber.org.uy/master-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.uy/master-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.uy/master-empresas",
    COMUNICACION:
      "https://www.funiber.org.uy/master-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.uy/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.uy/master-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.uy/master-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.uy/master-proyectos",
    PSICOLOGIA: "https://www.funiber.org.uy/master-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.uy/master-salud-y-nutricion",
    TIC: "https://www.funiber.org.uy/master-tecnologias-tic",
    TURISMO: "https://www.funiber.org.uy/master-turismo",
    DOCTORADOS: "https://www.funiber.org.uy/doctorados",
  },
  VE: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.org.ve/maestrias-arquitectura-y-diseno",
    DEPORTE: "https://www.funiber.org.ve/maestrias-deporte",
    DERECHO: "https://www.funiber.org.ve/maestrias-derecho-politicas",
    PROFESORADO:
      "https://www.funiber.org.ve/maestrias-educacion-formacion-profesorado",
    EMPRESAS: "https://www.funiber.org.ve/maestrias-empresas",
    COMUNICACION:
      "https://www.funiber.org.ve/maestrias-humanidades-y-comunicacion",
    IDIOMAS: "https://www.funiber.org.ve/idiomas",
    INGENIERIAS:
      "https://www.funiber.org.ve/maestrias-ingenieria-prevencion-y-calidad",
    MEDIO_AMBIENTE: "https://www.funiber.org.ve/maestrias-medio-ambiente",
    PROYECTOS: "https://www.funiber.org.ve/maestrias-proyectos",
    PSICOLOGIA: "https://www.funiber.org.ve/maestrias-psicologia-rrhh",
    SALUD_NUTRICION: "https://www.funiber.org.ve/maestrias-salud-y-nutricion",
    TIC: "https://www.funiber.org.ve/maestrias-tecnologias-tic",
    TURISMO: "https://www.funiber.org.ve/maestrias-turismo",
    DOCTORADOS: "https://www.funiber.org.ve/doctorados",
  },
  US: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.us/master-architecture-and-design",
    DEPORTE: "https://www.funiber.us/master-sports",
    DERECHO: "https://www.funiber.us/master-law-politics",
    PROFESORADO: "https://www.funiber.us/master-education-teacher-training",
    EMPRESAS: "https://www.funiber.us/master-business",
    COMUNICACION: "https://www.funiber.us/master-humanities-and-communication",
    IDIOMAS: "https://www.funiber.us/languages",
    INGENIERIAS:
      "https://www.funiber.us/master-engineering-prevention-and-quality",
    MEDIO_AMBIENTE: "https://www.funiber.us/master-environmental-studies",
    PROYECTOS: "https://www.funiber.us/master-projects",
    PSICOLOGIA: "https://www.funiber.us/master-psychology-hr",
    SALUD_NUTRICION: "",
    TIC: "https://www.funiber.us/master-ict-technology",
    TURISMO: "https://www.funiber.us/master-tourism",
    DOCTORADOS: "https://www.funiber.us/doctorates",
  },
  CN: {
    ARQUITECTURA_DISEÑO:
      "https://www.funiber.cn/master-architecture-and-design",
    DEPORTE: "https://www.funiber.cn/master-sports",
    DERECHO: "https://www.funiber.cn/master-law-politics",
    PROFESORADO: "https://www.funiber.cn/master-education-teacher-training",
    EMPRESAS: "https://www.funiber.cn/master-business",
    COMUNICACION: "https://www.funiber.cn/master-humanities-and-communication",
    IDIOMAS: "https://www.funiber.cn/languages",
    INGENIERIAS:
      "https://www.funiber.cn/master-engineering-prevention-and-quality",
    MEDIO_AMBIENTE: "https://www.funiber.cn/master-environmental-studies",
    PROYECTOS: "https://www.funiber.cn/master-projects",
    PSICOLOGIA: "https://www.funiber.cn/master-psychology",
    SALUD_NUTRICION: "https://www.funiber.cn/master-health-and-nutrition",
    TIC: "https://www.funiber.cn/master-ict-technology",
    TURISMO: "https://www.funiber.cn/master-tourism",
    DOCTORADOS: "https://www.funiber.cn/doctorates",
  },
};

export function buildButtonAndBannerUrl(sharedParams, tarjetonType, furriel) {
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

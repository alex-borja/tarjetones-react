export const TARJETON_TYPE = {
  GGU: {
    params: {
      type: "GGU",
      sede: "",
      pixel: "",
      linkFinal: "",
      furriel: "",
      bannerUrl: "",
      kw: "",
      matomo: "",
    },
    toCheck: {
      finalLinkIndex: 0,
      bannerLinkIndex: 1,
      buttonLinkIndex: 2,
      urlLinkIndex: 6,
    },
    urlLink: "https://www.uneatlantico.es/",
  },
  GAF: {
    params: {
      type: "GAF",
      sede: "",
      pixel: "",
      linkFinal: "",
      furriel: "",
      bannerUrl: "",
      kw: "",
      matomo: "",
    },
    toCheck: {
      finalLinkIndex: 0,
      bannerLinkIndex: 1,
      buttonLinkIndex: 2,
      urlLinkIndex: 3,
    },
    urlLink: "https://www.funiber.es/",
  },
  TEF: {
    params: {
      type: "TEF",
      pixel: "vvvvv",
      linkFinal: "",
      bannerUrl: "",
      kw: "",
      matomo: "",
      urlFuniber: "",
    },
    toCheck: {
      finalLinkIndex: 0,
      bannerLinkIndex: 1,
      buttonLinkIndex: 2,
      urlLinkIndex: 3,
    },
    urlLink: "https://www.funiber.org.pe/",
  },
};

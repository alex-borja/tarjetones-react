export const TARJETON_TYPE = {
	GGU: {
		params: {
			type: "GGU",
			sede: "",
			pixel: "",
			linkFinal: "",
			bannerUrl: "",
			kw: "",
			matomo: ""
		},
		toCheck: {
			finalLinkIndex: 0,
			bannerLinkIndex: 1,
			buttonLinkIndex: 2,
			urlLinkIndex: 6,
		},
		urlLink: "https://www.uneatlantico.es/"
	},
	GAF: {
		params: {
			type: "GAF",
			sede: "",
			pixel: "",
			linkFinal: "",
			bannerUrl: "",
			kw: "",
			matomo: ""
		},
		toCheck: {
			finalLinkIndex: 0,
			bannerLinkIndex: 1,
			buttonLinkIndex: 2,
			urlLinkIndex: 3,
		},
		urlLink: "https://www.funiber.es/"
	}
}

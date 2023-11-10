export const INPUT_FIELDS = [
	{
		label: 'Sede',
		name: 'sede',
		id: 'sede',
		placeholder: 'Introduzca la sede',
	},
	{
		label: "Link Final:",
		name: "linkFinal",
		id: "linkFinal",
		placeholder: "Introduzca el Link Final",
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
		name: "bannerUrl",
		id: "bannerUrl",
		placeholder: "Introduce la url del banner y del botón",
	}
]

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
}

import { useState } from "react"
import cheerio from "cheerio";

function FileInput() {
	const [htmlFile, setHtmlFile] = useState('');

	let handleFile = (e) => {
		let file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setHtmlFile(e.target.result);
			}
			reader.readAsText(file);
		}
	}

	let handleSubmit = (e) => {
		e.preventDefault();
		const $ = cheerio.load(htmlFile);

		const links = $('a');
		let finalLink = links[0].attribs.href;
		let bannerLink = links[1].attribs.href;
		let emailLink= links[6].attribs.href;

		console.log(finalLink)
		console.log(bannerLink)
		console.log(emailLink)

	}

	return (
		<div className="fileInput">
			<div className="left">
				<form onSubmit={(e) => handleSubmit(e)}>
					<label>Ingrese un archivo compilado:</label>
					<br />
					<input type="file" accept=".html" id="file" onChange={handleFile} />
					<button type="submit">Subir</button>
				</form>

				<div>
					Archivo seleccionado:
					<br />
				</div>
			</div>
			<div className="right">
			</div>
		</div>
	)
}

export default FileInput

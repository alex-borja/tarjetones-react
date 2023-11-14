import PropTypes from "prop-types";
import "../styles/components/ResultCard.css"

function ResultCard({ errors }) {

	let displayResults = (data) => {
		return data.map((val, idx) => {
			let correctVal = `Valor correcto: ${val.correctValue}`
			let incorrectValue= `Valor del archivo: ${val.valueProvided}`
			console.log(incorrectValue)

			return (<div key={idx} className="resItem">
				<h4 className="resTitle">{val.title}</h4>
				<div className="vals">
					<p className="correct">{correctVal}</p>
					<p className="incorrect">{incorrectValue}</p>
				</div>
			</div>)
		})
	}

	return (
		<div className="displayResults">
			<div className="errors">
				<h4 className="numErrors">El archivo contiene: {errors.length} {errors.length === 1 ? "error" : "errores"} (basado en tus parametros)</h4>
				{displayResults(errors)}
			</div>
		</div>
	)
}

ResultCard.propTypes = {
	errors: PropTypes.array.isRequired,
	results: PropTypes.array.isRequired,
}

export default ResultCard;

import PropTypes from "prop-types";
import "../styles/ResultCard.css"

function ResultCard({ errors }) {

	let displayResults = (data) => {
		return data.map((val, idx) => (
			<div key={idx} className="resItem">
				{val}
			</div>
		))
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

/*<div className="results">
	<h4 className="numRes">{results.length}</h4>
	{displayResults(results)}
	</div>*/

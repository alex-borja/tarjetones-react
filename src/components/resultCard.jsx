import PropTypes from "prop-types";

function ResultCard({ errors, results  }) {

	return (
		<div>
			info form the file
		</div>
	)
}

ResultCard.propTypes = {
	errors: PropTypes.array,
	results: PropTypes.string,
}

export default ResultCard;

import PropTypes from "prop-types";
import "../styles/components/Warning.css"

function Warning({ warnings, setWarnings}) {
	let closeBtn = () => {
		setWarnings(!warnings)
	}

	return (
		<div className="validParams">
			<p>{warnings}</p>
			<button className="closeBtn" onClick={closeBtn}>X</button>
		</div>
	)
}

Warning.propTypes = {
	warnings: PropTypes.string,
	setWarnings: PropTypes.func,
}

export default Warning;

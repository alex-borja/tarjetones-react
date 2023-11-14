import PropTypes from "prop-types";
import "../styles/components/Warning.css"

function Warning({ validParams, setValidParams }) {
	let closeBtn = () => {
		setValidParams(!validParams)
	}

	return (
		<div className="validParams">
			<p>{validParams}</p>
			<button className="closeBtn" onClick={closeBtn}>X</button>
		</div>
	)
}

Warning.propTypes = {
	validParams: PropTypes.string,
	setValidParams: PropTypes.func,
}

export default Warning;

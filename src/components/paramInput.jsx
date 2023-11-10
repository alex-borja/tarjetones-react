import PropTypes from "prop-types";

function ParamInput({ label, id, placeholder, name, onChange, value }) {

	return (
		<div className="paramComponent">
			<label>{label}</label>
			<input type="text" id={id} placeholder={placeholder}
				name={name}
				onChange={onChange}
				value={value}
			/>
		</div>
	)
}

ParamInput.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.string
}

export default ParamInput;

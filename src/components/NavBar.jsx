import "../styles/components/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faSquarePollVertical, faClipboard } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { checkValidParams } from "../utils/utils";
import TarjetonType from "./TarjetonType";

function NavBar({ setShowResults, sharedParams, tarjetonType, setShowParmas }) {



	let handleClick = (param) => {
		switch (param) {
			case "type":
				if(tarjetonType) {
					setShowParmas(false);
				}
				break;
			case "params":
				if(tarjetonType) {
					setShowParmas(true)
				}
				setShowResults(false);
				break;
			case "results":
				if(tarjetonType) {
					setShowParmas(true)
				}
				if(checkValidParams(sharedParams)) {
					setShowResults(true);
				}
				break;
			default:
				break;
		}
	}

	return (
		<div className="navbar">
			<nav>
				<ul className="navList">
					<li onClick={() => handleClick("type")}>
						<FontAwesomeIcon icon={faClipboard} style={{ color: "#fcfcfc", }} />
						<p>Tipo de Tarjetón</p>
					</li>
					<li onClick={() => handleClick("params")}>
						<FontAwesomeIcon icon={faPencil} style={{ color: "#f5f5f5", }} />
						<p>Set paramters</p>
					</li>
					<li onClick={() => handleClick("results")}>
						<FontAwesomeIcon icon={faSquarePollVertical} style={{ color: "#fcfcfc", }} />
						<p>See results</p>
					</li>
				</ul>
			</nav>
		</div>
	)
}

NavBar.propTypes = {
	showResults: PropTypes.bool,
	setShowResults: PropTypes.func,
	sharedParams: PropTypes.object,
	tarjetonType: PropTypes.string,
	setShowParmas: PropTypes.func,
}

export default NavBar;

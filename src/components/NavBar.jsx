import "../styles/components/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { checkValidParams } from "../utils/utils";

function NavBar({ setShowResults, sharedParams }) {

	let handleClick = (param) => {
		switch (param) {
			case "1":
				setShowResults(false);
				break;
			case "2":
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
					<li onClick={() => handleClick("1")}>
						<FontAwesomeIcon icon={faPencil} style={{ color: "#f5f5f5", }} />
						Set paramters
					</li>
					<li onClick={() => handleClick("2")}>
						<FontAwesomeIcon icon={faSquarePollVertical} style={{ color: "#fcfcfc", }} />
						See results
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
}

export default NavBar;

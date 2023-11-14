import { useState } from 'react'
import TarjetonParamsView from './views/TarjetonParamsView';
import FileInputView from './views/FileInputView';
import PropTypes from "prop-types";
import NavBar from './components/NavBar';

function App() {
	const [showResults, setShowResults] = useState(false);
	const [sharedParams, setSharedParams] = useState({
		sede: "",
		pixel: "",
		linkFinal: "",
		bannerUrl: "",
		kw: "",
		matomo: ""
	})

	return (
		<div className='container'>
			<div className='header'>
				<h2>Validador de Tarjetones Genericos para Uneatlantico</h2>
			</div>
			<div className='center'>
				<NavBar
					showResults={showResults}
					setShowResults={setShowResults}
					sharedParams={sharedParams}>
				</NavBar>
				{
					!showResults ?
						<TarjetonParamsView
							showParams={showResults}
							setShowParams={setShowResults}
							sharedParams={sharedParams}
							setSharedParams={setSharedParams}>
						</TarjetonParamsView>
						:
						<FileInputView
							sharedParams={sharedParams}>
						</FileInputView>
				}
			</div>

		</div>
	)
}

App.propTypes = {
	showParams: PropTypes.bool,
	setShowParams: PropTypes.func,
	sharedParams: PropTypes.object,
	setSharedParams: PropTypes.func
}

export default App

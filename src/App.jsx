import { useState } from 'react'
import TarjetonParamsView from './views/TarjetonParamsView';
import FileInputView from './views/FileInputView';
import PropTypes from "prop-types";
import NavBar from './components/NavBar';
import { TARJETON_TYPE } from './utils/tarjetonType';
import TarjetonType from './components/TarjetonType';

function App() {
	const [showResults, setShowResults] = useState(false);
	const [sharedParams, setSharedParams] = useState({})

	return (
		<div className='container'>
			<NavBar
				showResults={showResults}
				setShowResults={setShowResults}
				sharedParams={sharedParams}>
			</NavBar>
			<div className='center'>			
				<div className='header'>
					<h2>Validador de Tarjetones Genericos para Uneatlantico</h2>
				</div>
				<TarjetonType></TarjetonType>
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

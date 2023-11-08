import { useState } from 'react'
import './App.css'
import Tarjeton_Params from './components/tarjetonParams'
import FileInput from './components/fileInput';
import PropTypes from "prop-types";

function App() {
	const [showParams, setShowParams] = useState(true);
	const [sharedParams, setSharedParams] = useState({
		sede: "",
		linkFinal: "",
		bannerUrl: "",
		kw: "",
		matomo: ""
	})

	return (
		<div className='container'>
			<div className='header'>
				<h1>Validador de Tarjetones Genericos para Uneatlantico</h1>
			</div>
			{
				showParams ?
					<Tarjeton_Params
						showParams={showParams}
						setShowParams={setShowParams}
						sharedParams={sharedParams}
						setSharedParams={setSharedParams}>
					</Tarjeton_Params>
					:
					<FileInput
						sharedParams={sharedParams}
						showParams={showParams}
						setShowParams={setShowParams}>
					</FileInput>
			}

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

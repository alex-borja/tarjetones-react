import { useState } from 'react'
import TarjetonParamsView from './views/TarjetonParamsView';
import FileInputView from './views/FileInputView';
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
					<TarjetonParamsView
						showParams={showParams}
						setShowParams={setShowParams}
						sharedParams={sharedParams}
						setSharedParams={setSharedParams}>
					</TarjetonParamsView>
					:
					<FileInputView
						sharedParams={sharedParams}
						showParams={showParams}
						setShowParams={setShowParams}>
					</FileInputView>
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

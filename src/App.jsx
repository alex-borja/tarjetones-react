import { useEffect, useState } from 'react'
import TarjetonParamsView from './views/TarjetonParamsView';
import FileInputView from './views/FileInputView';
import PropTypes from "prop-types";
import NavBar from './components/NavBar';
import TarjetonType from './components/TarjetonType';

function App() {
	const [showResults, setShowResults] = useState(false);
	const [showParams, setShowParmas] = useState(false);
	const [tarjetonType, setTarjetonType] = useState("");
	const [sharedParams, setSharedParams] = useState({
		sede: "",
		pixel: "",
		linkFinal: "",
		furriel: "",
		bannerUrl: "",
		kw: "",
		matomo: ""
	})

	return (
		<div className='container'>
			<NavBar
				showResults={showResults}
				setShowResults={setShowResults}
				sharedParams={sharedParams}
				tarjetonType={tarjetonType}
				setShowParmas={setShowParmas}>
			</NavBar>
			<div className='center'>
				<div className='header'>
					<h2>Validador de Tarjetones</h2>
				</div>
				{
					showParams ?
						<>{
							!showResults ?
								<TarjetonParamsView
									showParams={showResults}
									setShowParams={setShowResults}
									sharedParams={sharedParams}
									setSharedParams={setSharedParams}>
								</TarjetonParamsView>
								:
								<FileInputView
									sharedParams={sharedParams}
									tarjetonType={tarjetonType}>
								</FileInputView>
						}
						</>
						:
						<TarjetonType
							tarjetonType={tarjetonType}
							setTarjetonType={setTarjetonType}
							setSharedParams={setSharedParams}
							setShowParmas={setShowParmas}
						></TarjetonType>
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

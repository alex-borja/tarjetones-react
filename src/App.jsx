import { useState } from 'react'
import './App.css'
import Tarjeton_Params from './components/tarjetonParams'
import FileInput from './components/fileInput';

function App() {
	const [showParams, setShowParams] = useState(true);
	const [sede, setSede] = useState("");

	return (
		<div className='container'>
			<div className='header'>
				<h1>Validador de Tarjetones Genericos para Uneatlantico</h1>
			</div>
			{
				showParams ?
					<Tarjeton_Params showParams={showParams} setShowParams={setShowParams} sede={{sede, setSede}}></Tarjeton_Params>
					:
					<FileInput></FileInput>
			}

		</div>
	)
}

export default App

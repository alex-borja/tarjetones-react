function TarjetonType() {
    return (
	    <form>
			<label>Elije el tipo de Tarjeton:</label>
			<select onChange={(e) => (console.log(e.target.value))}>
			    <option value="none">Selecciona un tarjeton</option>
			    <option value="GGU">Generico de Grado Uneatlantico</option>
				<option value="GAF">Generico de área Funiber</option>
			</select>
			<input type="submit" />
		</form>
    )
}

export default TarjetonType;
import { useEffect, useState } from "react";
import TarjetonParamsView from "./views/TarjetonParamsView";
import FileInputView from "./views/FileInputView";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import TarjetonType from "./components/TarjetonType";
import { TARJETON_TYPE } from "./utils/tarjetonType";

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
    matomo: "",
  });
  const [ptest, setPTests] = useState({});

  return (
    <div className="container">
      <NavBar
        showResults={showResults}
        setShowResults={setShowResults}
        sharedParams={sharedParams}
        tarjetonType={tarjetonType}
        setShowParmas={setShowParmas}
      ></NavBar>
      <div className="center">
        <div className="header">
          <h2>Validador de Tarjetones</h2>
        </div>
        {showParams ? (
          <>
            {!showResults ? (
              <TarjetonParamsView
                showParams={showResults}
                setShowParams={setShowResults}
                sharedParams={sharedParams}
                setSharedParams={setSharedParams}
                tarjetonType={tarjetonType}
                ptest={ptest}
              ></TarjetonParamsView>
            ) : (
              <FileInputView
                sharedParams={sharedParams}
                tarjetonType={tarjetonType}
              ></FileInputView>
            )}
          </>
        ) : (
          <TarjetonType
            tarjetonType={tarjetonType}
            setTarjetonType={setTarjetonType}
            setSharedParams={setSharedParams}
            setShowParmas={setShowParmas}
            setPTests={setPTests}
          ></TarjetonType>
        )}
      </div>
    </div>
  );
}

App.propTypes = {
  showParams: PropTypes.bool,
  setShowParams: PropTypes.func,
  sharedParams: PropTypes.object,
  setSharedParams: PropTypes.func,
};

export default App;

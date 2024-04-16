import { useState } from "react";
import TarjetonParamsView from "./views/TarjetonParamsView";
import FileInputView from "./views/FileInputView";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import TarjetonType from "./views/TarjetonType";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [showParams, setShowParmas] = useState(false);
  const [tarjetonType, setTarjetonType] = useState(
    localStorage.getItem("tarjetonType"),
  );
  const [sharedParams, setSharedParams] = useState(
    JSON.parse(localStorage.getItem("sharedParams")),
  );

  localStorage.setItem("tarjetonType", tarjetonType);
  localStorage.setItem("sharedParams", JSON.stringify(sharedParams));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<TarjetonType />} />
        <Route path="/params" element={<TarjetonParamsView />} />
        <Route path="/fileInput" element={<FileInputView />} />
      </Route>
    )
  )

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )

  /*
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
            {showResults ? (
              <FileInputView
                sharedParams={sharedParams}
                tarjetonType={tarjetonType}
              ></FileInputView>
            ) : (
              <TarjetonParamsView
                showResults={showResults}
                setShowResults={setShowResults}
                sharedParams={sharedParams}
                setSharedParams={setSharedParams}
              ></TarjetonParamsView>
            )}
          </>
        ) : (
          <TarjetonType
            tarjetonType={tarjetonType}
            setTarjetonType={setTarjetonType}
            setSharedParams={setSharedParams}
            setShowParmas={setShowParmas}
          ></TarjetonType>
        )}
      </div>
    </div>
  );
  */
}

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

App.propTypes = {
  showParams: PropTypes.bool,
  setShowParams: PropTypes.func,
  sharedParams: PropTypes.object,
  setSharedParams: PropTypes.func,
};

export default App;

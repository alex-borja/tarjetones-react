import "./App.css"
import TarjetonParamsView from "./views/TarjetonParamsView";
import FileInputView from "./views/FileInputView";
import NavBar from "./components/NavBar";
import TarjetonType from "./views/TarjetonType";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

function App() {
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
}

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App;

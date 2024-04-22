import "./App.css";
import TarjetonParams from "./pages/TarjetonParams";
import FileInput from "./pages/FileInput";
import NavBar from "./components/NavBar";
import TarjetonType from "./pages/TarjetonType";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<TarjetonType />} />
        <Route path="/params" element={<TarjetonParams />} />
        <Route path="/fileInput" element={<FileInput />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>,
    ),
  );

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;

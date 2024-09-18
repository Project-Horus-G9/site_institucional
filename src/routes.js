import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/index.jsx"));
const Login = lazy(() => import("./pages/Login/index.jsx"));
const Cadastro = lazy(() => import("./pages/Cadastro/index.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard/index.jsx"));

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} /> 
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;

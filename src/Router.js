import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import TokenLogin from "./pages/TokenLog/TokenLogin";
import DashGeral from "./pages/DashGeral/DashGeral" 

function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/tokenlogin"} element={<TokenLogin />}/>
            <Route path={"/dash-geral"} element={<DashGeral />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;
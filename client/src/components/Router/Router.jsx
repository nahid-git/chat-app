import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import NotFound from "../Pages/NotFound/NotFound.jsx";
import Login from "../Pages/Login/Login.jsx";
import Signup from "../Pages/Signup/Signup.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={<NotFound/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
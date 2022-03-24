import style from "./App.module.css";
import Header from "./Header/Header";
import SearchPage from "./SearchPage/SearchPage";
import PersonPage from "./PersonPage/PersonPage";
import Footer from "./Footer/Footer";
import MainPage from "../components/MainPage/Main";
import Carts from "../components/Cart/Carts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

const App = () => {
    return (
        <div className={style.app}>
            <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/home" element={<><Header /><MainPage />  <Footer /></>} />
                <Route path="/search" element={<><Header /><SearchPage /><Footer /></>} />
                <Route path="/executor" element={<><Header /><PersonPage /><Footer /></>} />
            </Routes>
            </BrowserRouter>
            {/* <Carts/> */}
          
        </div>
    );

};

export default App;

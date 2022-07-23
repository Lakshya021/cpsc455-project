import {Routes, Route} from "react-router-dom";
import './App.css';

import SignIn from "../pages/SignIn";
import Homepage from "../pages/Homepage";
import Signup from "../pages/Signup";
import PasswordReset from "../pages/PasswordReset";
import ForgotPassword from "../pages/ForgotPassword";
import SettingPage from "../pages/SettingPage";


function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="signIn" element={<SignIn/>}/>
                <Route path="/forgot-password" element ={<ForgotPassword/>}/>
                <Route path="/password-reset/:resetToken" element ={<PasswordReset/>}/>
                <Route path="/homepage" element={<Homepage/>}/>
                <Route path="/settings" element={<SettingPage/>}/>
            </Routes>

        </div>
    );
}

export default App;

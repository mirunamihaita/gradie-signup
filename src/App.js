import React from "react";
import Mockup from "./components/Mockup";
import LoginForm from "./components/LoginForm";

function App() {
    return (
        <div className="container-fluid p-0 m-0 p-md-5 overflow-auto d-flex justify-content-center align-items-center row">
        <div className="col-12 col-md-8 login-container ">
            <div className="row rounded-3 overflow-hidden">
                <Mockup/>
                <LoginForm/>
            </div>
        </div>
        </div>
    );
}

export default App;

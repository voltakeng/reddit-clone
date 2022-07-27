import React from "react";
import "./App.css";
import Headers from "./features/Header/Header";
import Home from "./features/Home/Home";

function App() {
    return (
    <>
        <Headers /> 
        <main>
            <Home /> 
        </main>
    </>
    );
};

export default App; 

import React from "react";
import "./App.css";
import Headers from "./features/Header/Header";
import Home from "./features/Home/Home";
import Subreddits from "./features/Subreddits/Subreddits";

function App() {
    return (
    <>
        <Headers /> 
        <main>
            <Home /> 
        </main>
        <aside>
            <Subreddits />
        </aside>
    </>
    );
};

export default App; 

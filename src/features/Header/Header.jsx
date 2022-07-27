import React from "react";
import { ImReddit, ImSearch } from 'react-icons/im';
import "./Header.css";

function Headers() {
    return (
        <header>
            <div className="logo">
                <ImReddit className="logo-icon" /> 
                <p>
                    Reddit<span>Clone</span>
                </p>               
            </div>
            <form className="search">
                <input 
                    aria-label="Search posts"
                />
                <button aria-label="Search">
                    <ImSearch />
                </button>
            </form>
        </header>
    )
}

export default Headers; 
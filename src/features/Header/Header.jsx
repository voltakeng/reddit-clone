import "./Header.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setSearchTerm } from "../../app/headerSlice";
import { ImReddit, ImSearch } from 'react-icons/im';

function Headers() {
    const dispatch = useDispatch(); 
    const searchTerm = useSelector(selectSearchTerm); 

    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }   

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(setSearchTerm(""))
    }

    return (
        <header>
            <div className="logo">
                <ImReddit className="logo-icon" /> 
                <p>
                    Reddit<span>Clone</span>
                </p>               
            </div>
            <form className="search" onSubmit={handleSubmit}>
                <input 
                    aria-label="Search posts"
                    placeholder="Search"
                    onChange={handleChange}
                    value={searchTerm}
                />
                <button 
                    aria-label="Search"
                    type="submit"
                >
                    <ImSearch />
                </button>
            </form>
        </header>
    )
}

export default Headers; 
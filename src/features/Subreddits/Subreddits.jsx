import "./Subreddits.css"; 
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits, handleClick } from '../../app/subredditsSlice'; 


function Subreddits() {
    const isClick = useSelector(selectSubreddits);
    const dispatch = useDispatch(); 

    return (
        <div className="subreddit-card card">
            <h2>Subreddits</h2>
            <ul className="subreddits-list"> 
                <li 
                    className={`${isClick && `selected-subreddit`}`}
                >
                    <button
                        type="button"
                        onClick={() => dispatch(handleClick())}
                    >
                        <img
                            src="https://blog.idrsolutions.com/wp-content/uploads/2017/02/JPEG-1.png"
                            alt="test"
                            className="subreddit-icon"
                            style={{ border: '3px solid black' }}
                        />
                        Test Icon
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Subreddits; 
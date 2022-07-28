import React from "react";
import "./Subreddits.css"; 

function Subreddits() {
    return (
        <div className="subreddit-card card">
            <h2>Subreddits</h2>
            <ul className="subreddits-list"> 
                <li 
                    key={1}
                    className="selected-subreddit"
                >
                    <button
                        type="button"
                    >
                        <img
                            src="https://blog.idrsolutions.com/wp-content/uploads/2017/02/JPEG-1.png"
                            alt="test"
                            className="subreddit-icon"
                            style={{ border: '3px solid black' }}
                        />
                        G.I.JOE
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Subreddits; 
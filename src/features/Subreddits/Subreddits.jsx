import "./Subreddits.css"; 
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { 
    selectSelectedSubreddits, 
    handleSelected,
    selectSubreddits,
    loadSubreddits
 } from '../../app/subredditsSlice'; 


function Subreddits() {
    const selectedSubreddit = useSelector(selectSelectedSubreddits);
    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch(); 

    useEffect(() => {
       dispatch(loadSubreddits())
    }, [dispatch]);

    return (
        <div className="subreddit-card card">
            <h2>Subreddits</h2>
            <ul className="subreddits-list"> 
                {subreddits.map((subreddit) => 
                    <li
                        key={subreddit.id}
                        className={`${
                            selectedSubreddit === subreddit.url && `selected-subreddit`
                          }`}
                    >
                        <button
                            type="button"
                            onClick={()=>dispatch(handleSelected(subreddit.url))}
                        >
                            <img
                                src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                                alt={`${subreddit.display_name}`}
                                className="subreddit-icon"
                                style={{ border: `3px solid ${subreddit.primary_color}`}}
                            />
                            {subreddit.display_name}
                        </button>
                    </li>
                )}              
            </ul>
        </div>
    );
}

export default Subreddits; 
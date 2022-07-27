import React from "react";
// import Card from "../../components/Card/Card";
import "./Post.css"; 
import {
    // TiArrowUpOutline,
    TiArrowUpThick,
    // TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';

function Post() {
    return (
        <article>
            <div className="card">
                <div className="post-wrapper">
                    <div className="post-votes-container">
                        <button className="icon-action-button up-vote " aria-label="Up vote">
                            <TiArrowUpThick className="icon-action"/>
                        </button>
                        <p className="post-votes-value up-vote">
                            999
                        </p>
                        <button className="icon-action-button down-vote " aria-label="Up vote">
                            <TiArrowDownThick className="icon-action"/>
                        </button>
                    </div>
                    <div className="post-container">
                        <h3 className="post-title">Test Test and Test</h3>

                        <div className="post-image-container">
                            {/* <img /> */}
                        </div>

                        <div className="post-details">
                            <span className="author-details">
                                {/* <Avatar /> */}
                                <span className="author-username">test_username_01</span>
                            </span>

                            <span>test_time_01</span>

                            <span className="post-comments-container">
                                <button
                                    className="icon-action-button showing-comments"
                                    aria-label="Show comments"
                                >
                                    <TiMessage className="icon-action" />
                                </button>
                            </span>    
                        </div>

                        {/* <Comment /> */}

                    </div>
                </div>
            </div>
        </article>
    )
}

export default Post; 

import "./Post.css"; 
import React from "react";
import Comment from "../Comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { selectVoteUp, selectVoteDown, selectShowComments } from "../../app/postSlice";
import { voteUp, voteDown, showComments } from "../../app/postSlice";
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';

function Post() {

    const dispatch = useDispatch(); 
    const isVoteUp = useSelector(selectVoteUp);
    const isVoteDown = useSelector(selectVoteDown); 
    const isShowComments = useSelector(selectShowComments); 

    const handleVoteUp = () => {
        if(isVoteDown){
            dispatch(voteDown());
        }
        dispatch(voteUp());
    }

    const renderVoteUp = () => {
        if(isVoteUp){
            return <TiArrowUpThick className="icon-action" />;
        } else {
            return <TiArrowUpOutline className="icon-action" />;
        }
    }

    const handleVoteDown = () => {
        if(isVoteUp){
            dispatch(voteUp()); 
        }
        dispatch(voteDown()); 
    }

    const renderVoteDown = () => {
        if(isVoteDown){
            return <TiArrowDownThick className="icon-action" />;
        } else {
            return <TiArrowDownOutline className="icon-action" />;
        }
    }

    const getVoteType = () => {
        if(isVoteUp) return "up-vote";
        if(isVoteDown) return "down-vote";
        return ""; 
    }

    const handleShowComments = () => {
        dispatch(showComments()); 
    }

    return (
        <article>
            <div className="card">
                <div className="post-wrapper">
                    <div className="post-votes-container">
                        <button 
                            type="button"
                            className={`icon-action-button ${getVoteType()} ${isVoteUp && 'active'}`} 
                            onClick={handleVoteUp}
                            aria-label="Up vote"
                        >
                            {renderVoteUp()}
                        </button>
                        <p className={`post-votes-value ${getVoteType()}`}>
                            999
                        </p>
                        <button 
                            type="button"
                            className={`icon-action-button ${getVoteType()} ${isVoteDown && 'active'}`} 
                            onClick={handleVoteDown} 
                            aria-label="Down vote"
                        >
                            {renderVoteDown()}
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
                                    className={`icon-action-button ${isShowComments && 'showing-comments'}`}
                                    onClick={handleShowComments}
                                    aria-label="Show comments"
                                >
                                    <TiMessage className="icon-action" />
                                </button>
                            </span>    
                        </div>

                        {isShowComments && <Comment />}

                    </div>
                </div>
            </div>
        </article>
    )
}

export default Post; 

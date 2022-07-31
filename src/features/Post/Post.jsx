import "./Post.css"; 
import React, { useState } from "react";
import Comment from "../Comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { selectShowComments } from "../../app/postSlice";
import { showComments } from "../../app/postSlice";
import moment from "moment";
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';

function Post({ post }) {

    const [ vote, setVote ] = useState(0); 

    const dispatch = useDispatch(); 

    const isShowComments = useSelector(selectShowComments); 

    const handleVoteUp = () => {
        if(vote === 1) return setVote(0); 
        setVote(1);
    }

    const renderVoteUp = () => {
        if(vote === 1){
            return <TiArrowUpThick className="icon-action" />;
        } else {
            return <TiArrowUpOutline className="icon-action" />;
        }
    }

    const handleVoteDown = () => {
        if(vote === -1) return setVote(0); 
        setVote(-1);
    }

    const renderVoteDown = () => {
        if(vote === -1){
            return <TiArrowDownThick className="icon-action" />;
        } else {
            return <TiArrowDownOutline className="icon-action" />;
        }
    }

    const getVoteType = () => {
        if(vote === 1) return "up-vote";
        if(vote === -1) return "down-vote";
        return ""; 
    }

    const getVoteScore = () => {
        if(vote === 1) return post.ups+1;
        if(vote === -1) return post.ups-1;
        return post.ups;
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
                            className={`icon-action-button up-vote ${vote === 1 && 'active'}`} 
                            onClick={handleVoteUp}
                            aria-label="Up vote"
                        >
                            {renderVoteUp()}
                        </button>
                        <p className={`post-votes-value ${getVoteType()} }`}>
                            {getVoteScore()}
                        </p>
                        <button 
                            type="button"
                            className={`icon-action-button down-vote ${vote === -1 && 'active'}`} 
                            onClick={handleVoteDown} 
                            aria-label="Down vote"
                        >
                            {renderVoteDown()}
                        </button>
                    </div>
                    <div className="post-container">
                        <h3 className="post-title">{post.title}</h3>

                        <div className="post-image-container">
                            {/* <img src={post.url} alt="" className="post-image" /> */}
                        </div>

                        <div className="post-details">
                            <span className="author-details">
                                {/* <Avatar /> */}
                                <span className="author-username">{post.author}</span>
                            </span>

                            <span>{moment.unix(post.created_utc).fromNow()}</span>

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

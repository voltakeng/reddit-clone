import "./Comment.css"
import React from "react";
import ReactMarkdown from "react-markdown";
import moment from 'moment';

function Comment({ comment }) {
    return (
        <div className="comment">

            <div className="comment-metadata">
                {/* <Avatar /> */}
                <p className="comment-author">{comment.author}</p>
                <p className="comment-created-time">
                    {moment.unix(comment.created_utc).fromNow()}
                </p>
            </div>

            <ReactMarkdown children={comment.body} />

        </div>
    );
};

export default Comment; 
import "./Comment.css"
import React from "react";
import ReactMarkdown from "react-markdown";

function Comment() {
    return (
        <div className="comment">

            <div className="comment-metadata">
                {/* <Avatar /> */}
                <p className="comment-author">Test Author</p>
                <p className="comment-created-time">Test Time</p>
            </div>

            <ReactMarkdown children={"Test Comment"} />

        </div>
    );
};

export default Comment; 
import "./Home.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    loadSubredditPosts,
    selectPosts,
    selectIsLoadingPosts,
    selectFailedToLoadPosts
} from "../../app/homeSlice";
import { selectSearchTerm } from "../../app/headerSlice";
import { selectSelectedSubreddits } from "../../app/subredditsSlice";
import Post from "../Post/Post";
import PostLoading from "../Post/PostLoading"

function Home() {
    const dispatch = useDispatch();
    const currentSubreddit = useSelector(selectSelectedSubreddits);
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectIsLoadingPosts);
    const isFailed = useSelector(selectFailedToLoadPosts);
    const searchterm = useSelector(selectSearchTerm);

    useEffect(() => {
        dispatch(loadSubredditPosts(currentSubreddit))
    }, [currentSubreddit, dispatch])

    let regex = new RegExp(searchterm, 'i');
    let fiteredpost = posts.filter((post) => regex.test(post.title))
    console.log(fiteredpost);

    if (isFailed) {
        return (
            <div className="error">
                <h2>Failed to load posts.</h2>
                <button
                    type="button"
                    onClick={() => dispatch(loadSubredditPosts(currentSubreddit))}
                >
                    Try again
                </button>
            </div>
        );
    }

    if (isLoading) {
        return (
            <>
                {Array(10).fill(<PostLoading />)}
            </>
        )
    }

    if (fiteredpost.length === 0) {
        return (
            <div className="error">
                <h2>Search Not Found</h2>
                <img 
                    src="https://cdn.dribbble.com/users/6487750/screenshots/16827244/media/f79f5e40dd7189d69388ec0b069e4b73.png?compress=1&resize=1000x750&vertical=top"
                    alt="not found"
                    style={{width: 500}}
                />
            </div>
        );
    }

    return (
        <>
            {fiteredpost.map(post => <Post post={post} keys={post.id} />)}
        </>
    );

}

export default Home; 
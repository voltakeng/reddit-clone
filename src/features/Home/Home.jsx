import "./Home.css"; 
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { 
    loadSubredditPosts,
    selectPosts, 
    selectIsLoadingPosts,
    selectFailedToLoadPosts
} from "../../app/homeSlice";
import { selectSelectedSubreddits } from "../../app/subredditsSlice";
import Post from "../Post/Post";
import PostLoading from "../Post/PostLoading"

function Home() {
    const dispatch = useDispatch(); 
    const currentSubreddit = useSelector(selectSelectedSubreddits);
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectIsLoadingPosts);
    const isFailed = useSelector(selectFailedToLoadPosts);

    useEffect(()=>{
        dispatch(loadSubredditPosts(currentSubreddit))
    }, [currentSubreddit, dispatch])

    if(isFailed) {
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

    if(isLoading) {
        return (
            <>
                {Array(10).fill(<PostLoading />)}
            </>
        )
    }

    return (
        <>
            {posts.map(post => <Post 
                post={post} 
                key={post.id}
            />)}
        </>
    );
}

export default Home; 
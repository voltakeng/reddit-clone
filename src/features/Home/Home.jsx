import "./Home.css"; 
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, loadSubredditPosts } from "../../app/homeSlice";
import { selectSelectedSubreddits } from "../../app/subredditsSlice";
import Post from "../Post/Post";

function Home() {
    const dispatch = useDispatch(); 
    const currentSubreddit = useSelector(selectSelectedSubreddits);
    const posts = useSelector(selectPosts);

    useEffect(()=>{
        dispatch(loadSubredditPosts(currentSubreddit))
    }, [currentSubreddit, dispatch])

    return (
        <>
            {posts.map(post => <Post post={post} />)}
        </>
    );
}

export default Home; 
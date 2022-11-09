import React from 'react';
import { connect } from "frontity";
import Blog from './Blog';
import AboutUs from './AboutUs';
import PostPage from './PostPage';

const Post = ({ state, setHPercent }) => {
    if (state.router.link === '/blog/') {
        return <Blog setHPercent={setHPercent} />
    } else if (state.router.link === '/about-us/') {
        return <AboutUs setHPercent={setHPercent} />
    } else {
        return <PostPage setHPercent={setHPercent} />
    }
}

export default connect(Post);
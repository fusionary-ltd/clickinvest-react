import React from 'react';
import { connect } from "frontity";
import Blog from './Blog';
import AboutUs from './AboutUs';
import PostPage from './PostPage';

const Post = ({ state }) => {
    if (state.router.link === '/blog/') {
        return <Blog />
    } else if (state.router.link === '/about-us/') {
        return <AboutUs />
    } else {
        return <PostPage />
    }
}

export default connect(Post);
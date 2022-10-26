import React from 'react';
import { connect } from "frontity";
import Blog from './Blog';
import PostPage from './PostPage';

const Post = ({ state }) => {
    if (state.router.link === '/blog/') {
        return <Blog />
    } else {
        return <PostPage />
    }
}

export default connect(Post);
import React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ContactService from '../home/ContactService';
import { AboutUsContent } from '../../components/styled';

const PostPage = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;

    return (
        <Box sx={{ my: 4 }}>
            <Container maxWidth="lg">
                {
                    data.isReady ? (
                        <div>
                            <AboutUsContent>
                                <Html2React html={post.content.rendered} />
                            </AboutUsContent>
                        </div>
                    ) : null
                }

            </Container>
            <ContactService />
        </Box>
    )
}

export default connect(PostPage);
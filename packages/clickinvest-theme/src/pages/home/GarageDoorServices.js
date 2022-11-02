import React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PostItem from '../../components/PostItem';
import Title from '../../components/Title';

const GarageDoorServices = ({ state, actions }) => {
    const data = state.source.get(state.router.link);
    const { home } = state.option;

    return (
        <Box sx={{ bgcolor: '#EEEEEE', pt: 4, pb: 8 }} >
            <Container maxWidth="lg">
                <Title
                    title={home.services.title}
                    desc={home.services.description}
                />

                {data.items.map(({ type, id }, idx) => {
                    const item = state.source[type][id];
                    return <PostItem key={item.id} item={item} order={idx} />;
                })}
            </Container>
        </Box>
    );
}

export default connect(GarageDoorServices);
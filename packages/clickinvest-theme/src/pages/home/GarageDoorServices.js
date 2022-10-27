import React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, PrevNextNav } from '../../components/styled';
import PostItem from '../../components/PostItem';
import Title from '../../components/Title';

const GarageDoorServices = ({ state, actions }) => {
    const data = state.source.get(state.router.link);

    return (
        <Box sx={{ bgcolor: '#EEEEEE', pt: 4, pb: 8 }} >
            <Container maxWidth="lg">
                <Title
                    title={'Garage Door Services'}
                    desc={`We provide the best repair services in Pittsburgh. Our warranty, just like our service, knows no bounds. That’s right - ALL of us parts and work is covered. Now THAT is comprehensive.`}
                />

                {data.items.map(({ type, id }, idx) => {
                    const item = state.source[type][id];
                    return <PostItem key={item.id} item={item} order={idx} />;
                })}

                <PrevNextNav>
                    {data.previous && (
                        <button
                            onClick={() => {
                                actions.router.set(data.previous)
                            }}
                        >
                            &#171; Prev
                        </button>
                    )}
                    {data.next && (
                        <button
                            onClick={() => {
                                actions.router.set(data.next)
                            }}
                        >
                            Next &#187;
                        </button>
                    )}
                </PrevNextNav>
            </Container>
        </Box>
    );
}

export default connect(GarageDoorServices);
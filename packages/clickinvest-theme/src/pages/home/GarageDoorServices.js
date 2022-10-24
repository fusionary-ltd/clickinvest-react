import React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack } from '../../components/styled';
import PostItem from '../../components/PostItem';

const GarageDoorServices = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <Box sx={{ bgcolor: '#EEEEEE', pt: 4, pb: 8 }} >
            <Container maxWidth="lg">
                <Stack alignItems='center' sx={{ pb: 9 }}>
                    <Typography variant='h4' sx={{ fontSize: { md: '2.5rem', xs: '2rem' }, fontWeight: 700, color: '#000', textAlign: 'center', mb: 2.5 }}>
                        Garage Door Services
                    </Typography>
                    <HStack>
                        <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                    </HStack>
                    <Typography variant='h5' sx={{ fontSize: '1.4rem', color: '#000', lineHeight: '31px', textAlign: 'center', mb: 2.5, fontWeight: 300 }}>
                        We provide the best repair services in Pittsburgh. Our warranty, just like our service, knows no bounds. That’s right - ALL of us parts and work is covered. Now THAT is comprehensive.
                    </Typography>
                </Stack>

                {data.items.map(({ type, id }) => {
                    const item = state.source[type][id];
                    return <PostItem key={item.id} item={item} />;
                })}
            </Container>
        </Box>
    );
}

export default connect(GarageDoorServices);
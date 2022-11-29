import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, ServiceLink, Iframe } from '../../components/styled';
import Title from '../../components/Title';

const Experience = ({ state }) => {
    const { home } = state.option;
    return (
        <Box sx={{ pt: 7, bgcolor: '#fffff' }} >
            <Container maxWidth="lg">
                <Title
                    title={home.experience.title}
                    desc={home.experience.description}
                    isLeft={true}
                />
            </Container>
            <Box sx={{ bgcolor: '#F5F5F5', mt: 20 }} >
                <Container maxWidth="lg" sx={{ position: 'relative' }}>
                    <Stack>
                        <HStack sx={{ pb: 2, mt: -18, mb: 5, bgcolor: '#FFFFFF' }}>
                            <Grid container>
                                {
                                    home.experience.items ? home.experience.items.map(({ title, description, video }, idx) => (
                                        <Grid item key={idx} sm={4} xs={12}>
                                            <Stack sx={{ p: 1.25 }}>
                                                <Stack sx={{ px: 2 }}>
                                                    <Iframe src={video} name='video' />
                                                </Stack>
                                                <Stack sx={{ p: 2.25 }}>
                                                    <ServiceLink link='/'>
                                                        <Typography variant='h3' sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#000' }}>{title}</Typography>
                                                    </ServiceLink>
                                                    <Typography>{description}</Typography>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    )) : null
                                }
                            </Grid>
                        </HStack>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

export default connect(Experience);
import * as React from 'react';
import ReactStars from 'react-stars';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Title from '../../components/Title';

const Testimonials = ({ state }) => {
    const { home } = state.option;
    return (
        <Box>
            <Container maxWidth="lg">
                <Box sx={{ py: 7.5 }}>
                    <Title
                        title={home.testimonials.title}
                        desc={home.testimonials.description}
                    />
                    <Box>
                        <Grid container>
                            {
                                home.testimonials.reviews ? home.testimonials.reviews.map(({ text, client, area, star }, idx) => (
                                    <Grid key={idx} item sm={4} xs={12}>
                                        <Box sx={{ p: 1.25, height: '100%' }}>
                                            <Stack alignItems='center' justifyContent='space-between' sx={{ height: '100%' }}>
                                                <Typography sx={{ mb: 2.5, fontSize: '1.5rem', color: '#666666', textAlign: 'center' }}>
                                                    {text}
                                                </Typography>
                                                <Stack>
                                                    <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: '1rem' }}>{client}</Typography>
                                                    <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>{area}</Typography>
                                                    {/* {
                                                        star !== undefined ?
                                                            <ReactStars
                                                                edit={false}
                                                                count={5}
                                                                value={star}
                                                                size={35}
                                                                color2={'#ffa825'} /> : null
                                                    } */}
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                )) : null
                            }
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default connect(Testimonials);
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
    const { theme, contact } = state.option;
    return (
        <Box>
            <Container maxWidth="lg">
                <Box sx={{ py: 7.5 }}>
                    <Title
                        title={'TESTIMONIALS'}
                        desc={`Don't Just Take Our Word We're The Best`}
                    />
                    <Box>
                        <Grid container>
                            <Grid item sm={4} xs={12}>
                                <Box sx={{ p: 1.25, height: '100%' }}>
                                    <Stack alignItems='center' justifyContent='space-between' sx={{ height: '100%' }}>
                                        <Typography sx={{ mb: 2.5, fontSize: '1.5rem', color: '#666666', textAlign: 'center' }}>
                                            Prompt, friendly service. We had a little accident with our door, and they came out to us in a couple of hours late in the evening. Gave us a variety of options and prices to take care of our issue. Would happily recommend them.
                                        </Typography>
                                        <Stack>
                                            <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: '1rem' }}>Robert Moyles</Typography>
                                            <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>Baldwin</Typography>
                                            {/* <ReactStars
                                                edit={false}
                                                count={5}
                                                value={5}
                                                size={35}
                                                color2={'#ffa825'} /> */}
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Box sx={{ p: 1.25, height: '100%' }}>
                                    <Stack alignItems='center' justifyContent='space-between' sx={{ height: '100%' }}>
                                        <Typography sx={{ mb: 2.5, fontSize: '1.5rem', color: '#666666', textAlign: 'center' }}>
                                            Service was quick and professional. Had an emergency with our garage door and they were on site and fixed our issue same day. Would recommend!
                                        </Typography>
                                        <Stack>
                                            <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: '1rem' }}>Rhonda Ikert</Typography>
                                            <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>Cranberry</Typography>
                                            {/* <ReactStars
                                                edit={false}
                                                count={5}
                                                value={5}
                                                size={35}
                                                color2={'#ffa825'} /> */}
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <Box sx={{ p: 1.25, height: '100%' }}>
                                    <Stack alignItems='center' justifyContent='space-between' sx={{ height: '100%' }}>
                                        <Typography sx={{ mb: 2.5, fontSize: '1.5rem', color: '#666666', textAlign: 'center' }}>
                                            I needed an emergency fix on my garage door, they were fast, friendly and efficient, and reasonably priced. I will definitely be using them again in the future.
                                        </Typography>
                                        <Stack>
                                            <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: '1rem' }}>Denis Kennedy</Typography>
                                            <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: '1rem', fontWeight: 600 }}>Penn Hills
                                            </Typography>
                                            {/* <ReactStars
                                                edit={false}
                                                count={5}
                                                value={5}
                                                size={35}
                                                color2={'#ffa825'} /> */}
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default connect(Testimonials);
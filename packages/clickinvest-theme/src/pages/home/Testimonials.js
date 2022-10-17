import * as React from 'react';
import ReactStars from 'react-stars';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack } from '../../components/styled';

const Testimonials = () => {
    return (
        <Box>
            <Container maxWidth="lg">
                <Box sx={{ py: 7.5 }}>
                    <Stack alignItems='center' sx={{ p: 1.25 }}>
                        <Typography variant='h4' sx={{ fontSize: { md: '2.5rem', xs: '2rem' }, fontWeight: 700, color: '#000', textAlign: 'center', mb: 2.5 }}>
                            TESTIMONIALS
                        </Typography>
                        <HStack>
                            <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                        </HStack>
                        <Typography variant='h5' sx={{ fontSize: '1.4rem', color: '#000', lineHeight: '31px', textAlign: 'center', mb: 2.5, fontWeight: 300 }}>
                            Don't Just Take Our Word We're The Best
                        </Typography>
                    </Stack>
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
                                            <ReactStars
                                                edit={false}
                                                count={5}
                                                value={5}
                                                size={35}
                                                color2={'#ffa825'} />
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
                                            <ReactStars
                                                edit={false}
                                                count={5}
                                                value={5}
                                                size={35}
                                                color2={'#ffa825'} />
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
                                            <ReactStars
                                                edit={false}
                                                count={5}
                                                value={5}
                                                size={35}
                                                color2={'#ffa825'} />
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

export default Testimonials;
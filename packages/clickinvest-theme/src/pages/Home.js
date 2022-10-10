import * as React from 'react';
import ReactStars from 'react-stars';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BackgroundOverlay, HStack, RepairInput, RepairButton, SliderImg, SliderContent } from '../components/styled'
import door_bg from '../assets/img/bg/garage_door_1.jpg'
import slider1 from '../assets/img/slider/1.jpg'
import slider2 from '../assets/img/slider/2.jpg'
import slider3 from '../assets/img/slider/3.jpg'

const Home = () => {
    return (
        <Box>
            <Box
                style={{ backgroundImage: `url(${door_bg})` }}
                sx={{
                    backgroundPosition: 'center left',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative',
                    py: 15
                }}
            >
                <BackgroundOverlay />
                <Container maxWidth="lg">
                    <HStack sx={{ position: 'relative' }}>
                        <Box sx={{ p: 1.25 }}>
                            <Box>
                                <Typography variant='h1' sx={{ color: '#FFFFFF', fontSize: 46, fontWeight: 700, textTransform: 'uppercase', lineHeight: '50px' }}>
                                    Garage Door Repair Pittsburgh
                                    <Typography sx={{ color: '#FFFFFF', fontSize: 46, fontWeight: 700, textTransform: 'uppercase', lineHeight: '50px' }}>
                                        MARKSMAN GARAGE DOORS
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ my: 4.5 }}>
                                <Typography variant='h2' sx={{ color: '#FFFFFF', fontSize: 20, fontWeight: 300, lineHeight: '1.3em' }}>Marksman Garage Doors is a locally owned and operated servicing company.</Typography>
                            </Box>
                            <Box>
                                <Link href="tel:4123882633" sx={{ textDecoration: 'none' }}>
                                    <Button sx={{
                                        lineHeight: 1,
                                        borderRadius: 1.5,
                                        px: 5,
                                        py: 2.5,
                                        bgcolor: '#D91108',
                                        fontSize: 24,
                                        fontWeight: 700,
                                        color: '#fff',
                                        textTransform: 'capitalize',
                                        '&:hover': { bgcolor: '#D91108' }
                                    }}>
                                        Call: (412) 388-2633
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </HStack>
                </Container>
            </Box>
            <Box
                sx={{
                    bgcolor: theme => theme.palette.warning.main,
                    py: 6.5
                }}
            >
                <Container maxWidth="lg">
                    <Stack>
                        <Typography variant='h1' sx={{ mb: 2.5, fontSize: 36, fontWeight: 700 }}>24/7 Emergency Repair Services</Typography>
                        <Typography sx={{ mb: 2.5, fontSize: 17 }}>Is your garage door stuck? Want routine maintenance services from professionals? We’re reading for your call!</Typography>
                        <HStack sx={{ alignItems: 'flex-start !important' }}>
                            <Stack>
                                <RepairInput placeholder="Full Name" name="full-name" variant="outlined" />
                                <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                            </Stack>
                            <Stack>
                                <RepairInput placeholder="Phone Number" name="tel-323" type="tel" variant="outlined" />
                                <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                            </Stack>
                            <Stack>
                                <RepairInput placeholder="Email Address" name="your-email" type="email" variant="outlined" />
                                <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                            </Stack>
                            <Stack>
                                <RepairInput placeholder="City / Location" name="city-location" variant="outlined" />
                                <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                            </Stack>
                            <RepairButton>Submit</RepairButton>
                        </HStack>
                    </Stack>
                </Container>
            </Box>
            <Box>
                <Container maxWidth="lg">
                    <Box sx={{ py: 7.5 }}>
                        <Stack alignItems='center' sx={{ p: 1.25 }}>
                            <Typography variant='h4' sx={{ fontSize: 36, fontWeight: 700, color: '#000', textAlign: 'center', mb: 2.5 }}>Serving Pittsburgh is what we love doing</Typography>
                            <HStack>
                                <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                            </HStack>
                            <Typography variant='h5' sx={{ fontSize: 18, color: '#000', lineHeight: '31px', textAlign: 'center', mb: 2.5 }}>
                                Our high-quality professional garage door repair team will get your garage door repaired.
                                We remain updated on all modern technology and specific trends and provide various services to the community of Pittsburgh.
                            </Typography>
                        </Stack>
                    </Box>
                    <Stack>
                        <Box sx={{ width: '100%' }}>
                            {/* <Swiper
                                autoplay={true}
                                loop={true}
                                modules={[Navigation, Pagination, Autoplay]}
                                pagination={{
                                    clickable: true,
                                }}
                                className='home-slider'
                            >
                                <SwiperSlide>
                                    <Box sx={{ height: 400 }}>
                                        <SliderImg style={{ backgroundImage: `url(${slider1})` }} />
                                        <SliderContent>
                                            <Stack sx={{ p: '50px', height: '100%', justifyContent: 'center' }}>
                                                <Typography sx={{ fontSize: 27, fontWeight: 700, color: '#000', mb: 4 }}>Beautiful and Clean</Typography>
                                                <Typography sx={{ fontSize: 17, color: '#000' }}>Your desired clean look is just a call away. Your garage will always look immaculate with Marksman.</Typography>
                                            </Stack>
                                        </SliderContent>
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box sx={{ height: 400 }}>
                                        <SliderImg style={{ backgroundImage: `url(${slider2})` }} />
                                        <SliderContent>
                                            <Stack sx={{ p: '50px', height: '100%', justifyContent: 'center' }}>
                                                <Typography sx={{ fontSize: 27, fontWeight: 700, color: '#000', mb: 4 }}>Beautiful and Clean</Typography>
                                                <Typography sx={{ fontSize: 17, color: '#000' }}>Your desired clean look is just a call away. Your garage will always look immaculate with Marksman.</Typography>
                                            </Stack>
                                        </SliderContent>
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box sx={{ height: 400 }}>
                                        <SliderImg style={{ backgroundImage: `url(${slider3})` }} />
                                        <SliderContent>
                                            <Stack sx={{ p: '50px', height: '100%', justifyContent: 'center' }}>
                                                <Typography sx={{ fontSize: 27, fontWeight: 700, color: '#000', mb: 4 }}>Beautiful and Clean</Typography>
                                                <Typography sx={{ fontSize: 17, color: '#000' }}>Your desired clean look is just a call away. Your garage will always look immaculate with Marksman.</Typography>
                                            </Stack>
                                        </SliderContent>
                                    </Box>
                                </SwiperSlide>
                            </Swiper> */}
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{ bgcolor: '#262626', py: 19 }} />
            <Box>
                <Container maxWidth="lg">
                    <Box sx={{ py: 7.5 }}>
                        <Stack alignItems='center' sx={{ p: 1.25 }}>
                            <Typography variant='h4' sx={{ fontSize: 36, fontWeight: 700, color: '#000', textAlign: 'center', mb: 2.5 }}>
                                TESTIMONIALS
                            </Typography>
                            <HStack>
                                <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                            </HStack>
                            <Typography variant='h5' sx={{ fontSize: 18, color: '#000', lineHeight: '31px', textAlign: 'center', mb: 2.5 }}>
                                Don't Just Take Our Word We're The Best
                            </Typography>
                        </Stack>
                        <Box>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Box sx={{ p: 1.25, height: '100%' }}>
                                        <Stack alignItems='center' justifyContent='space-between' sx={{ height: '100%' }}>
                                            <Typography sx={{ mb: 2.5, fontSize: 22.5, color: '#666666', textAlign: 'center' }}>
                                                Prompt, friendly service. We had a little accident with our door, and they came out to us in a couple of hours late in the evening. Gave us a variety of options and prices to take care of our issue. Would happily recommend them.
                                            </Typography>
                                            <Stack>
                                                <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: 17 }}>Robert Moyles</Typography>
                                                <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: 17, fontWeight: 600 }}>Baldwin</Typography>
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
                                <Grid item xs={4}>
                                    <Box sx={{ p: 1.25, height: '100%' }}>
                                        <Stack alignItems='center' justifyContent='space-between' sx={{ height: '100%' }}>
                                            <Typography sx={{ mb: 2.5, fontSize: 22.5, color: '#666666', textAlign: 'center' }}>
                                                Service was quick and professional. Had an emergency with our garage door and they were on site and fixed our issue same day. Would recommend!
                                            </Typography>
                                            <Stack>
                                                <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: 17 }}>Rhonda Ikert</Typography>
                                                <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: 17, fontWeight: 600 }}>Cranberry</Typography>
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
                                <Grid item xs={4}>
                                    <Box sx={{ p: 1.25, height: '100%' }}>
                                        <Stack alignItems='center' justifyContent='space-between' sx={{ height: '100%' }}>
                                            <Typography sx={{ mb: 2.5, fontSize: 22.5, color: '#666666', textAlign: 'center' }}>
                                                I needed an emergency fix on my garage door, they were fast, friendly and efficient, and reasonably priced. I will definitely be using them again in the future.
                                            </Typography>
                                            <Stack>
                                                <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: 17 }}>Denis Kennedy</Typography>
                                                <Typography sx={{ color: '#666666', textAlign: 'center', fontSize: 17, fontWeight: 600 }}>Penn Hills
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
        </Box>
    );
}

export default Home;
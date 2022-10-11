import * as React from 'react';
import ReactStars from 'react-stars';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BackgroundOverlay, HStack, RepairInput, RepairButton, ServiceLink, SliderContent } from '../components/styled'
import door_bg from '../assets/img/bg/garage_door_1.jpg'
import slider1 from '../assets/img/slider/1.jpg'
import slider2 from '../assets/img/slider/2.jpg'
import slider3 from '../assets/img/slider/3.jpg'

import black_bg from '../assets/img/bg/black-bg.jpg'

import service1 from '../assets/img/services/service1.jpg'
import service2 from '../assets/img/services/service2.jpg'
import service3 from '../assets/img/services/service3.jpg'

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
                            <Typography variant='h5' sx={{ fontSize: 18, color: '#000', lineHeight: '31px', textAlign: 'center', mb: 2.5, fontWeight: 300 }}>
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
                            <Typography variant='h5' sx={{ fontSize: 18, color: '#000', lineHeight: '31px', textAlign: 'center', mb: 2.5, fontWeight: 300 }}>
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
            <Box sx={{ bgcolor: '#EEEEEE', pt: 4, pb: 8 }} >
                <Container maxWidth="lg">
                    <Stack alignItems='center' sx={{ pb: 9 }}>
                        <Typography variant='h4' sx={{ fontSize: 36, fontWeight: 700, color: '#000', textAlign: 'center', mb: 2.5 }}>
                            Garage Door Services
                        </Typography>
                        <HStack>
                            <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                        </HStack>
                        <Typography variant='h5' sx={{ fontSize: 18, color: '#000', lineHeight: '31px', textAlign: 'center', mb: 2.5, fontWeight: 300 }}>
                            We provide the best repair services in Pittsburgh. Our warranty, just like our service, knows no bounds. That’s right - ALL of us parts and work is covered. Now THAT is comprehensive.
                        </Typography>
                    </Stack>
                    {
                        [0, 1, 2, 3].map((item) => (
                            <>
                                <HStack sx={{ pb: 9 }}>
                                    <Stack sx={{ width: '50%', p: 1.25 }}>
                                        <ServiceLink link='/'>
                                            <Typography variant='h3' sx={{ fontSize: 27, fontWeight: 700, color: '#000' }}>Garage Door Automatic Opener Repair</Typography>
                                        </ServiceLink>
                                        <Typography>Opening your automatic door manually is a waste of a good luxury. If it’s not working – let us fix it. Simple!</Typography>
                                    </Stack>
                                    <Stack sx={{ width: '50%', px: 3.75 }}>
                                        <Box component='img' src={service1} sx={{ p: 1.25, bgcolor: 'white', with: '100%' }} />
                                    </Stack>
                                </HStack>
                                <HStack sx={{ pb: 9 }}>
                                    <Stack sx={{ width: '50%', px: 3.75 }}>
                                        <Box component='img' src={service2} sx={{ p: 1.25, bgcolor: 'white', with: '100%' }} />
                                    </Stack>
                                    <Stack sx={{ width: '50%', p: 1.25 }}>
                                        <ServiceLink link='/'>
                                            <Typography variant='h3' sx={{ fontSize: 27, fontWeight: 700, color: '#000' }}>Garage Door Cable Repair</Typography>
                                        </ServiceLink>
                                        <Typography>If your cables are in any way damaged or are showing signs of wear and tear, give us a call.</Typography>
                                    </Stack>
                                </HStack>
                            </>
                        ))
                    }
                </Container>
            </Box>
            <Box sx={{ py: 10 }} style={{ backgroundImage: `url(${black_bg})` }}>
                <Container maxWidth="lg">
                    <HStack alignItems='flex-start'>
                        <Stack sx={{ width: '50%', pr: 4 }}>
                            <Typography
                                variant='h1'
                                sx={{
                                    color: '#000000',
                                    fontSize: 36,
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    mb: 2.5,
                                    py: 2.5,
                                    zIndex: 1,
                                    '&:before': {
                                        content: `""`,
                                        position: 'absolute',
                                        background: '#F7941D',
                                        width: '110%',
                                        height: '100%',
                                        zIndex: -1,
                                        right: 0,
                                        top: 0
                                    }
                                }}>THE MARKSMAN TEAM</Typography>
                            <Box>
                                <Typography sx={{ color: '#fff', mb: 1 }}>Our team of experienced and qualified fitters are on hand to help. Providing a high quality service on a variety of garage door brands, styles and configurations, we offer a personal service that will leave you and your wallet happy.</Typography>
                                <Typography sx={{ color: '#fff', mb: 1 }}>Does your garage door need fixing? Never attempt to repair overhead doors on your own, especially if you have no experience. It can be quite a dangerous job because you can get seriously injured if you don’t do it right. This is why it’s important that you contact one of our well-trained and experienced overhead doors repair professionals today so we can assess the problem and give you a quotation.</Typography>
                                <Typography sx={{ color: '#fff', mb: 1 }}>Give us a call today.</Typography>
                            </Box>
                        </Stack>
                        <Stack sx={{ width: '50%' }}>
                            <Box component='img' src={service3} sx={{ p: 1.25 }} />
                        </Stack>
                    </HStack>
                </Container>
            </Box>
            <Box sx={{ py: 4, bgcolor: '#F7941D' }} >
                <Container maxWidth="lg">
                    <HStack justifyContent='space-between'>
                        <Typography sx={{
                            color: '#000000',
                            fontSize: 36,
                            fontWeight: 700
                        }}>Call Us For a FREE Estimate</Typography>
                        <Link href="tel:4123882633" sx={{ textDecoration: 'none' }}>
                            <Button sx={{
                                lineHeight: 1,
                                borderRadius: 1.5,
                                px: 5,
                                py: 2.5,
                                bgcolor: '#333333',
                                fontSize: 24,
                                fontWeight: 700,
                                color: '#fff',
                                textTransform: 'capitalize',
                                '&:hover': { bgcolor: '#333333' }
                            }}>
                                Call: (412) 388-2633
                            </Button>
                        </Link>
                    </HStack>
                </Container>
            </Box>
        </Box>
    );
}

export default Home;
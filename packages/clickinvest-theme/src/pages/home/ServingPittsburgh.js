import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack } from '../../components/styled'

const ServingPirrsburgh = () => {
    return (
        <Box>
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
    </Box>
    );
}

export default ServingPirrsburgh;
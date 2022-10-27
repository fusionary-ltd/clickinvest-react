import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import Title from '../../components/Title'

const ServingPirrsburgh = ({ state }) => {
    const { theme } = state.option;
    return (
        <Box>
            <Box>
                <Container maxWidth="lg">
                    <Box sx={{ py: 7.5 }}>
                        <Title 
                        title={'Serving Pittsburgh is what we love doing'} 
                        desc={`Our high-quality professional garage door repair team will get your garage door repaired.
                                We remain updated on all modern technology and specific trends and provide various services to the community of Pittsburgh.`} />
                       
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
            <Box sx={{ bgcolor: theme.secondary, py: 19 }} />
        </Box>
    );
}

export default connect(ServingPirrsburgh);
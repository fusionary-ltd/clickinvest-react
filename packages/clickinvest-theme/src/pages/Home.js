import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';

import { BackgroundOverlay, HStack } from '../components/styled'
import door_bg from '../assets/img/bg/garage_door_1.jpg'

const Home = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${door_bg})`,
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
        </Box>
    );
}

export default Home;
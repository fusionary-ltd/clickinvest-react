import * as React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BackgroundOverlay, HStack } from '../../components/styled'

import door_remot_bg from '../../assets/img/bg/garage-door-remote.jpg';

const ExperienceBg = () => {
    return (
        <Box
            style={{ backgroundImage: `url(${door_remot_bg})` }}
            sx={{
                backgroundPosition: 'bottom center  ',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                py: 15
            }}
        >
            <BackgroundOverlay sx={{ bgcolor: 'rgba(0, 0, 0, 0.54)', opacity: 0.5 }} />
            <Container maxWidth="lg">
                <HStack sx={{ position: 'relative' }}>
                    <Box sx={{ p: 1.25, width: { md: '42.456%', sm: '50%' } }}>
                        <Box>
                            <Typography variant='h1' sx={{ color: '#FFFFFF', fontSize: 36, fontWeight: 700, textTransform: 'uppercase', lineHeight: '50px' }}>
                                Marksman Experience
                            </Typography>
                        </Box>
                        <Box sx={{ my: 4.5 }}>
                            <Typography variant='h2' sx={{ color: '#FFFFFF', fontSize: 20, fontWeight: 300, lineHeight: '1.3em' }}>
                                For many years, our garage door repair company has been repairing all types of garage doors, and all of our team members are certified professionals who have undergone extensive training on how to do the job with safety in mind.
                            </Typography>
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
    );
}

export default ExperienceBg;
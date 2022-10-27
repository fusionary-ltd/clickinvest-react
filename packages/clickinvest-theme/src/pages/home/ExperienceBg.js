import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BackgroundOverlay, HStack } from '../../components/styled'

import door_remot_bg from '../../assets/img/bg/garage-door-remote.jpg';

const ExperienceBg = ({ state }) => {
    const { theme, contact } = state.option;

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
                    <Box sx={{ p: 1.25, width: { md: '50%', sm: '60%' } }}>
                        <Box>
                            <Typography variant='h1' sx={{ color: '#FFFFFF', fontSize: '2.2rem', fontWeight: 700, textTransform: 'uppercase', lineHeight: '50px' }}>
                                Marksman Experience
                            </Typography>
                        </Box>
                        <Box sx={{ my: 4.5 }}>
                            <Typography variant='h2' sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 300, lineHeight: '1.3em' }}>
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
                                    bgcolor: theme.warning,
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: '#fff',
                                    textTransform: 'capitalize',
                                    '&:hover': { bgcolor: theme.warning }
                                }}>
                                    {`Call: ${contact.phoneNumber}`}
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </HStack>
            </Container>
        </Box>
    );
}

export default connect(ExperienceBg);
import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BackgroundOverlay, HStack } from '../../components/styled'

const ExperienceBg = ({ state }) => {
    const { theme, contact, home } = state.option;

    return (
        <Box
            style={{ backgroundImage: `url(${home.experience.bgImg})` }}
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
                                {home.experience.adTitle}
                            </Typography>
                        </Box>
                        <Box sx={{ my: 4.5 }}>
                            <Typography variant='h2' sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 300, lineHeight: '1.3em' }}>
                                {home.experience.adDescription}
                            </Typography>
                        </Box>
                        <Box>
                            <Link href={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`} sx={{ textDecoration: 'none' }}>
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
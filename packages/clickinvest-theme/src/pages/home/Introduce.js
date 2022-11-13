import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { BackgroundOverlay, HStack, BackgroundImg } from '../../components/styled'

const Introduce = ({ state }) => {
    const { theme, contact, home } = state.option;
    return (
        <BackgroundImg img={home.hero.img}>
            <BackgroundOverlay />
            <Container maxWidth="lg">
                <HStack sx={{ position: 'relative' }}>
                    <Box sx={{ p: 1.25 }}>
                        <Box>
                            <Typography variant='h1' sx={{ color: '#FFFFFF', fontSize: { md: '3rem', xs: '1.75rem' }, fontWeight: 700, textTransform: 'uppercase', lineHeight: { md: '50px', xs: '30px' } }}>
                                {home.hero.h1}
                            </Typography>
                        </Box>
                        <Box sx={{ my: 4.5 }}>
                            <Typography variant='h2' sx={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 300, lineHeight: '1.3em' }}>
                                {home.hero.h2}
                            </Typography>
                        </Box>
                        <Box>
                            <Link title="" href={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`} sx={{ textDecoration: 'none' }}>
                                <Button title="" sx={{
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
        </BackgroundImg>
    );
}

export default connect(Introduce);
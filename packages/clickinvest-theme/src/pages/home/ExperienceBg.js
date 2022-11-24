import React, { useEffect } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Video, HStack } from '../../components/styled'

const ExperienceBg = ({ state }) => {
    const { theme, contact, home } = state.option;

    return (
        <Box sx={{ lineHeight: 0, position: 'relative', bgcolor: '#F5F5F5' }} >
            <Video autoPlay loop preload="true" id="bg-video">
                <source src={home.experienceBg.source} type="video/mp4" />
            </Video>
            <Container maxWidth="lg" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <HStack sx={{ position: 'relative' }}>
                    <Box sx={{ p: 1.25, width: { md: '50%', sm: '60%' } }}>
                        <Box>
                            <Typography variant='h1' sx={{ color: '#FFFFFF', fontSize: '2.2rem', fontWeight: 700, textTransform: 'uppercase', lineHeight: '50px' }}>
                                {home.experienceBg.title}
                            </Typography>
                        </Box>
                        <Box sx={{ my: 4.5 }}>
                            <Typography variant='h2' sx={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: 300, lineHeight: '1.3em' }}>
                                {home.experienceBg.description}
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
        </Box>
    );
}

export default connect(ExperienceBg);
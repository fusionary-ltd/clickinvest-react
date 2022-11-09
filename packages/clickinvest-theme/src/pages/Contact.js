import React, { useState, useEffect } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Link from "@frontity/components/link";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ContactService from './home/ContactService';
import linePattern from '../assets/img/bg/line-pattern.png'
import { Title, ServiceLink } from '../components/styled';

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = ({ state, libraries, setHPercent }) => {
    const { theme, contact } = state.option;
    const [height, setHeight] = useState(0);

    useEffect(() => {
        var body = document.body, html = document.documentElement;
        const h = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - window.innerHeight;
        setHeight(h);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setHPercent(window.scrollY / height * 100)
        }
        if (height > 0)
            window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [height])
    return (
        <Box sx={{ my: 4 }}>
            <Container maxWidth="lg">
                <Title>Contact Us</Title>
                <Box position='relative'>
                    <Box sx={{ p: { md: 6.25, xs: 3 }, backgroundImage: `url(${linePattern})`, backgroundSize: 430, backgroundRepeatY: 'no-repeat' }}>
                        <Box component='img' src={contact.img} sx={{ width: '100%' }} />
                    </Box>
                    <Box sx={{ position: 'absolute', top: { sm: 360, xs: 160 }, left: '-50px', zIndex: 9 }}>
                        <Typography variant='h2' sx={{ pr: { sm: 8, xs: 5 }, pl: { sm: '50px', xs: 5 }, py: 0, fontSize: { sm: '3em', xs: '2em' }, fontWeight: { sm: 700, xs: 600 }, color: '#fff', bgcolor: theme.primary, lineHeight: 1.5 }}>Contact Us</Typography>
                        <ServiceLink link={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`}>
                            <Button sx={{
                                lineHeight: 1,
                                borderRadius: 1.5,
                                pl: '50px',
                                pr: { sm: 5, xs: 3 },
                                py: { sm: 2.5, xs: 2 },
                                bgcolor: theme.secondary,
                                fontSize: { sm: '1.5rem', xs: '1em' },
                                fontWeight: 700,
                                color: '#fff',
                                borderRadius: 0,
                                textTransform: 'capitalize',
                                '&:hover': { bgcolor: theme.secondary }
                            }}>
                                {`Call: ${contact.phoneNumber}`}
                            </Button>
                        </ServiceLink>
                    </Box>
                </Box>
                <Grid container sx={{ mb: 10 }}>
                    <Grid item sm={4} xs={12} >
                        <Stack sx={{ alignItems: 'center', p: 3 }}>
                            <Link link={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`}>
                                <LocalPhoneIcon sx={{ fontSize: 60, color: theme.primary }} />
                            </Link>
                            <Typography sx={{ fontSize: '1.75em', fontWeight: 500 }}>Phone Number</Typography>
                            <Box sx={{ height: 2, width: 50, bgcolor: theme.primary, my: 2, mx: 'auto' }} />
                            <Typography sx={{ fontSize: '1em', textAlign: 'center', maxWidth: 300 }}>{contact.phoneNumber}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item sm={4} xs={12} >
                        <Stack sx={{ alignItems: 'center', p: 3 }}>
                            <Link link={`mailto:${contact.email}`}>
                                <EmailIcon sx={{ fontSize: 60, color: theme.primary }} />
                            </Link>
                            <Typography sx={{ fontSize: '1.75em', fontWeight: 500 }}>Email Address</Typography>
                            <Box sx={{ height: 2, width: 50, bgcolor: theme.primary, my: 2, mx: 'auto' }} />
                            <Typography sx={{ fontSize: '1em', textAlign: 'center', maxWidth: 300 }}>{contact.email}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item sm={4} xs={12} >
                        <Stack sx={{ alignItems: 'center', p: 3 }}>
                            <LocationOnIcon sx={{ fontSize: 60, color: theme.primary }} />
                            <Typography sx={{ fontSize: '1.75em', fontWeight: 500 }}>Main Office</Typography>
                            <Box sx={{ height: 2, width: 50, bgcolor: theme.primary, my: 2, mx: 'auto' }} />
                            <Typography sx={{ fontSize: '1em', textAlign: 'center', maxWidth: 300 }}>{contact.address}</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <ContactService />
        </Box>
    )
}

export default connect(Contact);
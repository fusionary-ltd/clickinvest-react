import React, { useState } from 'react';
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { HStack, FooterLink, Divider, FooterArticle, ServiceLink } from './styled';

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Footer = ({ state }) => {
    const { theme, contact, footer, social } = state.option;
    const [show, setShow] = useState(false);

    return (
        <>
            <Box sx={{ bgcolor: theme.secondary, pt: { md: 12, xs: 3 } }}>
                <Container maxWidth="lg">
                    <Stack>
                        <HStack sx={{ flexDirection: { md: 'row', xs: 'column' } }}>
                            <Box sx={{ width: { md: '20%', xs: '60%' }, padding: 1.25 }}>
                                <ServiceLink link='/'>
                                    {
                                        theme.whiteLogo || theme.blackLogo ?
                                            <Box component='img' src={theme.whiteLogo ? theme.whiteLogo : theme.blackLogo} sx={{ width: '100%' }} alt='logo' />
                                            : <Typography variant='h2' sx={{ with: 'auto', color: '#FFF', fontSize: 30, fontWeight: 600 }}>{theme.brandName}</Typography>
                                    }
                                </ServiceLink>
                            </Box>
                            <Box sx={{ ml: 1.25 }}>
                                <Typography variant='h5' sx={{ py: 1.25, px: 2.5, color: '#000000', fontSize: '1.3rem', lineHeight: 1, fontWeight: 600, display: 'inline-block', bgcolor: theme.primary }}>
                                    {footer.title}
                                </Typography>
                                <Typography sx={{ mt: .5, color: '#fff', fontSize: '1rem' }}>
                                    {footer.description}
                                </Typography>
                            </Box>
                        </HStack>
                        <Box sx={{ padding: 1.25 }}>
                            <Grid container spacing={2}>
                                <Grid item md={3.5} sm={12} xs={12}>
                                    <Box sx={{ borderColor: theme.primary, borderWidth: 1, borderStyle: 'solid' }}>
                                        <Stack flexDirection='row'>
                                            <Stack sx={{ alignItems: 'center', justifyContent: 'center', mr: 2, padding: 2.5, bgcolor: theme.primary }}>
                                                <LocalPhoneIcon sx={{ fontSize: 60 }} />
                                            </Stack>
                                            <Box sx={{ padding: 1.25, pb: 0 }}>
                                                <Typography sx={{ color: '#CCCCCC', fontSize: '1.1rem', fontWeight: 300 }}>Give Us A Call 24/7</Typography>
                                                <Typography sx={{ color: '#fff', fontSize: '1.1rem', lineHeight: '23px' }}>{contact.phoneNumber}</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item md={4.5} sm={12} xs={12}>
                                    <Box sx={{ borderColor: theme.primary, borderWidth: 1, borderStyle: 'solid' }}>
                                        <Stack flexDirection='row'>
                                            <Stack sx={{ alignItems: 'center', justifyContent: 'center', mr: 2, padding: 2.5, bgcolor: theme.primary }}>
                                                <EmailIcon sx={{ fontSize: 60 }} />
                                            </Stack>
                                            <Box sx={{ padding: 1.25, pb: 0 }}>
                                                <Typography sx={{ color: '#CCCCCC', fontSize: '1.1rem', fontWeight: 300 }}>Email Us</Typography>
                                                <Typography sx={{ color: '#fff', fontSize: '1.1rem', lineHeight: '23px' }}>{contact.email}</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                    <Box sx={{ borderColor: theme.primary, borderWidth: 1, borderStyle: 'solid' }}>
                                        <Stack flexDirection='row'>
                                            <Stack sx={{ alignItems: 'center', justifyContent: 'center', mr: 2, padding: 2.5, bgcolor: theme.primary }}>
                                                <LocationOnIcon sx={{ fontSize: 60 }} />
                                            </Stack>
                                            <Box sx={{ padding: 1.25, pb: 0 }}>
                                                <Typography sx={{ color: '#CCCCCC', fontSize: '1.1rem', fontWeight: 300 }}>Our Address</Typography>
                                                <Typography sx={{ color: '#fff', fontSize: '1.1rem', lineHeight: '23px' }}>{contact.address}</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider sx={{ mb: 2.5, borderTop: `1px solid ${theme.primary}` }} />
                        <Box sx={{ mb: 2.5 }}>
                            <Typography variant='h5' sx={{ mb: 2, py: 1.25, px: 2.5, color: '#000000', fontSize: '1.3rem', lineHeight: 1, fontWeight: 600, display: 'inline-block', bgcolor: theme.primary }}>Service Areas</Typography>
                            <Grid container spacing={2}>
                                {
                                    footer.services.map((item, idx) => (
                                        <Grid key={idx} item md={12 / footer.services.length} xs={6}>
                                            <Box sx={{ py: 1.25 }}>
                                                <FooterLink link={item.link}>{item.name}</FooterLink>
                                            </Box>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                        {
                            (() => {
                                if (footer.section && footer.section.title && footer.section.list && footer.section.list.length) {
                                    return (
                                        <>
                                            <Divider sx={{ mb: 2.5, borderTop: `1px solid ${theme.primary}` }} />
                                            <Box sx={{ mb: 2.5 }}>
                                                <Typography variant='h5' sx={{ mb: 2, py: 1.25, px: 2.5, color: '#000000', fontSize: '1.3rem', lineHeight: 1, fontWeight: 600, display: 'inline-block', bgcolor: theme.primary }}>
                                                    {footer.section.title}
                                                </Typography>
                                                <Grid container spacing={2}>
                                                    {
                                                        footer.section.list.map((item, idx) => (
                                                            <Grid item md={4} sm={6} key={idx}>
                                                                <Box sx={{ borderBottom: '1px solid #FFFFFF', height: '100%' }}>
                                                                    <FooterArticle link={item.url ? item.url : "/"}>{item.title}</FooterArticle>
                                                                </Box>
                                                            </Grid>
                                                        ))
                                                    }
                                                </Grid>
                                            </Box>
                                        </>
                                    )
                                } else return null;
                            })()
                        }
                    </Stack>
                </Container>
                <Box sx={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))', mt: 10, py: 1.25 }}>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item sm={7} xs={12}>
                                <HStack sx={{ height: '100%', alignItems: 'center' }}>
                                    <Typography sx={{ color: '#ECECEC' }}>
                                        © Copyright &nbsp;
                                        <FooterLink link='/' >{footer.title}</FooterLink>
                                        &nbsp; | &nbsp;
                                        <FooterLink link='/' >sitemap</FooterLink>
                                        &nbsp; | &nbsp;
                                        <FooterLink link='/' >Privacy Policy</FooterLink>
                                    </Typography>
                                </HStack>
                            </Grid>
                            <Grid item sm={5} xs={12}>
                                <Stack flexDirection='row' sx={{ justifyContent: { sm: 'flex-end', xs: 'flex-start' }, mt: { xs: 1, md: 0 } }}>
                                    <Link title={contact.phoneNumber} link={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`}>
                                        <IconButton title={contact.phoneNumber} sx={{ mr: .5, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))', borderRadius: 1, '&:hover': { backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))' } }}>
                                            <LocalPhoneIcon sx={{ color: '#fff' }} />
                                        </IconButton>
                                    </Link>
                                    <Link title={contact.email} link={`mailto:${contact.email}`}>
                                        <IconButton title={contact.email} sx={{ mr: .5, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))', borderRadius: 1, '&:hover': { backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))' } }}>
                                            <EmailIcon sx={{ color: '#fff' }} />
                                        </IconButton>
                                    </Link>
                                    {
                                        social && social.facebook &&
                                        <Link title={social.facebook} link={social.facebook}>
                                            <IconButton title={contact.email} sx={{ mr: .5, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))', borderRadius: 1, '&:hover': { backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))' } }}>
                                                <FacebookIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                        </Link>
                                    }
                                    {
                                        social && social.instagram &&
                                        <Link title={social.instagram} link={social.instagram}>
                                            <IconButton title={contact.email} sx={{ mr: .5, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))', borderRadius: 1, '&:hover': { backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))' } }}>
                                                <InstagramIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                        </Link>
                                    }
                                    {
                                        social && social.whatsApp &&
                                        <Link title={social.whatsApp} link={social.whatsApp}>
                                            <IconButton title={contact.email} sx={{ mr: .5, backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))', borderRadius: 1, '&:hover': { backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))' } }}>
                                                <WhatsAppIcon sx={{ color: '#fff' }} />
                                            </IconButton>
                                        </Link>
                                    }
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            {/* <Box sx={{ display: { md: 'none', sm: 'block' }, bgcolor: '#000000bf', width: '100%', position: 'fixed', bottom: 0 }}>
                <HStack sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                    {
                        show &&
                        <Link title={contact.email} link={`mailto:${contact.email}`}>
                            <IconButton title={contact.email} sx={{ padding: 0 }}>
                                <EmailIcon sx={{ color: 'white', fontSize: '3rem' }} />
                            </IconButton>
                        </Link>
                    }
                    <Box>
                        <Stack alignItems='center'>
                            <Box onClick={() => setShow(!show)}>
                                {
                                    show ?
                                        <ExpandMoreIcon sx={{ color: 'white', borderWidth: 1, borderColor: 'white', borderStyle: 'none solid solid solid', width: 60, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }} />
                                        : <ExpandLessIcon sx={{ color: 'white', borderWidth: 1, borderColor: 'white', borderStyle: 'none solid solid solid', width: 60, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }} />
                                }
                            </Box>
                            {
                                show &&
                                <Typography sx={{ color: 'white' }}>Contact Us</Typography>
                            }
                        </Stack>
                    </Box>
                    {
                        show &&
                        <Link title={contact.phoneNumber} link={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`}>
                            <IconButton title={contact.phoneNumber} sx={{ padding: 0, borderRadius: '50%', bgcolor: '#88e519' }}>
                                <LocalPhoneIcon sx={{ color: 'white', fontSize: '3rem' }} />
                            </IconButton>
                        </Link>
                    }
                </HStack>
            </Box> */}
        </>
    );
}

export default connect(Footer);
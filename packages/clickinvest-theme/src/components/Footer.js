import * as React from 'react';
import Link from "@frontity/components/link";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { HStack, FooterLink, Divider, FooterArticle } from './styled';

import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import logo from '../assets/img/marks_logo.png';

export default function Footer() {
    return (
        <>
            <Box sx={{ bgcolor: '#212121', pt: 12, pb: 10 }}>
                <Container maxWidth="lg">
                    <Stack>
                        <HStack>
                            <Box sx={{ width: '17%', padding: 1.25 }}>
                                <Box component='img' src={logo} sx={{ width: '100%' }} />
                            </Box>
                            <Box sx={{ ml: 1.25 }}>
                                <Typography variant='h5' sx={{ py: 1.25, px: 2.5, color: '#000000', fontSize: 21, lineHeight: 1, fontWeight: 600, display: 'inline-block', bgcolor: theme => theme.palette.warning.main }}>Garage Door Repair Pittsburgh Marksman</Typography>
                                <Typography sx={{ mt: .5, color: '#fff', fontSize: 17 }}>Looking for a garage door repair company near you? Give us a call!</Typography>
                            </Box>
                        </HStack>
                        <Box sx={{ padding: 1.25 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={3.5}>
                                    <Box sx={{ borderColor: theme => theme.palette.warning.main, borderWidth: 1, borderStyle: 'solid' }}>
                                        <Stack flexDirection='row'>
                                            <Stack sx={{ alignItems: 'center', justifyContent: 'center', mr: 2, padding: 2.5, bgcolor: theme => theme.palette.warning.main }}>
                                                <LocalPhoneIcon sx={{ fontSize: 60 }} />
                                            </Stack>
                                            <Box sx={{ padding: 1.25, pb: 0 }}>
                                                <Typography sx={{ color: '#CCCCCC', fontSize: 17, fontWeight: 300 }}>Give Us A Call 24/7</Typography>
                                                <Typography sx={{ color: '#fff', fontSize: 18, lineHeight: '23px' }}>(412) 388-2633</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={4.5}>
                                    <Box sx={{ borderColor: theme => theme.palette.warning.main, borderWidth: 1, borderStyle: 'solid' }}>
                                        <Stack flexDirection='row'>
                                            <Stack sx={{ alignItems: 'center', justifyContent: 'center', mr: 2, padding: 2.5, bgcolor: theme => theme.palette.warning.main }}>
                                                <EmailIcon sx={{ fontSize: 60 }} />
                                            </Stack>
                                            <Box sx={{ padding: 1.25, pb: 0 }}>
                                                <Typography sx={{ color: '#CCCCCC', fontSize: 17, fontWeight: 300 }}>Email Us</Typography>
                                                <Typography sx={{ color: '#fff', fontSize: 18, lineHeight: '23px' }}>info@marksmangaragedoors.com</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ borderColor: theme => theme.palette.warning.main, borderWidth: 1, borderStyle: 'solid' }}>
                                        <Stack flexDirection='row'>
                                            <Stack sx={{ alignItems: 'center', justifyContent: 'center', mr: 2, padding: 2.5, bgcolor: theme => theme.palette.warning.main }}>
                                                <LocationOnIcon sx={{ fontSize: 60 }} />
                                            </Stack>
                                            <Box sx={{ padding: 1.25, pb: 0 }}>
                                                <Typography sx={{ color: '#CCCCCC', fontSize: 17, fontWeight: 300 }}>Our Address</Typography>
                                                <Typography sx={{ color: '#fff', fontSize: 18, lineHeight: '23px' }}>100 S Commons #102, Pittsburgh, PA 15212</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider sx={{ mb: 2.5 }} />
                        <Box sx={{ mb: 2.5 }}>
                            <Typography variant='h5' sx={{ mb: 2, py: 1.25, px: 2.5, color: '#000000', fontSize: 21, lineHeight: 1, fontWeight: 600, display: 'inline-block', bgcolor: theme => theme.palette.warning.main }}>Service Areas</Typography>
                            <HStack>
                                <Box sx={{ py: 1.25, width: '16%' }}>
                                    <FooterLink link='/'>Pittsburgh</FooterLink>
                                </Box>
                                <Box sx={{ py: 1.25, width: '16%' }}>
                                    <FooterLink link='/'>Bethel Park</FooterLink>
                                </Box>
                                <Box sx={{ py: 1.25, width: '16%' }}>
                                    <FooterLink link='/'>Cranberry Township</FooterLink>
                                </Box>
                                <Box sx={{ py: 1.25, width: '16%' }}>
                                    <FooterLink link='/'>Hampton Township</FooterLink>
                                </Box>
                                <Box sx={{ py: 1.25, width: '16%' }}>
                                    <FooterLink link='/'>Spring Hills</FooterLink>
                                </Box>
                            </HStack>
                        </Box>
                        <Divider sx={{ mb: 2.5 }} />
                        <Box sx={{ mb: 2.5 }}>
                            <Typography variant='h5' sx={{ mb: 2, py: 1.25, px: 2.5, color: '#000000', fontSize: 21, lineHeight: 1, fontWeight: 600, display: 'inline-block', bgcolor: theme => theme.palette.warning.main }}>
                                Latest Articles
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Box sx={{ borderBottom: '1px solid #FFFFFF', height: '100%' }}>
                                        <FooterArticle link='/'>Garage Door Panel Replacement: Which One Is Right for You?</FooterArticle>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ borderBottom: '1px solid #FFFFFF', height: '100%' }}>
                                        <FooterArticle link='/'>Commercial Garage Door Service in Pittsburgh</FooterArticle>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ borderBottom: '1px solid #FFFFFF', height: '100%' }}>
                                        <FooterArticle link='/'>Garage Door Pull Cord Came Off</FooterArticle>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ borderBottom: '1px solid #FFFFFF', height: '100%' }}>
                                        <FooterArticle link='/'>How Much Does Garage Door Opener Installation Cost?</FooterArticle>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ borderBottom: '1px solid #FFFFFF', height: '100%' }}>
                                        <FooterArticle link='/'>Garage Door Opener Battery Replacement</FooterArticle>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{ borderBottom: '1px solid #FFFFFF', height: '100%' }}>
                                        <FooterArticle link='/'>Annual Garage Door Maintenance</FooterArticle>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box sx={{ bgcolor: '#474747', py: 1.25 }}>
                <Container maxWidth="lg">
                    <HStack justifyContent='space-between'>
                        <Typography sx={{ color: '#ECECEC' }}>
                            © Copyright &nbsp;
                            <FooterLink link='/' >Marksman Garage Doors Pittsburgh</FooterLink>
                            &nbsp; | &nbsp;
                            <FooterLink link='/' >sitemap</FooterLink>
                            &nbsp; | &nbsp;
                            <FooterLink link='/' >Privacy Policy</FooterLink>
                        </Typography>
                        <Stack flexDirection='row'>
                            <Link link='/'>
                                <IconButton sx={{ mr: .5, bgcolor: '#5A5959', borderRadius: 1, '&:hover': { bgcolor: '#5A5959' } }}>
                                    <FacebookIcon sx={{ color: '#fff' }} />
                                </IconButton>
                            </Link>
                            <Link link='/'>
                                <IconButton sx={{ bgcolor: '#5A5959', borderRadius: 1, '&:hover': { bgcolor: '#5A5959' } }}>
                                    <GoogleIcon sx={{ color: '#fff' }} />
                                </IconButton>
                            </Link>
                        </Stack>
                    </HStack>
                </Container>
            </Box>
        </>
    );
}

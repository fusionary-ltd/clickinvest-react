import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, ServiceLink } from '../../components/styled';

import service1 from '../../assets/img/services/service1.jpg';
import service2 from '../../assets/img/services/service2.jpg';

const GarageDoorServices = () => {
    return (
        <Box sx={{ bgcolor: '#EEEEEE', pt: 4, pb: 8 }} >
            <Container maxWidth="lg">
                <Stack alignItems='center' sx={{ pb: 9 }}>
                    <Typography variant='h4' sx={{ fontSize: { md: '2.5rem', xs: '2rem' }, fontWeight: 700, color: '#000', textAlign: 'center', mb: 2.5 }}>
                        Garage Door Services
                    </Typography>
                    <HStack>
                        <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                    </HStack>
                    <Typography variant='h5' sx={{ fontSize: '1.4rem', color: '#000', lineHeight: '31px', textAlign: 'center', mb: 2.5, fontWeight: 300 }}>
                        We provide the best repair services in Pittsburgh. Our warranty, just like our service, knows no bounds. That’s right - ALL of us parts and work is covered. Now THAT is comprehensive.
                    </Typography>
                </Stack>
                {
                    [0, 1, 2, 3].map((item) => (
                        <React.Fragment key={item}>
                            <HStack sx={{ pb: 9 }}>
                                <Grid container>
                                    <Grid item sm={6} xs={12}>
                                        <Stack sx={{ p: 1.25, height: '100%', justifyContent: 'center' }}>
                                            <ServiceLink link='/'>
                                                <Typography variant='h3' sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#000' }}>Garage Door Automatic Opener Repair</Typography>
                                            </ServiceLink>
                                            <Typography>Opening your automatic door manually is a waste of a good luxury. If it’s not working – let us fix it. Simple!</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <Stack sx={{ px: 3.75 }}>
                                            <Box component='img' src={service1} sx={{ p: 1.25, bgcolor: 'white', with: '100%' }} />
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </HStack>
                            <HStack sx={{ pb: 9 }}>
                                <Grid container>
                                    <Grid item sm={6} xs={12}>
                                        <Stack sx={{ px: 3.75 }}>
                                            <Box component='img' src={service2} sx={{ p: 1.25, bgcolor: 'white', with: '100%' }} />
                                        </Stack>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <Stack sx={{ p: 1.25, height: '100%', justifyContent: 'center' }}>
                                            <ServiceLink link='/'>
                                                <Typography variant='h3' sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#000' }}>Garage Door Automatic Opener Repair</Typography>
                                            </ServiceLink>
                                            <Typography>Opening your automatic door manually is a waste of a good luxury. If it’s not working – let us fix it. Simple!</Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </HStack>
                        </React.Fragment>
                    ))
                }
            </Container>
        </Box>
    );
}

export default GarageDoorServices;
import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, ServiceLink } from '../../components/styled';
import door from '../../assets/img/experience/garage-door.jpg';
import Title from '../../components/Title';

const CallFreeEstimate = () => {
    return (
        <Box sx={{ pt: 7, bgcolor: '#fffff' }} >
            <Container maxWidth="lg">
                <Title
                    title={'Years of Experience'}
                    desc={`A professional team like ours needs to carry out a garage door’s repair, especially if it is an overhead type. When you contact us, we make sure that the garage door is properly fixed so that you, your family, or your employees
                    are not at risk.`}
                    isLeft={true}
                />
            </Container>
            <Box sx={{ bgcolor: '#F5F5F5', mt: 20 }} >
                <Container maxWidth="lg" sx={{ position: 'relative' }}>
                    <Stack>
                        <HStack sx={{ pb: 2, mt: -18, mb: 5, bgcolor: '#FFFFFF' }}>
                            <Grid container>
                                {
                                    [1, 2, 3].map((idx) => (
                                        <Grid item key={idx} sm={4} xs={12}>
                                            <Stack sx={{ p: 1.25 }}>
                                                <Stack sx={{ px: 2 }}>
                                                    <Box component='img' src={door} sx={{ p: 1.25, bgcolor: 'white', with: '100%' }} />
                                                </Stack>
                                                <Stack sx={{ p: 2.25 }}>
                                                    <ServiceLink link='/'>
                                                        <Typography variant='h3' sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#000' }}>Garage Door Automatic Opener Repair</Typography>
                                                    </ServiceLink>
                                                    <Typography>Opening your automatic door manually is a waste of a good luxury. If it’s not working – let us fix it. Simple!</Typography>
                                                </Stack>
                                            </Stack>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </HStack>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

export default CallFreeEstimate;
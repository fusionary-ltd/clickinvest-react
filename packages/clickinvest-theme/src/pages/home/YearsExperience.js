import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, ServiceLink } from '../../components/styled'
import door from '../../assets/img/experience/garage-door.jpg'

const CallFreeEstimate = () => {
    return (
        <Box sx={{ pt: 4, pb: 8 }} >
        <Box sx={{ bgcolor: '#fffff',pb:30}} >
            <Container maxWidth="lg">
                <Stack >
                    <Stack alignItems='left' sx={{ pb: 0 }}>
                        <Typography variant='h4' sx={{ fontSize: 36, fontWeight: 700, color: '#000', textAlign: 'left', mb: 2.5 }}>
                            Years of Experience
                        </Typography>
                        <HStack>
                            <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                        </HStack>
                    </Stack>
                    <Typography>A professional team like ours needs to carry out a garage door’s repair, especially if it is an overhead type. When you contact us, we make sure that the garage door is properly fixed so that you, your family, or your employees
                    are not at risk.</Typography>
                </Stack>
            </Container>
        </Box>
        <Box sx={{ bgcolor: '#EEEEEE'}} >
            <Container maxWidth="lg">
                <Stack sx={{ mt:10,bgcolor:'#FFFFFF'}}>
                    <HStack sx={{ pb: 9 }}>
                        <Stack sx={{ width: '33.33%', p: 1.25 }}>
                            <Stack sx={{  px: 3.75 }}>
                                <Box component='img' src={door} sx={{ p: 1.25, bgcolor: 'white', with: '100%' }} />
                            </Stack>
                            <Stack sx={{ p: 2.25 }}>
                                <ServiceLink link='/'>
                                    <Typography variant='h3' sx={{ fontSize: 27, fontWeight: 700, color: '#000' }}>Garage Door Automatic Opener Repair</Typography>
                                </ServiceLink>
                                <Typography>Opening your automatic door manually is a waste of a good luxury. If it’s not working – let us fix it. Simple!</Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{ width: '33.33%', p: 1.25 }}>
                        <Stack sx={{  px: 3.75 }}>
                                <Box component='img' src={door} sx={{ p: 1.25, bgcolor: 'white', with: '100%' }} />
                            </Stack>
                            <Stack sx={{ p: 2.25 }}>
                                <ServiceLink link='/'>
                                    <Typography variant='h3' sx={{ fontSize: 27, fontWeight: 700, color: '#000' }}>Garage Door Automatic Opener Repair</Typography>
                                </ServiceLink>
                                <Typography>Opening your automatic door manually is a waste of a good luxury. If it’s not working – let us fix it. Simple!</Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{ width: '33.33%', p: 1.25, pb:6 }}>

                        </Stack>
                    </HStack>
                </Stack>
            </Container>
        </Box>
        </Box>
    );
}

export default CallFreeEstimate;
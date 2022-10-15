import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {  HStack} from '../../components/styled';

import black_bg from '../../assets/img/bg/black-bg.jpg';
import service3 from '../../assets/img/services/service3.jpg';

const Marksmanteam = () => {
    return (
        <Box sx={{ py: 10 }} style={{ backgroundImage: `url(${black_bg})` }}>
            <Container maxWidth="lg">
                <HStack alignItems='flex-start'>
                    <Stack sx={{ width: '50%', pr: 4 }}>
                        <Typography
                            variant='h1'
                            sx={{
                                color: '#000000',
                                fontSize: 36,
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                position: 'relative',
                                mb: 2.5,
                                py: 2.5,
                                zIndex: 1,
                                '&:before': {
                                    content: `""`,
                                    position: 'absolute',
                                    background: '#F7941D',
                                    width: '110%',
                                    height: '100%',
                                    zIndex: -1,
                                    right: 0,
                                    top: 0
                                }
                            }}>THE MARKSMAN TEAM</Typography>
                        <Box>
                            <Typography sx={{ color: '#fff', mb: 1 }}>Our team of experienced and qualified fitters are on hand to help. Providing a high quality service on a variety of garage door brands, styles and configurations, we offer a personal service that will leave you and your wallet happy.</Typography>
                            <Typography sx={{ color: '#fff', mb: 1 }}>Does your garage door need fixing? Never attempt to repair overhead doors on your own, especially if you have no experience. It can be quite a dangerous job because you can get seriously injured if you don’t do it right. This is why it’s important that you contact one of our well-trained and experienced overhead doors repair professionals today so we can assess the problem and give you a quotation.</Typography>
                            <Typography sx={{ color: '#fff', mb: 1 }}>Give us a call today.</Typography>
                        </Box>
                    </Stack>
                    <Stack sx={{ width: '50%' }}>
                        <Box component='img' src={service3} sx={{ p: 1.25 }} />
                    </Stack>
                </HStack>
            </Container>
        </Box>
    );
}

export default Marksmanteam;
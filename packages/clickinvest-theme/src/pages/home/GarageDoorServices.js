import React, { useState, useEffect } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, ServiceLink } from '../../components/styled';

// import service1 from '../../assets/img/services/service1.jpg';
// import service2 from '../../assets/img/services/service2.jpg';

const GarageDoorServices = ({ state }) => {
    const [blog, setBlog] = useState({});
    useEffect(() => {
        setBlog(state.source.post)
    }, []);

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
                    Object.keys(blog).map((id, idx) => {
                        return (
                            <Stack sx={{ p: 1.25, height: '100%', justifyContent: 'center' }}>
                                <ServiceLink link='/'>
                                    <Typography variant='h3' sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#000' }}>{blog[id].title.rendered}</Typography>
                                </ServiceLink>
                                <Typography dangerouslySetInnerHTML={{ __html: blog[id].content.rendered }} />
                            </Stack>
                        )
                        // if (idx % 2 === 0) {
                        //     return (
                        //         <HStack sx={{ pb: 9 }} key={idx}>
                        //             <Grid container>
                        //                 <Grid item sm={6} xs={12}>
                        //                     <Stack sx={{ p: 1.25, height: '100%', justifyContent: 'center' }}>
                        //                         <ServiceLink link='/'>
                        //                             <Typography variant='h3' sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#000' }}>{blog[id].title.rendered}</Typography>
                        //                         </ServiceLink>
                        //                         <Typography dangerouslySetInnerHTML={{ __html: blog[id].content.rendered }} />
                        //                     </Stack>
                        //                 </Grid>
                        //                 <Grid item sm={6} xs={12}>
                        //                     <Stack sx={{ px: 3.75 }}>
                        //                         <Box component='img' src={service1} sx={{ p: 1.25, bgcolor: 'white', with: '100%' }} />
                        //                     </Stack>
                        //                 </Grid>
                        //             </Grid>
                        //         </HStack>
                        //     )
                        // } else {
                        //     return (
                        //         <HStack sx={{ pb: 9 }} key={idx}>
                        //             <Grid container>
                        //                 <Grid item sm={6} xs={12}>
                        //                     <Stack sx={{ px: 3.75 }}>
                        //                         <Box component='img' src={service2} sx={{ p: 1.25, bgcolor: 'white', with: '100%' }} />
                        //                     </Stack>
                        //                 </Grid>
                        //                 <Grid item sm={6} xs={12}>
                        //                     <Stack sx={{ p: 1.25, height: '100%', justifyContent: 'center' }}>
                        //                         <ServiceLink link='/'>
                        //                             <Typography variant='h3' sx={{ fontSize: '1.6rem', fontWeight: 700, color: '#000' }}>{blog[id].title.rendered}</Typography>
                        //                         </ServiceLink>
                        //                         <Typography dangerouslySetInnerHTML={{ __html: blog[id].content.rendered }} />
                        //                     </Stack>
                        //                 </Grid>
                        //             </Grid>
                        //         </HStack>
                        //     )
                        // }
                    })
                }
            </Container>
        </Box>
    );
}

export default connect(GarageDoorServices);
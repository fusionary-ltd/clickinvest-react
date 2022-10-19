import React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, ServiceLink } from '../../components/styled'
import door from '../../assets/img/experience/garage-door.jpg'

const Blog = ({ state }) => {
    return (
        <Box sx={{ py: 7, bgcolor: '#fffff' }} >
            <Container maxWidth="lg">
                <Stack sx={{ mb: 2 }}>
                    <Stack alignItems='left' sx={{ pb: 0 }}>
                        <Typography variant='h4' sx={{ fontSize: { md: '2.5rem', xs: '2rem' }, fontWeight: 700, color: '#000', textAlign: 'left', mb: 2.5 }}>
                            Our Blog
                        </Typography>
                        <HStack>
                            <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                        </HStack>
                    </Stack>
                    <Typography sx={{ fontSize: { md: '1.4rem', xs: '1rem' } }}>Articles, Tips, Trends And Our Expert Recommendations.</Typography>
                </Stack>
                <Box>
                    <Grid container spacing={4}>
                        {
                            [1, 2, 3].map((idx) => (
                                <Grid md={4} sm={6} item key={idx}>
                                    <Box sx={{ borderBottom: '1px solid #ebebeb' }}>
                                        <Stack>
                                            <Box component='img' src={door} sx={{ with: '100%' }} />
                                        </Stack>
                                        <Stack>
                                            <ServiceLink link='/'>
                                                <Typography variant='h3' sx={{ fontSize: '1.6rem', fontWeight: 700, my: 2, color: '#000' }}>
                                                    Garage Door Panel Replacement: Which One Is Right for You?
                                                </Typography>
                                            </ServiceLink>
                                            <Typography sx={{ fontSize: '1rem', color: '#777', pb: 2 }}>
                                                If your garage door panel is damaged, you may be wondering if it’s worth repairing or if you should just replace the entire garage door.
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default connect(Blog);
import React, { useEffect, useState } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RepairInput, RepairButton } from '../../components/styled';
import config from '../../config/index';

import RightBar from './RightBar';
const Post = ({ state }) => {
    const [blog, setBlog] = useState({});
    useEffect(() => {
        if (state.source.post) {
            setBlog(state.source.post[Object.keys(state.source.post)[0]]);
        }
    }, []);

    return (
        <Box sx={{ my: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <Typography variant='h2' sx={{ fontSize: '2em', fontWeight: 700, mb: 3 }}>Garage Door Repair Service</Typography>
                        <Typography sx={{ fontSize: '1.2em', fontWeight: 600 }}>Needs a professional technician?</Typography>
                        <Box sx={{ bgcolor: "#F7941D", p: 4 }}>
                            <Typography>For garage door services in Pittsburgh and its surroundings, Call us:</Typography>
                            <Typography sx={{ fontSize: '1.5em', fontWeight: 600, color: '#fff', my: 2 }}>{config.phone}</Typography>
                            <Typography sx={{ mb: 3 }}>Or, send a message</Typography>

                            <Grid container spacing={2}>
                                <Grid item md={4}>
                                    <Stack>
                                        <RepairInput placeholder="Full Name" name="Name" variant="outlined" />
                                        <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={4}>
                                    <Stack>
                                        <RepairInput placeholder="Phone" name="Phone" variant="outlined" />
                                        <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={4}>
                                    <Stack>
                                        <RepairInput placeholder="Email" name="Email" variant="outlined" />
                                        <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item md={8}>
                                    <select style={{ width: '100%', height: '100%', border: 0, fontSize: '1em' }}>
                                        <option>Not sure, my garage door is stuck</option>
                                        <option>Garage Door Replacement</option>
                                        <option>Garage Spring Replacement</option>
                                        <option>Garage Cable Repair</option>
                                        <option>Garage Opener Repair</option>
                                    </select>
                                </Grid>
                                <Grid item md={4}>
                                    <RepairButton>SEND</RepairButton>
                                </Grid>
                            </Grid>
                        </Box>
                        {
                            blog.content ?
                                <Box dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
                                : null
                        }
                    </Grid>
                    <Grid item md={4}>
                        <RightBar />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default connect(Post);
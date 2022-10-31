import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import black_bg from '../../assets/img/bg/black-bg.jpg';

const AboutTeam = ({ state }) => {
    const { theme, home } = state.option;

    return (
        <Box sx={{ py: 10 }} style={{ backgroundImage: `url(${black_bg})` }}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item sm={6} xs={12}>
                        <Stack sx={{ pr: 4 }}>
                            <Typography
                                variant='h1'
                                sx={{
                                    color: '#000000',
                                    fontSize: '2.5rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    mb: 2.5,
                                    py: 2.5,
                                    zIndex: 1,
                                    '&:before': {
                                        content: `""`,
                                        position: 'absolute',
                                        background: theme.primary,
                                        width: '110%',
                                        height: '100%',
                                        zIndex: -1,
                                        right: 0,
                                        top: 0
                                    }
                                }}>{home.aboutTeam.title}</Typography>
                            <Box>
                                <Typography sx={{ color: '#fff', mb: 1 }}>{home.aboutTeam.description}</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Stack>
                            <Box component='img' src={home.aboutTeam.img} sx={{ p: 1.25 }} />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default connect(AboutTeam);
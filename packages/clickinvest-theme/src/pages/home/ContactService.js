import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, RepairInput, RepairButton } from '../../components/styled';

const ContactService = ({ title, sub }) => {
    return (
        <Box
            sx={{
                bgcolor: theme => theme.palette.warning.main,
                py: 6.5
            }}
        >
            <Container maxWidth="lg">
                <Stack>
                    <Typography variant='h1' sx={{ mb: 2.5, fontSize: 36, fontWeight: 700 }}>{title}</Typography>
                    <Typography sx={{ mb: 2.5, fontSize: 17 }}>{sub}</Typography>
                    <Grid container>
                        <Grid item sm={12 / 5} xs={12}>
                            <Stack>
                                <RepairInput placeholder="Full Name" name="full-name" variant="outlined" />
                                <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                            </Stack>
                        </Grid>
                        <Grid item sm={12 / 5} xs={12}>
                            <Stack>
                                <RepairInput placeholder="Phone Number" name="tel-323" type="tel" variant="outlined" />
                                <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                            </Stack>
                        </Grid>
                        <Grid item sm={12 / 5} xs={12}>
                            <Stack>
                                <RepairInput placeholder="Email Address" name="your-email" type="email" variant="outlined" />
                                <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                            </Stack>
                        </Grid>
                        <Grid item sm={12 / 5} xs={12}>
                            <Stack>
                                <RepairInput placeholder="City / Location" name="city-location" variant="outlined" />
                                <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                            </Stack>
                        </Grid>
                        <Grid item sm={12 / 5} xs={12}>
                            <RepairButton sx={{ width: '100%' }}>Submit</RepairButton>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}

export default ContactService;
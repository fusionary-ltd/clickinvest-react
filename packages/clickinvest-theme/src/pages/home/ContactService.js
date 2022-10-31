import React, { useState } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { RepairInput, RepairButton } from '../../components/styled';

const ContactService = ({ state }) => {
    const { theme, home } = state.option;

    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        location: ''
    });
    const [error, setError] = useState({});

    const handleValue = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const sendRequest = () => {
        let temp = error;
        if (values.name) {
            temp = { ...temp, name: false };
        } else {
            temp = { ...temp, name: true };
        }

        if (values.phone) {
            var phoneno = /^\d{10}$/;
            if (values.phone.match(phoneno)) {
                temp = { ...temp, phone: false };
            } else {
                temp = { ...temp, phone: true };
            }
        } else {
            temp = { ...temp, phone: true };
        }

        if (values.email) {
            let flag = String(values.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (flag && flag.length) {
                temp = { ...temp, email: false };
            } else {
                temp = { ...temp, email: true };
            }
        } else {
            temp = { ...temp, email: true };
        }

        if (values.location) {
            temp = { ...temp, location: false };
        } else {
            temp = { ...temp, location: true };
        }
        setError(temp);
    }

    return (
        <Box
            sx={{
                bgcolor: theme.primary,
                py: 6.5
            }}
        >
            <Container maxWidth="lg">
                <Stack>
                    <Typography variant='h3' sx={{ mb: 2.5, fontSize: { md: '2.4rem', xs: '1.5rem' }, fontWeight: 700 }}>{home.contact.title}</Typography>
                    <Typography sx={{ mb: 2.5, fontSize: '1rem' }}>{home.contact.description}</Typography>
                    <Grid container>
                        <Grid item sm={12 / 5} xs={12}>
                            <Stack>
                                <RepairInput placeholder="Full Name" name="full-name" variant="outlined" onChange={handleValue('name')} />
                                {error.name && <Typography sx={{ color: theme.warning }}>Please enter the correct value.</Typography>}
                            </Stack>
                        </Grid>
                        <Grid item sm={12 / 5} xs={12}>
                            <Stack>
                                <RepairInput placeholder="Phone Number" name="tel-323" type="tel" variant="outlined" onChange={handleValue('phone')} />
                                {error.phone && <Typography sx={{ color: theme.warning }}>Please enter the correct value.</Typography>}
                            </Stack>
                        </Grid>
                        <Grid item sm={12 / 5} xs={12}>
                            <Stack>
                                <RepairInput placeholder="Email Address" name="your-email" type="email" variant="outlined" onChange={handleValue('email')} />
                                {error.email && <Typography sx={{ color: theme.warning }}>Please enter the correct value.</Typography>}
                            </Stack>
                        </Grid>
                        <Grid item sm={12 / 5} xs={12}>
                            <Stack>
                                <RepairInput placeholder="City / Location" name="city-location" variant="outlined" onChange={handleValue('location')} />
                                {error.location && <Typography sx={{ color: theme.warning }}>Please enter the correct value.</Typography>}
                            </Stack>
                        </Grid>
                        <Grid item sm={12 / 5} xs={12}>
                            <RepairButton sx={{ width: '100%', bgcolor: theme.secondary, '&:hover': { bgcolor: theme.secondary } }} onClick={() => sendRequest()}>Submit</RepairButton>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    );
}

export default connect(ContactService);
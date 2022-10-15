import * as React from 'react';
import ReactStars from 'react-stars';

import Box from '@mui/material/Box';
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
                    <HStack sx={{ alignItems: 'flex-start !important' }}>
                        <Stack>
                            <RepairInput placeholder="Full Name" name="full-name" variant="outlined" />
                            <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                        </Stack>
                        <Stack>
                            <RepairInput placeholder="Phone Number" name="tel-323" type="tel" variant="outlined" />
                            <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                        </Stack>
                        <Stack>
                            <RepairInput placeholder="Email Address" name="your-email" type="email" variant="outlined" />
                            <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                        </Stack>
                        <Stack>
                            <RepairInput placeholder="City / Location" name="city-location" variant="outlined" />
                            <Typography sx={{ color: 'red' }}>The field is required.</Typography>
                        </Stack>
                        <RepairButton>Submit</RepairButton>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    );
}

export default ContactService;
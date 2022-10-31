import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Title from '../../components/Title';

const Supporting = ({ state }) => {
    const { home } = state.option;
    return (
        <Box sx={{ py: 7, bgcolor: '#fffff' }} >
            <Container maxWidth="lg">
                <Stack sx={{ mb: 2 }}>
                    <Title title={home.long.title} desc={``} isLeft={true} />
                    <Typography sx={{ mb: 1 }}>
                        {home.long.description}
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}

export default connect(Supporting);
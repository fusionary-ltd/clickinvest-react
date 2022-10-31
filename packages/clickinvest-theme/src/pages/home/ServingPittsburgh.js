import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Title from '../../components/Title';
import Slider from '../../components/Slider';

const ServingPirrsburgh = ({ state }) => {
    const { theme, home } = state.option;

    return (
        <Box>
            <Box>
                <Container maxWidth="lg">
                    <Box sx={{ py: 7.5 }}>
                        <Title
                            title={home.slider.title}
                            desc={home.slider.description} />

                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Slider />
                    </Box>
                </Container>
            </Box>
            <Box sx={{ bgcolor: theme.secondary, py: '100px', mt: '-100px' }} />
        </Box>
    );
}

export default connect(ServingPirrsburgh);
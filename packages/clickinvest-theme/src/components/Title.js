import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { HStack } from './styled'

const Title = ({ state, title, desc, isLeft }) => {
    const { theme } = state.option;

    return (
        <Stack alignItems={isLeft ? 'flex-start' : 'center'} sx={{ p: 1.25 }}>
            <Typography variant='h4' sx={{ fontSize: { md: '2.5rem', xs: '2rem' }, fontWeight: 700, color: '#000', textAlign: 'center', mb: 2.5 }}>
                {title}
            </Typography>
            <HStack>
                <Box sx={{ mb: 2.5, width: 50, borderColor: theme.primary, borderStyle: 'solid none none', borderWidth: 4 }} />
            </HStack>
            <Typography variant='h5' sx={{ fontSize: '1.4rem', color: '#000', lineHeight: '31px', textAlign: 'center', mb: 2.5, fontWeight: 300 }}>
                {desc}
            </Typography>
        </Stack>
    )
}

export default connect(Title);
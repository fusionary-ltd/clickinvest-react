import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack } from '../../components/styled'

const CallFreeEstimate = () => {
    return (
        <Box sx={{ py: 4, bgcolor: '#F7941D' }} >
            <Container maxWidth="lg">
                <HStack justifyContent='space-between' sx={{ flexDirection: { md: 'row', xs: 'column' } }}>
                    <Typography sx={{
                        color: '#000000',
                        fontSize: { sm: '2.5rem', xs: '1.8rem' },
                        fontWeight: 700
                    }}>Call Us For a FREE Estimate</Typography>
                    <Link href="tel:4123882633" sx={{ textDecoration: 'none' }}>
                        <Button sx={{
                            lineHeight: 1,
                            borderRadius: 1.5,
                            px: 5,
                            py: 2.5,
                            bgcolor: '#333333',
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: '#fff',
                            textTransform: 'capitalize',
                            '&:hover': { bgcolor: '#333333' }
                        }}>
                            Call: (412) 388-2633
                        </Button>
                    </Link>
                </HStack>
            </Container>
        </Box>
    );
}

export default CallFreeEstimate;
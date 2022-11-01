import * as React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack } from '../../components/styled'

const CallFreeEstimate = ({ state }) => {
    const { theme, contact } = state.option;

    return (
        <Box sx={{ py: 4, bgcolor: theme.primary }} >
            <Container maxWidth="lg">
                <HStack justifyContent='space-between' sx={{ flexDirection: { md: 'row', xs: 'column' } }}>
                    <Typography sx={{
                        color: '#000000',
                        fontSize: { sm: '2.5rem', xs: '1.8rem' },
                        fontWeight: 700
                    }}>Call Us For a FREE Estimate</Typography>
                    <Link href={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`} sx={{ textDecoration: 'none' }}>
                        <Button sx={{
                            lineHeight: 1,
                            borderRadius: 1.5,
                            px: 5,
                            py: 2.5,
                            bgcolor: theme.secondary,
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: '#fff',
                            textTransform: 'capitalize',
                            '&:hover': { bgcolor: theme.secondary }
                        }}>
                            {`Call: ${contact.phoneNumber}`}
                        </Button>
                    </Link>
                </HStack>
            </Container>
        </Box>
    );
}

export default connect(CallFreeEstimate);
import React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ContactService from '../home/ContactService';
import { AboutUsContent } from '../../components/styled';

const PostPage = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;
    const { theme, contact } = state.option;
    return (
        <Box sx={{ my: 4 }}>
            <Container maxWidth="lg">
                {
                    data.isReady ?
                        <Box>
                            <AboutUsContent>
                                <Box sx={{ position: 'absolute', top: { sm: 360, xs: 160 }, left: '-50px', zIndex: 9 }}>
                                    <Typography variant='h2' sx={{ pr: { sm: 8, xs: 5 }, pl: { sm: '50px', xs: 5 }, py: 0, fontSize: { sm: '3em', xs: '2em' }, fontWeight: { sm: 700, xs: 600 }, color: '#fff', bgcolor: theme.primary, lineHeight: 1.5 }}>Aboout Us</Typography>
                                    <Link href={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`} sx={{ textDecoration: 'none' }}>
                                        <Button sx={{
                                            lineHeight: 1,
                                            borderRadius: 1.5,
                                            pl: '50px',
                                            pr: { sm: 5, xs: 3 },
                                            py: { sm: 2.5, xs: 2 },
                                            bgcolor: theme.secondary,
                                            fontSize: { sm: '1.5rem', xs: '1em' },
                                            fontWeight: 700,
                                            color: '#fff',
                                            borderRadius: 0,
                                            textTransform: 'capitalize',
                                            '&:hover': { bgcolor: theme.secondary }
                                        }}>
                                            {`Call: ${contact.phoneNumber}`}
                                        </Button>
                                    </Link>
                                </Box>
                                <Html2React html={post.content.rendered} />
                            </AboutUsContent>
                        </Box> : null
                }
            </Container>
            <ContactService />
        </Box>
    )
}

export default connect(PostPage);
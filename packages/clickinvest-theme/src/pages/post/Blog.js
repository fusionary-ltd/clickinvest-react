import React, { useState, useEffect } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, PrevNextNav } from '../../components/styled';
import BlogItem from '../../components/BlogItem';

const Blog = () => {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getData = (p, setData) => {
        setLoading(true);
        fetch(`${state.source.url}/wp-json/wp/v2/posts?per_page=10&page=${p}&_embed=true`).then(response => {
            setTotal(response.headers.get('x-wp-totalpages'));
            if (response.ok) {
                return response.json();
            }
            throw response;
        }).then(data => {
            setData(data);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setData([]);
            setLoading(false);
        })
    }

    const handleData = (flag) => {
        if (flag) {
            getData(page + 1, setData);
            setPage(page + 1);
        } else {
            getData(page - 1, setData);
            setPage(page - 1);
        }
    }

    useEffect(() => {
        getData(1, setData);
    }, [])

    return (
        <Box sx={{ bgcolor: '#EEEEEE', pt: 4, pb: 8 }} >
            <Container maxWidth="lg">
                <Stack alignItems='center' sx={{ pb: 9 }}>
                    <Typography variant='h4' sx={{ fontSize: { md: '2.5rem', xs: '2rem' }, fontWeight: 700, color: '#000', textAlign: 'center', mb: 2.5 }}>
                        Blog
                    </Typography>
                    <HStack>
                        <Box sx={{ mb: 2.5, width: 50, borderColor: theme => theme.palette.warning.main, borderStyle: 'solid none none', borderWidth: 4 }} />
                    </HStack>
                </Stack>

                {
                    data.length && !loading ? data.map((item, idx) => {
                        return <BlogItem key={idx} item={item} order={idx} />;
                    }) :
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <Box key={i}>
                                {
                                    i % 2 === 0 ?

                                        <HStack sx={{ width: '100%', justifyContent: 'space-between', mb: 4 }}>
                                            <Stack sx={{ width: '50%' }}>
                                                <Skeleton animation='wave' height={40} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={14} width={200} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 2 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                            </Stack>
                                            <Box sx={{ width: { md: 'calc(50% - 30px)', sm: '100%' }, ml: { md: '30px', sm: 0 } }}>
                                                <Skeleton animation='wave' height={300} sx={{ borderRadius: 0, transform: 'scale(1, 1)' }} />
                                            </Box>
                                        </HStack>
                                        :

                                        <HStack sx={{ width: '100%', justifyContent: 'space-between', mb: 4 }}>
                                            <Box sx={{ width: { md: 'calc(50% - 30px)', sm: '100%' }, mr: { md: '30px', sm: 0 } }}>
                                                <Skeleton animation='wave' height={300} sx={{ borderRadius: 0, transform: 'scale(1, 1)' }} />
                                            </Box>
                                            <Stack sx={{ width: '50%' }}>
                                                <Skeleton animation='wave' height={40} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={14} width={200} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 2 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                                <Skeleton animation='wave' height={18} sx={{ borderRadius: 0, transform: 'scale(1, 1)', mb: 1 }} />
                                            </Stack>
                                        </HStack>

                                }
                            </Box>
                        ))
                }

                <PrevNextNav>
                    {page > 1 ?
                        <button title="Prev"
                            onClick={() => {
                                handleData(false)
                            }}
                        >
                            &#171; Prev
                        </button> : null
                    }
                    {page < total ?
                        <button title="Next"
                            onClick={() => {
                                handleData(true)
                            }}
                        >
                            Next &#187;
                        </button> : null
                    }
                </PrevNextNav>
            </Container>
        </Box >
    );
}

export default connect(Blog);
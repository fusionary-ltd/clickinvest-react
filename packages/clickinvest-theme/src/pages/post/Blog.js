import React, { useState, useEffect } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, PrevNextNav } from '../../components/styled';
import BlogItem from '../../components/BlogItem';

const Blog = ({ state, actions }) => {
    const [page, setPage] = useState(1);
    const [next, setNext] = useState([]);
    const [data, setData] = useState([]);
    const [previous, setPrevious] = useState([]);

    const getData = (p, setData) => {
        fetch(`https://sandbox.clickinvest.io/wp-json/wp/v2/posts?per_page=10&page=${p}&_embed=true`).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        }).then(data => {
            console.log(data)
            setData(data);
        }).catch(error => {
            console.log(error);
            setData([]);
        })
    }

    const handleData = (flag) => {
        if (flag) {
            setPrevious(data);
            setData(next);
            getData(page + 2, setNext);
            setPage(page + 1);
        } else {
            getData(page - 2, setPrevious);
            setData(previous);
            setNext(data);
            setPage(page - 1);
        }
    }

    useEffect(() => {
        getData(1, setData);
        getData(2, setNext);
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
                    data.length ? data.map((item, idx) => {
                        // const item = state.source[type][id];
                        console.log(state.source.post)
                        // console.log(item)
                        return <BlogItem key={item.id} item={item} order={idx} />;
                    }) : null
                }

                <PrevNextNav>
                    {previous.length ?
                        <button
                            onClick={() => {
                                handleData(false)
                            }}
                        >
                            &#171; Prev
                        </button> : null
                    }
                    {next.length ?
                        <button
                            onClick={() => {
                                handleData(true)
                            }}
                        >
                            Next &#187;
                        </button> : null
                    }
                </PrevNextNav>
            </Container>
        </Box>
    );
}

export default connect(Blog);
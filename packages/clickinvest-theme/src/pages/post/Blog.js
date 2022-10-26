import React from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { HStack, PrevNextNav } from '../../components/styled';
import PostItem from '../../components/PostItem';

const GarageDoorServices = ({ state, actions }) => {
    const [url, setUrl] = useState('/');

    const data = useMemo(() => {
        return state.source.get(url);
    }, [url])

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

                {data.items.map(({ type, id }, idx) => {
                    const item = state.source[type][id];
                    return <PostItem key={item.id} item={item} order={idx} />;
                })}

                <PrevNextNav>
                    {data.previous && (
                        <button
                            onClick={() => {
                                setUrl(data.previous)
                            }}
                        >
                            &#171; Prev
                        </button>
                    )}
                    {data.next && (
                        <button
                            onClick={() => {
                                setUrl(data.next)
                            }}
                        >
                            Next &#187;
                        </button>
                    )}
                </PrevNextNav>
            </Container>
        </Box>
    );
}

export default connect(GarageDoorServices);
import { connect } from "frontity";
import PostImage from "./PostImage";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ServiceLink, Title, AuthorName, PublishDate, Excerpt } from './styled';

const PostItem = ({ state, libraries, item, order }) => {
    const isTablet = useMediaQuery('(max-width:768px)');
    const author = state.source.author[item.author];
    const date = new Date(item.date);
    const Html2React = libraries.html2react.Component;

    if (order % 2 === 0 || isTablet) {
        return (
            <Stack sx={{ p: 1.25, height: '100%', justifyContent: 'center', mb: 4 }}>
                <Stack sx={{ flexDirection: { md: 'row', sm: 'comlumn' }, alignItems: 'center' }} justifyContent='space-between'>
                    <Box sx={{ width: { md: state.theme.featured.showOnList && state.source.attachment[item.featured_media] ? '50%' : '100%', sm: '100%' } }}>
                        <ServiceLink link={item.link}>
                            <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                        </ServiceLink>
                        <div>
                            {author && (
                                <ServiceLink link={author.link}>
                                    <AuthorName>
                                        By <b>{author.name}</b>
                                    </AuthorName>
                                </ServiceLink>
                            )}
                            <PublishDate>
                                {" "}
                                on <b>{date.toDateString()}</b>
                            </PublishDate>
                        </div>
                        {item.excerpt && (
                            <Excerpt >
                                <Html2React html={item.excerpt.rendered} />
                            </Excerpt>
                        )}
                    </Box>

                    {state.theme.featured.showOnList && state.source.attachment[item.featured_media] && (
                        <Box sx={{ width: { md: 'calc(50% - 30px)', sm: '100%' }, ml: { md: '30px', sm: 0 } }}>
                            <Box sx={{ p: .5, bgcolor: '#fff' }}>
                                <PostImage id={item.featured_media} />
                            </Box>
                        </Box>
                    )}
                </Stack>
            </Stack>)
    } else {
        return (
            <Stack sx={{ p: 1.25, height: '100%', justifyContent: 'center', mb: 4 }}>
                <Stack sx={{ flexDirection: { md: 'row', sm: 'comlumn' }, alignItems: 'center' }} justifyContent='space-between'>
                    {state.theme.featured.showOnList && state.source.attachment[item.featured_media] && (
                        <Box sx={{ width: { md: 'calc(50% - 30px)', sm: '100%' }, mr: { md: '30px', sm: 0 } }}>
                            <Box sx={{ p: .5, bgcolor: '#fff' }}>
                                <PostImage id={item.featured_media} />
                            </Box>
                        </Box>
                    )}
                    <Box sx={{ width: { md: state.theme.featured.showOnList && state.source.attachment[item.featured_media] ? '50%' : '100%', sm: '100%' } }}>
                        <ServiceLink link={item.link}>
                            <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                        </ServiceLink>
                        <div>
                            {author && (
                                <ServiceLink link={author.link}>
                                    <AuthorName>
                                        By <b>{author.name}</b>
                                    </AuthorName>
                                </ServiceLink>
                            )}
                            <PublishDate>
                                {" "}
                                on <b>{date.toDateString()}</b>
                            </PublishDate>
                        </div>
                        {item.excerpt && (
                            <Excerpt >
                                <Html2React html={item.excerpt.rendered} />
                            </Excerpt>
                        )}
                    </Box>
                </Stack>
            </Stack>)
    }
};

export default connect(PostItem);
import { connect } from "frontity";
import PostImage from "./PostImage";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ServiceLink, Title, AuthorName, PublishDate, Excerpt } from './styled';

const PostItem = ({ state, item }) => {
    const author = state.source.author[item.author];
    const date = new Date(item.date);

    return (
        <Stack sx={{ p: 1.25, height: '100%', justifyContent: 'center' }}>
            <Stack flexDirection='row' justifyContent='space-between'>
                <Box sx={{ width: state.theme.featured.showOnList && state.source.attachment[item.featured_media] ? '50%' : '100%' }}>
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
                        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                    )}
                </Box>

                {state.theme.featured.showOnList && state.source.attachment[item.featured_media] && (
                    <Box sx={{ p: .5, bgcolor: '#fff', width: 'calc(50% - 30px)', ml: '30px' }}>
                        <PostImage id={item.featured_media} />
                    </Box>
                )}
            </Stack>
        </Stack>)
};

export default connect(PostItem);
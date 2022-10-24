import { connect } from "frontity";
import Image from "./Image";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ServiceLink, Title, AuthorName, PublishDate, Excerpt } from './styled';

const PostItem = ({ state, item }) => {
    const author = state.source.author[item.author];
    const date = new Date(item.date);
    console.log(item.excerpt, 'here is post item')

    return (
        <Stack sx={{ p: 1.25, height: '100%', justifyContent: 'center' }}>
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

            <Stack flexDirection='row' justifyContent='space-between'>
                {item.excerpt && (
                    <Box sx={{ width: state.theme.featured.showOnList ? '50%' : '100%' }}>
                        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                    </Box>
                )}
                {state.theme.featured.showOnList && (
                    <Box sx={{ p: .5, bgcolor: '#fff', width: 'calc(50% - 30px)', ml: '30px' }}>
                        <Image id={item.featured_media} />
                    </Box>
                )}
            </Stack>
        </Stack>)
};

export default connect(PostItem);
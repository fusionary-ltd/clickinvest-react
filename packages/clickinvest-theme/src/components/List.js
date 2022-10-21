import { connect } from "frontity";
import FeaturedMedia from "./featured-media";
import { ServiceLink, Title, AuthorName, PublishDate, Excerpt } from './styled';
import Stack from '@mui/material/Stack';

const Item = ({ state, item }) => {
    const author = state.source.author[item.author];
    const date = new Date(item.date);

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

            {state.theme.featured.showOnList && (
                <FeaturedMedia id={item.featured_media} />
            )}
            {item.excerpt && (
                <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
            )}
        </Stack>)
};

export default connect(Item);
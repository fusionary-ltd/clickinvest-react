import { connect } from "frontity";
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Title404, Description } from '../components/styled';

const description404 = (
    <>
        That page can’t be found{" "}
        <span role="img" aria-label="confused face">
            😕
        </span>
    </>
);

const description = (
    <>
        Don&apos;t panic! Seems like you encountered an error. If this persists,
        <a href="https://community.frontity.org"> let us know </a> or try refreshing
        your browser.
    </>
);

// The 404 page component
const PageError = ({ state }) => {
    const data = state.source.get(state.router.link);

    const title = "Oops! Something went wrong";
    const title404 = "Oops! 404";

    return (
        <Container maxWidth="lg">
            <Stack alignItems='center' justifyContent='center' sx={{ minHeight: 500 }}>
                <Title404>{data.is404 ? title404 : title}</Title404>
                <Description>{data.is404 ? description404 : description}</Description>
            </Stack>
        </Container>
    );
};

export default connect(PageError);



import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';

const Loading = () => (
  <Container maxWidth="lg">
    <Box sx={{ mb: 5 }}>
      <Skeleton animation="wave" height={400} />
      <Skeleton animation="wave" height={50} width='70%' />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" height={50} width='70%' sx={{ mt: 3 }} />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  </Container>
);

export default Loading;
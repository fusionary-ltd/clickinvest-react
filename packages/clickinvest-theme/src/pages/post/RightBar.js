import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HStack, RightLink } from '../../components/styled';
import CallEndIcon from '@mui/icons-material/CallEnd';

const RightBar = ({ state }) => {
    const { theme, contact, post } = state.option;

    return (
        <Stack sx={{ border: '1px solid #EBEBEB', p: 4 }}>
            <Typography variant='h3' sx={{ fontSize: '1.75em' }}>{post.rightBar.title}</Typography>
            <Typography sx={{ fontWeight: 600, my: 2 }}>{post.rightBar.description}</Typography>
            <HStack>
                <CallEndIcon sx={{ mr: 2 }} />
                <Typography sx={{ fontSize: '1.5em', fontWeight: 600 }}>{contact.phoneNumber}</Typography>
            </HStack>
            <Box component='img' src={post.rightBar.img} sx={{ my: 1, width: '100%' }} />
            <Box sx={{ borderTop: '1px solid #EBEBEB', my: 4 }} />
            <Box>
                <Typography sx={{ fontSize: '2em', fontWeight: 600, mb: 3 }}>{post.rightBar.serviceTitle}</Typography>
                <Typography>{post.rightBar.serviceDescription}</Typography>
            </Box>
            <Box sx={{ borderTop: '1px solid #EBEBEB', my: 4 }} />
            {
                post.rightBar && post.rightBar.services.map(({ name, link }, idx) => (
                    <RightLink key={idx} link={link}>
                        <Typography sx={{ color: theme.primary, '&:hover': { color: '#000' } }}>{name}</Typography>
                    </RightLink>
                ))
            }
        </Stack>
    )
}

export default connect(RightBar);
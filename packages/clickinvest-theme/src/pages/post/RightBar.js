import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HStack, RightLink } from '../../components/styled';
import CallEndIcon from '@mui/icons-material/CallEnd';
import service1 from '../../assets/img/services/service1.jpg';

const RightBar = ({ state }) => {
    const { theme, contact } = state.option;

    return (
        <Stack sx={{ border: '1px solid #EBEBEB', p: 4 }}>
            <Typography variant='h3' sx={{ fontSize: '1.75em' }}>Get In Touch</Typography>
            <Typography sx={{ fontWeight: 600, my: 2 }}>Are you from the Pittsburgh area? Call us 24 hr</Typography>
            <HStack>
                <CallEndIcon sx={{ mr: 2 }} />
                <Typography sx={{ fontSize: '1.5em', fontWeight: 600 }}>{contact.phoneNumber}</Typography>
            </HStack>
            <Box component='img' src={service1} sx={{ my: 1, width: '100%' }} />
            <Box sx={{ borderTop: '1px solid #EBEBEB', my: 4 }} />
            <Box>
                <Typography sx={{ fontSize: '2em', fontWeight: 600, mb: 3 }}>Our Services</Typography>
                <Typography>Garage door issues in the Pittsburgh area? Don’t Worry, Contact us.</Typography>
            </Box>
            <Box sx={{ borderTop: '1px solid #EBEBEB', my: 4 }} />
            {
                [1, 2, 3, 4].map((item) => (
                    <RightLink key={item}>
                        <Typography sx={{ color: theme.primary, '&:hover': { color: '#000' } }}>
                            Commercial Garage Door Repair</Typography>
                    </RightLink>
                ))
            }
        </Stack>
    )
}

export default connect(RightBar);
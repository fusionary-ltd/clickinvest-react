import { connect } from "frontity";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HStack, RightLink } from '../../components/styled';
import config from '../../config/index';
import CallEndIcon from '@mui/icons-material/CallEnd';
import service1 from '../../assets/img/services/service1.jpg';

const RightBar = ({ state }) => {
    return (
        <Stack sx={{ border: '1px solid #EBEBEB', p: 4 }}>
            <Typography variant='h3' sx={{ fontSize: '1.75em' }}>Get In Touch</Typography>
            <Typography sx={{ fontWeight: 600, my: 2 }}>Are you from the Pittsburgh area? Call us 24 hr</Typography>
            <HStack>
                <CallEndIcon sx={{ mr: 2 }} />
                <Typography sx={{ fontSize: '1.5em', fontWeight: 600 }}>{config.phone}</Typography>
            </HStack>
            <Box component='img' src={service1} sx={{ my: 1 }} />
            <Box sx={{ borderTop: '1px solid #EBEBEB', my: 4 }} />
            <Box>
                <Typography sx={{ fontSize: '2em', fontWeight: 600, mb: 3 }}>Our Services</Typography>
                <Typography>Garage door issues in the Pittsburgh area? Don’t Worry, Contact us.</Typography>
            </Box>
            <Box sx={{ borderTop: '1px solid #EBEBEB', my: 4 }} />
            {
                [1, 2, 3, 4].map((item) => (
                    <RightLink key={item}>Commercial Garage Door Repair</RightLink>
                ))
            }
        </Stack>
    )
}

export default connect(RightBar);
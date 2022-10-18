import { connect } from "frontity";
import Box from '@mui/material/Box';
import Introduce from './Introduce';
import ContactService from './ContactService';
import ServingPittsburgh from './ServingPittsburgh';
import Testimonials from './Testimonials';
import GarageDoorServices from './GarageDoorServices';
import Marksmanteam from './Marksmanteam';
import CallFreeEstimate from './CallFreeEstimate';
import YearsExperience from './YearsExperience';
import ExperienceBg from './ExperienceBg';
import Blog from './Blog';
import Supporting from './Supporting';
import TapHelper from './TabHelper';

const Home = ({ state }) => {
    return (
        <Box>
            <Introduce />
            <ContactService
                {...{
                    title: '24/7 Emergency Repair Services',
                    sub: 'Is your garage door stuck? Want routine maintenance services from professionals? We’re reading for your call!'
                }}
            />
            <ServingPittsburgh />
            <Testimonials />
            <GarageDoorServices />
            <Marksmanteam />
            <CallFreeEstimate />
            <YearsExperience />
            <ExperienceBg />
            <TapHelper />
            <ContactService
                {...{
                    title: 'Call Us or Send Us a Message',
                    sub: 'Leave your contact information in the fields below and we will contact you as soon as possible.'
                }}
            />
            <Blog />
            <ContactService
                {...{
                    title: 'Book Our Services',
                    sub: 'Is your garage door stuck? Need a professional installation? We’re here to take your call!'
                }}
            />
            <Supporting />
        </Box>
    )
}

export default connect(Home);
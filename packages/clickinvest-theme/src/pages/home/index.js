import { connect } from "frontity";
import Box from '@mui/material/Box';
import Introduce from './Introduce';
import ContactService from './ContactService';
import ServingPittsburgh from './ServingPittsburgh';
import Testimonials from './Testimonials';
import GarageDoorServices from './GarageDoorServices';
import AboutTeam from './AboutTeam';
import CallFreeEstimate from './CallFreeEstimate';
import Experience from './Experience';
import ExperienceBg from './ExperienceBg';
import Supporting from './Supporting';
// import Blog from './Blog';
// import TapHelper from './TabHelper';

const Home = ({ state }) => {
    return (
        <Box>
            <Introduce />
            <ContactService />
            <ServingPittsburgh />
            <Testimonials />
            <GarageDoorServices />
            <AboutTeam />
            <CallFreeEstimate />
            <Experience />
            <ExperienceBg />
            {/* <TapHelper />
            <ContactService />
            <Blog /> */}
            <ContactService />
            <Supporting />
        </Box>
    )
}

export default connect(Home);
import React from "react";
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
    const { home } = state.option;
    return (
        <Box>
            {
                home.hero.enabled &&
                <Introduce />
            }
            {
                home.contact.enabled &&
                <ContactService />
            }
            {
                home.slider.enabled &&
                <ServingPittsburgh />
            }
            {
                home.testimonials.enabled &&
                <Testimonials />
            }
            {
                home.services.enabled &&
                <GarageDoorServices />
            }
            {
                home.aboutTeam.enabled &&
                <AboutTeam />
            }
            {
                home.callUs.enabled &&
                <CallFreeEstimate />
            }
            {
                home.experience.enabled &&
                <Experience />
            }
            {
                home.experienceBg.enabled &&
                <ExperienceBg />
            }
            {/* <TapHelper /> */}
            {/* <Blog /> */}
            {
                home.contact.enabled &&
                <ContactService />
            }
            {
                home.long.enabled &&
                <Supporting />
            }
        </Box>
    )
}

export default connect(Home);
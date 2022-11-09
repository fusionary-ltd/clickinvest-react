import React, { useEffect, useState } from "react"
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

const Home = ({ state, setHPercent }) => {
    const data = state.source.get(state.router.link);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        var body = document.body, html = document.documentElement;
        const h = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - window.innerHeight;
        setHeight(h);
    }, [data]);

    useEffect(() => {
        const handleScroll = () => {
            setHPercent(window.scrollY / height * 100)
        }
        if (height > 0)
            window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [height])

    useEffect(() => {
        setHPercent(0)
    }, [])

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
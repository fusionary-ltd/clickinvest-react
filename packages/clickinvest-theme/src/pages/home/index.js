import Box from '@mui/material/Box';

import Introduce from './Introduce';
import RepairServices from './RepairServices';
import ServingPittsburgh from './ServingPittsburgh';
import Testimonials from './Testimonials';
import GarageDoorServices from './GarageDoorServices';
import Marksmanteam from './Marksmanteam';
import CallFreeEstimate from './CallFreeEstimate';
import YearsExperience from './YearsExperience';

const Home = () => {
    return (
        <Box>
            <Introduce />
            <RepairServices />
            <ServingPittsburgh />
            <Testimonials />    
            <GarageDoorServices />    
            <Marksmanteam />    
            <CallFreeEstimate />    
            <YearsExperience />    
        </Box>
    )
}

export default Home;
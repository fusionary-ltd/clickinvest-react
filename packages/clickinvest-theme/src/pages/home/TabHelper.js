import React, { useState } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { TabButton } from '../../components/styled';

const TapHelper = ({ state }) => {
    const { theme } = state.option;

    const [active, setActive] = useState(-1);
    const title = [
        'DOOR JAMMED?',
        'REPAIR COSTS',
        'BY MYSELF',
        'NOISY DOOR'
    ]
    const content = [
        {
            title: 'Why is My Garage Door Jammed?',
            desc: `Causes of jammed doors can be one of five reasons: off-track garage door,
            broken garage door springs, locked garage door, or lodged garage door
            track. Then wait for no further and call us for a free estimate.`
        },
        {
            title: 'How Much Does it Cost to Repair a Garage Door?',
            desc: `So our customers are left with no nasty surprises, we provide quotes only
            when we’ve taken a full look at the problem. That’s full transparency.`
        },
        {
            title: 'Can I Fix it by Myself?',
            desc: `Whilst some normal maintenance is encouraged if you know what you’re
            doing, many of our customers have attempted to fix their door themselves
            only to make matters worse and sometimes more expensive. If you’re
            unsure - ask the pros!`
        },
        {
            title: 'Loud and Squeaky Garage Door',
            desc: `A creaky door can not only be a sign of needed maintenance but can also be
            extremely annoying! It’s usually a simple fix, so let us come out and take
            your squeaking away!`
        }
    ]

    return (
        <Box sx={{ bgcolor: '#fff', py: 8 }}>
            <Container maxWidth="lg">
                <Stack sx={{ mb: 2 }}>
                    <Grid container spacing={1}>
                        {
                            title.map((item, idx) => (
                                <Grid item sm={12 / title.length} xs={12} key={idx}>
                                    <TabButton onClick={() => setActive(idx)} sx={{ bgcolor: idx === active ? theme.primary : '#f1f1f1', '&:hover': { bgcolor: theme.primary } }} >{item}</TabButton>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Stack>
                {
                    active !== -1 ?
                        <Stack sx={{
                            p: 2,
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: '#E5E5E5'
                        }}>
                            <Typography variant='h2' sx={{ fontWeight: 700, fontSize: { sm: '2rem', xs: '1.5rem' }, py: 2, mb: 2, borderBottom: 'solid 1px #E5E5E5' }}>
                                {content[active]?.title}
                            </Typography>
                            <Typography sx={{ maxWidth: { md: '60%', xs: '100%' } }}>{content[active]?.desc}</Typography>
                        </Stack> : null
                }
            </Container>
        </Box>
    );
}

export default connect(TapHelper);
import React from 'react';
import Link from "@frontity/components/link";
import { connect } from "frontity";

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import logo from '../assets/img/marks_logo.png';

import { TopLink, HStack, CategoryBtn, CategoryLink } from './styled';


const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ bgcolor: theme => theme.palette.warning.main, display: { sm: 'block', xs: 'none' } }}>
                <Container maxWidth="lg">
                    <Stack justifyContent='space-between' sx={{ flexDirection: { md: 'row', sm: 'column' }, py: { md: 0, sm: 1.25 } }}>
                        <Stack sx={{ p: { md: 1.25 }, alignItems: 'center', '&:hover': { color: 'white' } }} flexDirection='row'>
                            <TelegramIcon sx={{ fontSize: 18 }} />
                            <Typography component='span' sx={{ lineHeight: 1.4, pl: .5 }}>100 S Commons #102, Pittsburgh, PA 15212</Typography>
                        </Stack>
                        <Stack flexDirection='row'>
                            <TopLink link='info@marksmangaragedoors.com'>
                                <EmailIcon sx={{ fontSize: 18 }} />
                                <Typography component='span' sx={{ lineHeight: 1.4, pl: .5, mr: 1 }}>info@marksmangaragedoors.com</Typography>
                            </TopLink>
                            <Stack justifyContent='center' sx={{ ml: { sm: 'auto' } }}>
                                <TopLink link="tel:4123882633">
                                    <LocalPhoneIcon sx={{ fontSize: 18 }} />
                                    <Typography component='span' sx={{ lineHeight: 1.4, pl: .5 }}>(412) 388-2633</Typography>
                                </TopLink>
                            </Stack>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <AppBar position="sticky" sx={{ bgcolor: '#fff' }}>
                <Container maxWidth="lg">
                    <Toolbar sx={{ px: '0px !important', alignItems: { sm: 'center', xs: 'flex-start' }, justifyContent: { sm: 'unset', xs: 'space-between' } }}>
                        <Box sx={{ width: { sm: '20%', xs: '50%' }, padding: 1.25 }}>
                            <Link link='/'>
                                <Box component='img' src={logo} sx={{ width: '100%' }} alt='logo' />
                            </Link>
                        </Box>
                        <Box sx={{ m: 'auto', display: { sm: 'block', xs: 'none' } }}>
                            <HStack>
                                <Box sx={{ position: 'relative' }}>
                                    <CategoryBtn endIcon={<ExpandMoreIcon />} sx={{ color: open ? '#F7941D' : '#000000' }} onClick={handleClick} >Service</CategoryBtn>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </Box>
                                <Box>
                                    <CategoryBtn endIcon={<ExpandMoreIcon />}>Areas</CategoryBtn>
                                </Box>
                                <Box>
                                    <CategoryLink link='/blog'>Articles</CategoryLink>
                                </Box>
                                <Box>
                                    <CategoryLink link='/about-us'>About</CategoryLink>
                                </Box>
                            </HStack>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            <Link link='/contact' style={{ textDecoration: 'none' }}>
                                <Button color="error" variant="contained" sx={{ textTransform: 'inherit', fontSize: '1.1rem', fontWeight: 700, px: 3, py: 1.5, lineHeight: 1 }}>Book a Technician</Button>
                            </Link>
                        </Box>
                        <IconButton sx={{ mt: 2, display: { sm: 'none', xs: 'block' } }}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}

export default connect(Header);
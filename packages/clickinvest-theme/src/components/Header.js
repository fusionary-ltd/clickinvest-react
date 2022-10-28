import React, { useState } from 'react';
import Link from "@frontity/components/link";
import { connect } from "frontity";

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { TopLink, HStack, CategoryBtn, CategoryLink, ServiceLink } from './styled';


const Header = ({ state }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menu, setMenu] = useState(false);
    const [service, setService] = useState(false);
    const [areas, setAreas] = useState(false);
    const open = Boolean(anchorEl);
    const { theme, contact } = state.option;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ bgcolor: theme.primary, display: { sm: 'block', xs: 'none' } }}>
                <Container maxWidth="lg">
                    <Stack justifyContent='space-between' sx={{ flexDirection: { md: 'row', sm: 'column' }, py: { md: 0, sm: 1.25 } }}>
                        <Stack sx={{ p: { md: 1.25 }, alignItems: 'center', '&:hover': { color: 'white' } }} flexDirection='row'>
                            <TelegramIcon sx={{ fontSize: 18 }} />
                            <Typography component='span' sx={{ lineHeight: 1.4, pl: .5 }}>{contact.address}</Typography>
                        </Stack>
                        <Stack flexDirection='row'>
                            <TopLink link='info@marksmangaragedoors.com'>
                                <EmailIcon sx={{ fontSize: 18 }} />
                                <Typography component='span' sx={{ lineHeight: 1.4, pl: .5, mr: 1 }}>{contact.email}</Typography>
                            </TopLink>
                            <Stack justifyContent='center' sx={{ ml: { sm: 'auto' } }}>
                                <TopLink link="tel:4123882633">
                                    <LocalPhoneIcon sx={{ fontSize: 18 }} />
                                    <Typography component='span' sx={{ lineHeight: 1.4, pl: .5 }}>{contact.phoneNumber}</Typography>
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
                            <ServiceLink link='/'>
                                {
                                    theme.whiteLogo || theme.blackLogo ?
                                        <Box component='img' src={theme.whiteLogo ? theme.whiteLogo : theme.blackLogo} sx={{ width: '100%' }} alt='logo' />
                                        : <Typography variant='h1' sx={{ color: '#000', fontSize: 30, fontWeight: 600 }}>{theme.brandName}</Typography>
                                }
                            </ServiceLink>
                        </Box>
                        <Box sx={{ m: 'auto', display: { sm: 'block', xs: 'none' } }}>
                            <HStack>
                                <Box sx={{ position: 'relative' }}>
                                    <CategoryBtn endIcon={<ExpandMoreIcon />} sx={{ color: open ? theme.primary : '#000000', '&:hover': { color: theme.primary, bgcolor: 'transparent' } }} onClick={handleClick} >Service</CategoryBtn>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        sx={{
                                            '& .MuiPaper-root': {
                                                borderRadius: 0,
                                                bgcolor: theme.primary
                                            }
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            example
                                        </MenuItem>

                                    </Menu>
                                </Box>
                                <Box>
                                    <CategoryBtn sx={{ '&:hover': { color: theme.primary, bgcolor: 'transparent' } }} endIcon={<ExpandMoreIcon />}>Areas</CategoryBtn>
                                </Box>
                                <Box>
                                    <CategoryLink link='/blog'>
                                        <Typography sx={{ px: '20px', py: '13px', color: '#000000', fontSize: '1.1rem', fontWeight: 700, '&:hover': { bgcolor: 'transparent', color: theme.primary } }}>Articles</Typography>
                                    </CategoryLink>
                                </Box>
                                <Box>
                                    <CategoryLink link='/about-us'>
                                        <Typography sx={{ px: '20px', py: '13px', color: '#000000', fontSize: '1.1rem', fontWeight: 700, '&:hover': { bgcolor: 'transparent', color: theme.primary } }}>About</Typography>
                                    </CategoryLink>
                                </Box>
                            </HStack>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            <Link link='/contact' style={{ textDecoration: 'none' }}>
                                <Button variant="contained" sx={{ '&:hover': { bgcolor: theme.warning }, bgcolor: theme.warning, textTransform: 'inherit', fontSize: '1.1rem', fontWeight: 700, px: 3, py: 1.5, lineHeight: 1 }}>Book a Technician</Button>
                            </Link>
                        </Box>
                        <IconButton sx={{ mt: 2, display: { sm: 'none', xs: 'block' } }} onClick={() => setMenu(!menu)}>
                            {
                                menu ? <CloseIcon /> : <MenuIcon />
                            }
                        </IconButton>
                    </Toolbar>
                    <Box sx={{ display: { sm: 'none', xs: 'block' }, color: '#000000de' }}>
                        <Collapse in={menu} timeout="auto" unmountOnExit>
                            <List
                                sx={{ width: '100%', bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                <ListItemButton onClick={() => setService(!service)}>
                                    <ListItemText primary="Service" />
                                    {service ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={service} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary="Demo Posts" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={() => setAreas(!areas)}>
                                    <ListItemText primary="Areas" />
                                    {areas ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={areas} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary="Demo Areas one" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton >
                                    <ListItemText primary="Articles" />
                                </ListItemButton>
                                <ServiceLink link='/about-us'>
                                    <ListItemButton >
                                        <ListItemText primary="About" sx={{ color: '#000000de' }} />
                                    </ListItemButton>
                                </ServiceLink>
                            </List>
                        </Collapse>
                    </Box>
                </Container>
            </AppBar>
        </>
    );
}

export default connect(Header);
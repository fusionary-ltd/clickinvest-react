import React, { useState } from 'react';
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
import Modal from '@mui/material/Modal';
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

const MenuList = ({ item, theme }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <CategoryBtn title='' endIcon={<ExpandMoreIcon />} sx={{ color: open ? theme.primary : '#000000', '&:hover': { color: theme.primary, bgcolor: 'transparent' } }} onClick={handleClick} >{item.title}</CategoryBtn>
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
                {
                    item.list.map((list, i) => (
                        <MenuItem key={i} onClick={handleClose}>
                            <ServiceLink link={list.url} title={list.title} >
                                <Typography sx={{ color: '#000000' }}>{list.title}</Typography>
                            </ServiceLink>
                        </MenuItem>
                    ))
                }
            </Menu>
        </Box>
    )
}

const CollapsList = ({ item, setMenu }) => {
    const [active, setSctive] = useState(false);
    return (
        <>
            <ListItemButton title={item.title} onClick={() => setSctive(!active)}>
                <ListItemText primary={item.title} />
                {active ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={active} timeout="auto" unmountOnExit>
                {
                    item.list.map((list, i) => (
                        <List component="div" disablePadding key={i}>
                            <ListItemButton title='' sx={{ pl: 4 }} onClick={() => setMenu(false)}>
                                <ServiceLink link={list.url} title={list.title} >
                                    <Typography sx={{ color: '#000000' }} variant='span'>
                                        <ListItemText primary={list.title} />
                                    </Typography>
                                </ServiceLink>
                            </ListItemButton>
                        </List>
                    ))
                }
            </Collapse>
        </>
    )
}

const Header = ({ state }) => {
    const [menu, setMenu] = useState(false);
    const [modal, setModal] = useState(false);
    const { theme, contact, header } = state.option;
    const modalOpen = () => setModal(true);
    const modalClose = () => setModal(false);

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
                            <TopLink title='' link={`mailto:${contact.email}`}>
                                <EmailIcon sx={{ fontSize: 18 }} />
                                <Typography component='span' sx={{ lineHeight: 1.4, pl: .5, mr: 1 }}>{contact.email}</Typography>
                            </TopLink>
                            <Stack justifyContent='center' sx={{ ml: { sm: 'auto' } }}>
                                <TopLink title='' link={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`}>
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
                            <ServiceLink title='' link='/' onClick={() => setMenu(false)}>
                                {
                                    theme.whiteLogo || theme.blackLogo ?
                                        <Box component='img' src={theme.whiteLogo ? theme.whiteLogo : theme.blackLogo} sx={{ width: '100%' }} alt='logo' />
                                        : <Typography variant='h1' sx={{ color: '#000', fontSize: 30, fontWeight: 600 }}>{theme.brandName}</Typography>
                                }
                            </ServiceLink>
                        </Box>
                        <Box sx={{ m: 'auto', display: { sm: 'block', xs: 'none' } }}>
                            {
                                (() => {
                                    if (header && header.menu && header.menu.length) {
                                        return (
                                            <HStack>
                                                {
                                                    header.menu.map((item, idx) => {
                                                        if (item.list && item.list.length) {
                                                            return (<MenuList item={item} theme={theme} key={idx} />)
                                                        } else {
                                                            return (
                                                                <Box key={idx}>
                                                                    <CategoryLink title='Blog' link={item.url}>
                                                                        <Typography sx={{ px: '20px', py: '13px', color: '#000000', fontSize: '1.1rem', fontWeight: 700, '&:hover': { bgcolor: 'transparent', color: theme.primary } }}>{item.title}</Typography>
                                                                    </CategoryLink>
                                                                </Box>
                                                            )
                                                        }
                                                    })
                                                }
                                            </HStack>
                                        )
                                    } else return null;
                                })()
                            }
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Button title='contact' onClick={() => modalOpen()} variant="contained" sx={{ '&:hover': { bgcolor: theme.warning }, bgcolor: theme.warning, textTransform: 'inherit', fontSize: '1.1rem', fontWeight: 700, px: 3, py: 1.5, lineHeight: 1 }}>Contact A Pro</Button>
                        </Box>
                        <IconButton title='menu' sx={{ mt: 2, display: { sm: 'none', xs: 'block' } }} onClick={() => setMenu(!menu)}>
                            {
                                menu ? <CloseIcon /> : <MenuIcon />
                            }
                        </IconButton>
                    </Toolbar>
                    <Box sx={{ display: { sm: 'none', xs: 'block' }, color: '#000000de' }}>
                        <Collapse in={menu} timeout="auto" unmountOnExit>
                            {
                                (() => {
                                    if (header && header.menu && header.menu.length) {
                                        return (

                                            <List
                                                sx={{ width: '100%', bgcolor: 'background.paper' }}
                                                component="nav"
                                                aria-labelledby="nested-list-subheader"
                                            >
                                                {
                                                    header.menu.map((item, idx) => {
                                                        if (item.list && item.list.length) {
                                                            return (<CollapsList item={item} setMenu={setMenu} key={idx} />)
                                                        } else {
                                                            return (
                                                                <ServiceLink key={idx} link={item.url} title={item.title} onClick={() => setMenu(false)}>
                                                                    <ListItemButton title={item.title}>
                                                                        <ListItemText primary={item.title} sx={{ color: '#000000de' }} />
                                                                    </ListItemButton>
                                                                </ServiceLink>
                                                            )
                                                        }
                                                    })
                                                }
                                            </List>

                                        )
                                    } else return null;
                                })()
                            }
                        </Collapse>
                    </Box>
                </Container>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, pb: 1, px: 2 }}>
                    <Button title='contact' onClick={() => modalOpen()} variant="contained" sx={{ width: '100%', '&:hover': { bgcolor: theme.warning }, bgcolor: theme.warning, textTransform: 'inherit', fontSize: '1.1rem', fontWeight: 700, px: 3, py: 1.5, lineHeight: 1 }}>Contact A Pro</Button>
                </Box>
            </AppBar>
            <Modal open={modal} onClose={modalClose} >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: { sm: 800, xs: 'auto' },
                    width: { sm: 'auto', xs: '90%' },
                    bgcolor: 'white',
                    boxShadow: 24,
                    padding: 1,
                    borderRadius: 2
                }}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/WerCpkTJQTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Box>
            </Modal>
        </>
    );
}

export default connect(Header);
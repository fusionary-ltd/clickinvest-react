import React, { useState } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { RepairInput, RepairButton, ServiceLink, Title, Author, DateWrapper, Content, Select } from '../../components/styled';
import RightBar from './RightBar';

const PostPage = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const postData = state.source[data.type][data.id];
    const author = state.source.author[postData.author];
    const date = new Date(postData.date);
    const Html2React = libraries.html2react.Component;
    const { theme, contact, post } = state.option;

    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        reason: ''
    });
    const [error, setError] = useState({});

    const handleValue = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const sendRequest = () => {
        let temp = error;
        if (values.name) {
            temp = { ...temp, name: false };
        } else {
            temp = { ...temp, name: true };
        }

        if (values.phone) {
            var phoneno = /^\d{10}$/;
            if (values.phone.match(phoneno)) {
                temp = { ...temp, phone: false };
            } else {
                temp = { ...temp, phone: true };
            }
        } else {
            temp = { ...temp, phone: true };
        }

        if (values.email) {
            let flag = String(values.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (flag && flag.length) {
                temp = { ...temp, email: false };
            } else {
                temp = { ...temp, email: true };
            }
        } else {
            temp = { ...temp, email: true };
        }

        if (values.location) {
            temp = { ...temp, location: false };
        } else {
            temp = { ...temp, location: true };
        }
        setError(temp);
    }


    return (
        <Box sx={{ my: 4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item sm={8} xs={12}>
                        {
                            state.router.link !== '/about-us/' && <>
                                <Typography variant='h2' sx={{ fontSize: '2em', fontWeight: 700, mb: 3 }}>{post?.title}</Typography>
                                <Typography sx={{ fontSize: '1.2em', fontWeight: 600 }}>{post?.contactDesc}</Typography>
                                <Box sx={{ bgcolor: theme.primary, p: 4 }}>
                                    <Typography>{post?.callUsDesc}</Typography>
                                    <Typography sx={{ fontSize: '1.5em', fontWeight: 600, color: '#fff', my: 2 }}>{contact.phoneNumber}</Typography>
                                    <Typography sx={{ mb: 3 }}>Or, send a message</Typography>

                                    <Grid container spacing={2}>
                                        <Grid item md={4} sm={6} xs={12}>
                                            <Stack>
                                                <RepairInput placeholder="Full Name" name="Name" variant="outlined" onChange={handleValue('name')} />
                                                {
                                                    error.name && <Typography sx={{ color: theme.warning }}>The field is required.</Typography>
                                                }
                                            </Stack>
                                        </Grid>
                                        <Grid item md={4} sm={6} xs={12}>
                                            <Stack>
                                                <RepairInput placeholder="Phone" name="Phone" variant="outlined" onChange={handleValue('phone')} />
                                                {error.phone && <Typography sx={{ color: theme.warning }}>The field is required.</Typography>}
                                            </Stack>
                                        </Grid>
                                        <Grid item md={4} sm={6} xs={12}>
                                            <Stack>
                                                <RepairInput placeholder="Email" name="Email" variant="outlined" onChange={handleValue('email')} />
                                                {error.email && <Typography sx={{ color: theme.warning }}>The field is required.</Typography>}
                                            </Stack>
                                        </Grid>
                                        <Grid item md={8} sm={6}>
                                            <Select onChange={handleValue('reason')} title='reason' >
                                                {
                                                    post && post.reason.length ? post.reason.map((item, idx) => (
                                                        <option value={item} key={idx}>{item}</option>
                                                    )) : null
                                                }
                                            </Select>
                                        </Grid>
                                        <Grid item md={4}>
                                            <RepairButton title="" onClick={() => sendRequest()} sx={{ bgcolor: theme.secondary, '&:hover': { bgcolor: theme.secondary } }}>SEND</RepairButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </>
                        }
                        {
                            data.isReady ? (
                                <div>
                                    <Title dangerouslySetInnerHTML={{ __html: postData.title.rendered }} />
                                    {!data.isPage && (
                                        <div>
                                            {author && (
                                                <ServiceLink link={author.link}>
                                                    <Author>
                                                        By <b>{author.name}</b>
                                                    </Author>
                                                </ServiceLink>
                                            )}
                                            <DateWrapper>
                                                {" "}
                                                on <b>{date.toDateString()}</b>
                                            </DateWrapper>
                                        </div>
                                    )}
                                    <Content>
                                        <Html2React html={postData.content.rendered} />
                                    </Content>
                                </div>
                            ) : null
                        }
                    </Grid>
                    <Grid item sm={4} xs={0}>
                        <RightBar />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default connect(PostPage);
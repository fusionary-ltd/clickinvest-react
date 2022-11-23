import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import Switch from "@frontity/components/switch"
import MuiThemeProvider from "../provider/Theme"
import { FloatingLink } from "../components/styled"
// import TagManager from 'react-gtm-module'
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CircularProgress from '@mui/material/CircularProgress'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/home/index"
import Post from "../pages/post/index"
import Loading from "../components/loading"
import PageError from "../pages/PageError"
import Contact from "../pages/Contact"

import { Accessibility } from 'accessibility'

const Root = ({ state }) => {
  const { contact, theme } = state.option
  const data = state.source.get(state.router.link)
  const [hPercent, setHPercent] = useState(0)

  useEffect(() => {
    // TagManager.initialize({ gtmId: 'GTM-NB4CG7G' })
    document.documentElement.setAttribute("lang", 'en')
    document.documentElement.setAttribute("title", 'clickinvest')
    window.addEventListener('load', function () { new Accessibility(); }, false)
  }, [])

  useEffect(() => {
    const rankMathElements = [];

    fetch(`${state.source.url}/wp-json/rankmath/v1/getHead?url=${state.source.url}/${state.router.link}`).then(async (response) => {
      const json = await response.json();
      const { head } = json;
      const tempElement = document.createElement("div");
      tempElement.innerHTML = head;
      for (const child of tempElement.children) {
        document.head.appendChild(child);
        rankMathElements.push(child);
      }
      tempElement.remove();
    });

    return () => {
      for (const child of rankMathElements) {
        child.remove();
      }
    }
  }, [state.router.link]);

  useEffect(() => {
    const handleScroll = () => {
      setHPercent(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  return (
    <MuiThemeProvider>
      {/* <GoogleReCaptchaProvider
        reCaptchaKey={reCaptcha.siteKey}
        scriptProps={{
          async: false,
          defer: false,
          appendTo: 'head',
          nonce: undefined
        }}
        container={{
          parameters: {
            badge: ['bottomleft'],
            theme: 'dark',
          }
        }}
      > */}
      <Header />
      <Switch>
        <Loading when={data.isFetching} />
        <Home when={data.isArchive} />
        <Post when={data.isPostType} />
        <Contact when={data.link === "/contact/"} />
        <PageError when={data.isError} />
      </Switch>
      <Footer />
      <IconButton onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })} sx={{ p: .25, position: 'fixed', bottom: hPercent > 3 ? 180 : -100, transition: 'bottom 1s', right: 10, borderRadius: 50, bgcolor: '#ffff', boxShadow: '0 0 8px #585858b8', '&:hover': { bgcolor: '#ffff' } }}>
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <CircularProgress variant="determinate" value={hPercent > 100 ? 100 : hPercent} sx={{ height: '50px !important', width: '50px !important', '& .MuiCircularProgress-svg': { '& circle': { strokeWidth: 2 } } }} title="cirlce" />
          <KeyboardArrowUpIcon sx={{ position: 'absolute' }} />
        </Box>
      </IconButton>
      <IconButton sx={{ width: 54, height: 54, p: .25, position: 'fixed', bottom: 120, right: 10, borderRadius: 50, bgcolor: theme.warning, boxShadow: '0 0 8px #585858b8', '&:hover': { bgcolor: '#ffff' } }}>
        <FloatingLink title={contact.email} link={`tel:${contact.phoneNumber.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '')}`}>
          <LocalPhoneIcon sx={{ fontSize: 30, color: '#fff' }} />
        </FloatingLink>
      </IconButton>
      {/* </GoogleReCaptchaProvider> */}
    </MuiThemeProvider>
  )
}

export default connect(Root)
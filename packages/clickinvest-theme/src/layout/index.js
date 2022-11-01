import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import TagManager from 'react-gtm-module'
import Switch from "@frontity/components/switch"
import MuiThemeProvider from "../provider/Theme"
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/home/index"
import Post from "../pages/post/index"
import Loading from "../components/loading"

import { Accessibility } from 'accessibility'

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  const { reCaptcha } = state.option

  const [token, setToken] = useState();

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NB4CG7G' });
    window.addEventListener('load', function () { new Accessibility(); }, false);
  }, [])

  useEffect(() => {
    if (document && document.getElementsByClassName('grecaptcha-badge')[0]) {
      document.getElementsByClassName('grecaptcha-badge')[0].style.display = 'none';
    }
  }, [token])

  return (
    <MuiThemeProvider>
      <GoogleReCaptchaProvider
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
      >
        <Header />
        <Switch>
          <Loading when={data.isFetching} />
          <Home when={data.isArchive} />
          <Post when={data.isPostType} />
        </Switch>
        <Footer />
        <GoogleReCaptcha
          style={{ display: 'none' }}
          onVerify={token => {
            setToken(token);
          }}
        />
      </GoogleReCaptchaProvider>
    </MuiThemeProvider>
  )
}

export default connect(Root)
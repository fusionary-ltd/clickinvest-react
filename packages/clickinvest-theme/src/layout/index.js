import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import Switch from "@frontity/components/switch"
import MuiThemeProvider from "../provider/Theme"
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/home/index"
import Post from "../pages/post/index"

import { Accessibility } from 'accessibility'

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  const { reCaptcha } = state.option

  const [token, setToken] = useState();

  useEffect(() => {
    window.addEventListener('load', function () { new Accessibility(); }, false)
  }, [])

  console.log(token, 'token----')

  return (
    <MuiThemeProvider>
      <GoogleReCaptchaProvider
        reCaptchaKey={reCaptcha.siteKey}
        // useRecaptchaNet="[optional_boolean_value]"
        // useEnterprise="[optional_boolean_value]"
        scriptProps={{
          async: false, // optional, default to false,
          defer: false, // optional, default to false
          appendTo: 'head', // optional, default to "head", can be "head" or "body",
          nonce: undefined // optional, default undefined
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
          <Home when={data.isArchive} />
          <Post when={data.isPostType} />
        </Switch>
        <Footer />
        <GoogleReCaptcha
          onVerify={token => {
            setToken(token);
          }}
        />
      </GoogleReCaptchaProvider>
    </MuiThemeProvider>
  )
}

export default connect(Root)
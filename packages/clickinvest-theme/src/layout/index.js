import React, { useEffect } from "react"
import { connect } from "frontity"
import ReCaptchaV2 from 'react-google-recaptcha'
import Switch from "@frontity/components/switch"
import MuiThemeProvider from "../provider/Theme"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/home/index"
import Post from "../pages/post/index"

import { Accessibility } from 'accessibility'

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  const { reCaptcha } = state.option
  useEffect(() => {
    window.addEventListener('load', function () { new Accessibility(); }, false)
  }, [])

  return (
    <MuiThemeProvider>
      <Header />
      <Switch>
        <Home when={data.isArchive} />
        <Post when={data.isPostType} />
      </Switch>
      <Footer />
      <ReCaptchaV2 sitekey={reCaptcha.siteKey} />
    </MuiThemeProvider>
  )
}

export default connect(Root)
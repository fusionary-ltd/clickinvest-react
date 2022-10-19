import React, { useEffect } from "react"
import { connect } from "frontity"
import Switch from "@frontity/components/switch"
import MuiThemeProvider from "../provider/Theme"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/home/index"

// import { Accessibility } from 'accessibility';

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  // useEffect(() => {
  //   window.addEventListener('load', function () { new Accessibility(); }, false);
  // }, [])

  return (
    <MuiThemeProvider>
      <Header />
      <Switch>
        <Home when={data.route === '/'} />
      </Switch>
      <Footer />
    </MuiThemeProvider>
  )
}

export default connect(Root)
import React, { useEffect } from "react"
import { connect } from "frontity"
import Switch from "@frontity/components/switch"
import MuiThemeProvider from "../provider/Theme"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/home/index"
import Post from "../pages/post/index"

import { Accessibility } from 'accessibility';

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log(data.route)
  useEffect(() => {
    window.addEventListener('load', function () { new Accessibility(); }, false);
  }, [])

  return (
    <MuiThemeProvider>
      <Header />
      <Switch>
        <Home when={data.route === '/'} />
        <Post when={data.route === '/post/'} />
      </Switch>
      <Footer />
    </MuiThemeProvider>
  )
}

export default connect(Root)
import React from "react"
import { connect } from "frontity"
import Switch from "@frontity/components/switch"
import MuiThemeProvider from "../provider/Theme"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/Home"


const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
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
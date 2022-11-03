import React, { useEffect, useState } from "react"
import { connect } from "frontity"
import TagManager from 'react-gtm-module'
import Switch from "@frontity/components/switch"
import MuiThemeProvider from "../provider/Theme"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/home/index"
import Post from "../pages/post/index"
import Loading from "../components/loading"
import PageError from "../components/PageError"

import { Accessibility } from 'accessibility'

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  const { reCaptcha } = state.option

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NB4CG7G' });
    window.addEventListener('load', function () { new Accessibility(); }, false);
  }, []);

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
          <PageError when={data.isError} />
        </Switch>
        <Footer />
      </GoogleReCaptchaProvider>
    </MuiThemeProvider>
  )
}

export default connect(Root)
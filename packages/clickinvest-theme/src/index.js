import option from './options.json';
import Root from "./layout"

const clickinvestTheme = {
  name: 'clickinvest-theme',
  roots: {
    theme: Root
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {
      init: ({ state }) => {

      },
      beforeSSR: ({ state, libraries }) => {
        state.option = option;
      },
      beforeCSR: ({ state, libraries }) => {
        document.querySelectorAll('title')[0].remove();
      }
    },
  },
}

export default clickinvestTheme

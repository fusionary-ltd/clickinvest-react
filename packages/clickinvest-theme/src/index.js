import option from './option.json'
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
        state.option = option
      },
    },
  },
}

export default clickinvestTheme

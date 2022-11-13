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
      beforeSSR: async ({ state, libraries }) => {
        const response = await fetch(`${state.source.url}/wp-json/clickinvest/v1/options`);
        const json = await response.json();
        state.option = json;
      },
      beforeCSR: ({ state, libraries }) => {
        document.querySelectorAll('title')[0].remove();
      }
    },
  },
}

export default clickinvestTheme
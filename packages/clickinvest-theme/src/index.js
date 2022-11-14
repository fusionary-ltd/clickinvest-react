import Root from "./layout"
import { get } from 'https';

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
        return new Promise((resolve) => {
          get(`${state.source.url}/wp-json/clickinvest/v1/options`, (res) => {
            let data = '';
            res.on('data', (chunk) => {
              data += chunk;
            });
            res.on('end', () => {
              state.option = JSON.parse(data);
              resolve();
            });
          });
        });
      },
      beforeCSR: ({ state, libraries }) => {
        document.querySelectorAll('title')[0].remove();
      }
    },
  },
}

export default clickinvestTheme
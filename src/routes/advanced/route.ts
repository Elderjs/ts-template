import { RouteOptions } from '@elderjs/elderjs';

const route: RouteOptions = {
  // WARNING: Here be dragons and magic of all sorts.

  // 'data' and 'all' for this route are populated by the @elderjs/plugin-markdown
  // If you look in your `elder.config.js` you will see that the plugin is configured as so:
  // 'elderjs-plugin-markdown': {
  //   routes: ['blog'],
  // },

  data: {},
  all: () => [],
  permalink: '/advanced/:slug/',
};

export default route;

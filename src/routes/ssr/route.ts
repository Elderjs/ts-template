import { RouteOptions } from '@elderjs/elderjs';

const route: RouteOptions = {
  // this is an example of how you might create an SSR experience with Elder.js
  // This is good if you need sessions or have users logging in.
  data: ({ request }) => {
    return { search: request.req.search };
  },
  permalink: '/dynamic/:foo/:bar/',
  all: () => [], // we set this to empty so the default is not placed.
  dynamic: true, // enables this for SSR mode.
};

export default route;

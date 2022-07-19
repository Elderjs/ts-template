import { UserOptions } from '@elderjs/elderjs';

import 'dotenv/config';

const config: UserOptions = {
  origin: 'https://example.com', // TODO: update this. The URL of your site's root, without a trailing slash
  lang: 'en',
  srcDir: 'build',
  distDir: 'public',
  rootDir: process.cwd(),
  prefix: '', // If you want your site to be built within a sub folder within your `distDir` you can use this.
  props: {
    hydration: 'hybrid', // whether a file should be written for hydration JSON or not.
    compress: false, // compresses the props. Saves ~8% over brotli on large JSON objects.
    replacementChars: '$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', // used to build a custom library for each page if props.compress is set to true.
  },
  debug: {
    stacks: false, // output details of the stack consolidation process.
    hooks: false, // outputs the details of each hook as they are run.
    performance: false, // outputs a full performance report of how long it took to run each page.
    build: false, // gives additional details about the build process.
    reload: false, // helps debugging the client side reloading
    shortcodes: false, // debugging shortcodes
    props: false, // debugging props
  },
  hooks: {
    // disable: ['elderWriteHtmlFileToPublic'], // this is used to disable internal hooks. Uncomment this hook to disabled writing your files during build.
  },
  plugins: {
    '@elderjs/plugin-markdown': {
      routes: ['blog', 'advanced'],
      useSyntaxHighlighting: true,
    },
  },
  replacements: {}, // used to replace variables in your svelte templates at bundle time.

  shortcodes: { closePattern: '}}', openPattern: '{{' },
};
export default config;

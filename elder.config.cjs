require('dotenv').config();
/** @type {import('@elderjs/elderjs').UserOptions} */
module.exports = {
  origin: 'https://example.com', // TODO: update this. The URL of your site's root, without a trailing slash
  lang: 'en',
  srcDir: 'build',
  distDir: 'public',
  rootDir: process.cwd(),
  prefix: '', // If you want your site to be built within a sub folder within your `distDir` you can use this.
  props: {
    hydration: 'hybrid',
    compress: false,
  },
  debug: {
    stacks: false, // output details of the stack consolidation process.
    hooks: false, // outputs the details of each hook as they are run.
    performance: false, // outputs a full performance report of how long it took to run each page.
    build: false, // gives additional details about the build process.
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

  shortcodes: { closePattern: '}}', openPattern: '{{' },
};

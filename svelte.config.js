const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [require('autoprefixer')],
      },
      typescript: {
        tsconfigFile: './tsconfig.svelte.json',
      },
    }),
  ],
};

<script>
  import style from '../../node_modules/water.css/out/light.min.css';
  import microtip from '../../node_modules/microtip/microtip.css';
  export let templateHtml;
</script>

<style>
  :global(h1) {
    font-style: italic;
  }

  .footer {
    padding: 2rem 0;
    background: #06395a;
    padding-top: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: #f4f7fb;
    text-align: center;
    font-size: 14px;
  }
  .footer a {
    color: #f4f7fb;
  }

  :global(ul li),
  :global(ol li) {
    margin-bottom: 0.3rem;
  }

  .code,
  code {
    padding: 0 0.25rem;
    border-radius: 3px;
    margin-right: 0.5rem;
    font-family: monospace;
    display: inline-block;
  }

  :global(h2) {
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  :root {
    --background: #2e3440ff;
    --code: #ddd;
  }
</style>

<svelte:head>
  <script>
    document.addEventListener('ejs', (e) => {
      console.log('Layout.svelte > Component Mount Detail', e.detail);
    });
  </script>
  <link href="/tailwind.css" rel="stylesheet" />
</svelte:head>

<div class="container">
  {@html templateHtml}
</div>
<div class="footer">Built with ❤ and <a href="https://elderguide.com/tech/elderjs/">Elder.js</a></div>

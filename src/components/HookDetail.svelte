<script>
  export let hook;
  export let hookEntityDefinitions;
</script>

<style>
  .list {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 13px;
  }

  .list .code {
    cursor: help;
  }

  .hook {
    max-width: 100%;
    text-overflow: wrap;
    padding: 1rem;
    border: 1px solid #ddd;
    border-collapse: collapse;
    margin-bottom: 1rem;
    border-radius: 1rem;
    position: relative;
  }

  .hook-number {
    position: absolute;
    top: 0;
    right: 0px;
    width: 2rem;
    height: 1.75rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    text-align: center;
    padding-top: 3px;
    font-size: 14px;
  }

  .overview {
    margin-right: 1rem;
  }

  .use {
    font-size: 14px;
  }
  :global(.use ul) {
    padding-left: 1rem;
  }

  .overview {
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #ddd;
  }
</style>

<div class="hook" id={hook.hook}>
  <div class="overview">
    <span class="hook-name">
      {#if hook.link && hook.link.length > 0}<a href={hook.link}>{hook.hook}</a>{:else}{hook.hook}{/if}
    </span>
    : {hook.context}
  </div>
  <div class="use">
    {@html hook.use}
  </div>

  <div class="list">
    <strong>Props</strong> : {#each hook.props as prop, i}
      <span
        role="tooltip"
        class="code"
        data-microtip-size="large"
        data-microtip-position="up"
        aria-label={hookEntityDefinitions[prop]}>
        {prop}{#if i !== hook.props.length - 1},{/if}
      </span>
    {/each}
  </div>
  <div class="list">
    <strong>Mutable</strong> : {#each hook.mutable as mutable, i}
      <span
        role="tooltip"
        class="code"
        data-microtip-size="large"
        data-microtip-position="up"
        aria-label={hookEntityDefinitions[mutable]}>
        {mutable}{#if i !== hook.mutable.length - 1},{/if}
      </span>
    {/each}
  </div>

  {#if hook.advanced}
    <div><small>This hook is an 'advanced' hook meaning it geared towards advanced users or plugins.</small></div>
  {/if}

  <small>{hook.expiremental ? 'Expiremental' : 'Stable'} &middot; Location: {hook.location}</small>
</div>

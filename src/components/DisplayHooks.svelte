<script>
  export let hookEntityDefinitions;
  export let hookInterface;
  export let image = 'true'; // text because props are text
  import HookDetail from './HookDetail.svelte';
</script>

{#if image === 'true' || image === 'above'}
  <img
    src="https://elderguide.com/images/elderjs-hook-lifecycle-v13.png"
    alt="Elder.js hook Lifecycle v1.3"
    style="max-width:100%; margin:1rem 0;" />
{/if}

<div class="hooks">
  {#each hookInterface as hook, i}
    <HookDetail {hook} {i} {hookEntityDefinitions} />
  {/each}
</div>

{#if image === 'below'}
  <img
    src="https://elderguide.com/images/elderjs-hook-lifecycle-v13.png"
    alt="Elder.js hook Lifecycle v1.3"
    style="max-width:100%; margin:1rem 0;" />
{/if}

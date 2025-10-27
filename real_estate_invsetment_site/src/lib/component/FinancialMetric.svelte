<script>
  export let title = "";
  export let value = "";
  export let label = "";
  let size =15
  export let icon = null;
</script>

<div class="border border-[#2c313a] flex flex-col items-center justify-center py-3 roundered">
  <h3>{value}</h3>
  <div class="flex gap-2 items-center">
    <p class="text-color">{label}</p>
    {#if icon}
      <svelte:component this={icon} size= {size}/>
    {/if}
  </div>
</div>

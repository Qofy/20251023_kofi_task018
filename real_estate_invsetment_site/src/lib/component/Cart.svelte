<script>
  import { fly } from 'svelte/transition';
  import { X } from 'lucide-svelte';
  import "../css/app.css";
  export let visible = false;
  export let closeCart = () => {};
</script>

{#if visible}
  <div class="fixed top-0 right-0 h-full w-96 bg-[#222] shadow-lg z-50 flex flex-col" in:fly={{ x: 400, duration: 350 }} out:fly={{ x: 400, duration: 250 }}>
    <div class="flex justify-between items-center p-6 border-b border-[#2c313a]">
      <h2 class="text-xl font-bold text-[#883bed]">Investment Cart</h2>
      <button on:click={closeCart} class="text-gray-400 hover:text-[#883bed]">
        <X size={24}/>
      </button>
    </div>
    <div class="p-6 flex flex-col gap-4">
      <h3 class="text-lg font-semibold">Your selected property investments</h3>
      <p class="text-gray-400">Your cart is empty</p>
      <p class="text-gray-400">Start by browsing our property investments</p>
    </div>
  </div>
{/if}
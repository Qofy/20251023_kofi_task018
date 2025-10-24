<script>
import "../css/app.css";
import {Globe, ShoppingCart, X} from "@lucide/svelte";

let size = 18;
let showCart = false;
function openCart() {
  showCart = true;
}
function closeCart() {
  showCart = false;
}
</script>

 <header class="w-full h-19 border-b-1 border-[#2c313a] flex justify-between items-center px-10 mb-8">
 <div class="flex gap-6 items-center text-gray-400">
  <a href="/properties/Ready%20to%20invest"> 
    <img src="https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/cdn/landingpage/favicon2.png" alt="vii" class="w-7">
  </a>
  <a href="/properties/Ready%20to%20invest">
    Properties
  </a>
  <a href="/portfolio">
    Portfolio
  </a>
 </div>

 <div class="flex gap-6 items-center">
  <a href="#">
    <Globe size={size}/>
  </a>
  <button type="button" on:click={openCart} aria-label="Open cart" class="bg-transparent border-none p-0 m-0 cursor-pointer">
    <ShoppingCart size={size}/>
  </button>

  <div class="w-9 h-9 rounded-[50%] bg-[#883bed] flex items-center justify-center">
    S
  </div>
 </div>
 </header>

{#if showCart}
  <div class="fixed top-0 right-0 h-full w-96 bg-[#222] shadow-lg z-50 transition-transform duration-300 transform translate-x-0 flex flex-col">
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

<style>
  .sidebar-enter {
    transform: translateX(100%);
  }
  .sidebar-enter-active {
    transform: translateX(0);
    transition: transform 0.3s;
  }
  .sidebar-leave {
    transform: translateX(0);
  }
  .sidebar-leave-active {
    transform: translateX(100%);
    transition: transform 0.3s;
  }
</style>
<script>
import "../css/app.css";
import {Globe, ShoppingCart, X} from "@lucide/svelte";
import Cart from "$lib/component/Cart.svelte";

let size = 18;
let showCart = false;
let showLang = false;
let showLogin = false
function openCart() {
  showCart = true;
}
function closeCart() {
  showCart = false;
}
function toggleLang() {
  showLang = !showLang;
  console.log("Show lang", showLang)
}

function toggleLogin(){
  showLogin =!showLogin
}

function selectLang(lang) {
  showLang = false;
  // You can add logi
  // c here to change language
}
let active;
</script>

 <header class="fixed top-0 left-0 w-full h-19 border-b border-[#2c313a] flex justify-between items-center px-10 bg-[#14161a] z-50" >
 <div class="flex gap-6 items-center text-gray-400">
  <a href="/properties/Ready%20to%20invest"> 
    <img src="https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/cdn/landingpage/favicon2.png" alt="vii" class="w-8">
  </a>
  <a href="/properties/Ready%20to%20invest"
     class="text-[.9rem hover:text-[#883bed]"
     class:text-[#883bed]={active === 'Properties'}
     class:underline={active === 'Properties'}
     on:click={() => active = 'Properties'}>
     Properties
     <span class="underline-offset-4"></span>
  </a>
  <a href="/portfolio"
     class="text-[.9rem] hover:text-[#883bed]"
     class:text-[#883bed]={active === 'Portfolio'}
     class:underline={active === 'Portfolio'}
     on:click={() => active = 'Portfolio'}>
     Portfolio
     <span class="underline-offset-4"></span>
  </a>
 </div>

 <div class="flex gap-6 items-center relative">
  <button type="button" on:click={toggleLang} aria-label="Select language" class="bg-transparent border-none p-0 m-0 cursor-pointer">
    <Globe size={size}/>
  </button>
  {#if showLang}
    <div class="absolute top-10 right-25  bg-[#222] rounded-lg shadow-lg border border-[#2c313a] py-2 px-4 z-50 flex flex-col gap-2 min-w-[130px]">
      <button class="text-gray-300 hover:text-[#883bed] py-1 px-2 text-left flex gap-1.5" on:click={() => selectLang('de')}>🇩🇪 German</button>
      <button class="text-gray-300 hover:text-[#883bed] py-1 px-2 text-left flex gap-1.5" on:click={() => selectLang('en')}>🇬🇧 English</button>
    </div>
  {/if}
  <button type="button" on:click={openCart} aria-label="Open cart" class="bg-transparent border-none p-0 m-0 cursor-pointer">
    <ShoppingCart size={size}/>
  </button>

  <button class="w-9 h-9 rounded-[50%] bg-[#883bed] flex items-center justify-center" on:click={toggleLogin}>
    S
  </button>
  {#if showLogin}

    <div>
      p
    </div>
  {/if}
 </div>
 </header>

{#if showCart}
  <Cart visible={showCart} closeCart={closeCart}/>
{/if}

<style>
</style>

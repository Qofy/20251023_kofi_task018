<script>
import "../css/app.css";
import {Globe, ShoppingCart, X, User, Wallet, Settings, LogOut} from "@lucide/svelte";
import Cart from "$lib/component/Cart.svelte";

import { onMount } from 'svelte';

function closeAllPopups() {
  showLogin = false;
  showCart = false;
  showLang = false;
}

const popuInfo = [
  {
    id:1,
    sym: User,
    name: "Profile"
  },
  {
    id:2,
    sym:Wallet,
    name: "Wallet"
  },
  {
    id:3,
    sym:Settings,
    name:"Settings"
  },
  {
    id:4,
    sym:Settings,
    name:"Expert Mode"
  },
  {
    id:5,
    sym: LogOut,
    name: "Sign Out"
  }
]

let size = 18;
let active;
let mail = "sdfafhga@ashgah"
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
onMount(() => {
  function handleBodyClick(e) {
    // Only close if click is outside header and popups
    const header = document.querySelector('header');
    const popups = Array.from(document.querySelectorAll('.popup, .Cart, .language-popup'));
    const isHeaderOrPopup = header.contains(e.target) || popups.some(popup => popup.contains(e.target));
    if (!isHeaderOrPopup) {
      closeAllPopups();
    }
  }
  document.body.addEventListener('click', handleBodyClick);
  return () => {
    document.body.removeEventListener('click', handleBodyClick);
  };
});



function toggleLogin(){
  showLogin =!showLogin
}

function selectLang(lang) {
  showLang = false;
  // You can add logi
  // c here to change language
}
</script>

 <header class="fixed top-0 left-0 w-full h-19 border-b border-[#2c313a] flex justify-between items-center px-10 bg-[#14161a] z-50">
 <div class="flex gap-6 items-center text-gray-400">
  <a href="/properties/Ready%20to%20invest"> 
    <img src="https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/cdn/landingpage/favicon2.png" alt="vii" class="w-8">
  </a>
  <a href="/properties/Ready%20to%20invest"
    class="text-[.9rem] hover:text-[#883bed] underline-offset-4"
    class:text-[#883bed]={active === 'Properties'}
    class:underline={active === 'Properties'}
    on:click={() => active = 'Properties'}>
    Properties
  </a>
  <a href="/portfolio"
    class="text-[.9rem] hover:text-[#883bed] underline-offset-4"
    class:text-[#883bed]={active === 'Portfolio'}
    class:underline={active === 'Portfolio'}
    on:click={() => active = 'Portfolio'}>
    Portfolio
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

  <button class="w-9 h-9 rounded-[50%] bg-[#883bed] flex items-center justify-center relative" on:click={toggleLogin}>
    S
  </button>
  {#if showLogin}
    <div class="w-[220px] bg-[#2c313a] fixed top-16 right-10 rounded-lg shadow-lg z-50 p-4 flex flex-col gap-2">
      <div class="mb-2">
        <h3 class="text-white text-sm font-bold">{mail}</h3>
        <p class="text-gray-400 text-xs">Welcome to Viivi</p>
      </div>
      <div class="flex flex-col gap-2">
        {#each popuInfo as item}
          <button class="flex items-center gap-2 text-gray-300 hover:bg-[#883bed] py-1 px-2 rounded-lg w-full text-left">
            <svelte:component this={item.sym} size={16}/>
            <span>{item.name}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}
 </div>
 </header>

{#if showCart}
  <Cart visible={showCart} closeCart={closeCart}/>
{/if}

<style>
</style>

<script>
import "../css/app.css";
import {Globe, ShoppingCart} from "@lucide/svelte";

let size = 18;
</script>

 <header class="w-full h-19 border-b-1 border-[#2c313a] flex justify-between items-center px-10 mb-8">
 <div class="flex gap-6 items-center text-gray-400">
  <a href="/"> 
    <img src="https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/cdn/landingpage/favicon2.png" alt="vii" class="w-7">
  </a>
  <a href="/">
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
  <a href="/cart">
    <ShoppingCart size={size}/>
  </a>

  <div class="w-9 h-9 rounded-[50%] bg-[#883bed] flex items-center justify-center">
    S
  </div>
 </div>
 </header>


 <style>

 </style>
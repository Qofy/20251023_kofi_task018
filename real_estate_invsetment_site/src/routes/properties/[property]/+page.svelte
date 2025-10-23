<script>
  import Header from "$lib/sections/Header.svelte";
  import "../../../lib/css/app.css";
  import {Bed, Bath} from "lucide-svelte"
  import { page } from '$app/stores';
  $: property = $page.params.property;
  let properties = [
    { id: 1, 
      name: "Ready to invest",
      available:1,
      pname: "property",
      src:["https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/bundle-images/Altbau/berlin_altbau.jpg","https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/property-images/Bergmannkiez-Kreuzberg/1750339463041.jpg","https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/property-images/Bergmannkiez-Kreuzberg/1750339464095.jpg","https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/property-images/Bergmannkiez-Kreuzberg/1750339464894.jpg", "https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/property-images/Jaegerstrasse-6-HH-2143/1750330085952.jpg"],
      price:650.000,
      currency:"$",
      valuation: 667.577,
      progress:"1.3%",
    },
    { id: 2, name: "Upcoming" },
    { id: 3, name: "Funded" }
  ];
  $: current = properties.find(p => p.name === property);
  const size = 15
</script>

<Header/>
<main class="bg-[#14161a]  px-10">
  <div class="flex justify-between">
    <div class="flex gap-4">
      {#each properties as p}
        <a href={`/properties/${encodeURIComponent(p.name)}`}>{p.name}</a>
      {/each}
    </div>
    <button>Filter and sort</button>
  </div>
  {#if current}
  <h1 class="text-[1.5rem]">
    {current.available} {current.pname}
  </h1>
    <div class="w-[20rem]  bg-[#222] rounded-lg shadow-lg overflow-hidden mt-8 relative">
      <div class="relative">
        {#if current.src && current.src.length > 0}
          <img src={current.src[0]} alt="Property image" class="w-full h-48 object-cover" />
          <span class="absolute top-2 right-2 bg-[#883bed] text-white text-xs px-2 py-1 rounded-full">
            1/{current.src.length}
          </span>
        {/if}
      </div>
      <div class="px-6 mt-3">
        <div class="flex justify-between text-[.8rem] text-gray-400 mb-2">
          <p>Apartment</p>
          <p class="flex gap-1 items-center">&#183 <Bed size={size}/> 3</p>
          <p class="flex gap-1 items-center">&#183 <Bath size={size}/> 2</p>
          <p>&#183 125 sqm</p>
        </div>
      </div>
      <div class="p-6">
        <!-- <p class="text-sm text-gray-300 mb-2">Available: {current.available}</p> -->
        <!-- <p class="text-sm text-gray-300 mb-2">Type: {current.pname}</p> -->
        <p class="text-sm text-gray-400 mb-2">Price: {current.currency}{current.price}</p>
        <p class="text-sm text-gray-400 mb-2">Valuation: {current.currency}{current.valuation}</p>
        <p class="text-sm text-gray-400 mb-2">Progress: {current.progress}</p>
        <button> View Details</button>
      </div>
    </div>
  {/if}
</main>
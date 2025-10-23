<script>
  import Header from "$lib/sections/Header.svelte";
  import "../../../lib/css/app.css";
  import {Bed, Bath, Square,MapPin,TrendingUp, Funnel} from "lucide-svelte"
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
      location: "Bergmannstr. 5, 10961 Berlin",
      rent: "Rented",
      appreciation: "+2.70%",
      place:"Kreuzberg Elegance"
    },
    { id: 2, name: "Upcoming" },
    { id: 3, name: "Funded" }
  ];
  $: current = properties.find(p => p.name === property);
  $: percent = current && current.progress ? parseFloat(current.progress.replace('%','')) : 0;
  const size = 15
</script>

<Header/>
<main class="bg-[#14161a]  px-10">
  <div class="flex justify-between mb-9">
    <div class="flex gap-10 bg-[#2a2b2d] h-12 w-110 items-center rounded-[10px] px-3.5">
      {#each properties as p}
        <a href={`/properties/${encodeURIComponent(p.name)}`}
          class="py-1.5 px-3 rounded-[10px] {p.name === property ? 'bg-black text-white font-bold' : 'bg-transparent text-gray-300'}">
          {p.name}
        </a>
      {/each}
    </div>
    <button class="flex gap-1.5 items-center cursor-pointer border border-[#2c313a] px-4 rounded-[10px] hover:bg-[#883bed]"><Funnel size=18/> Filter and sort</button>
  </div>
  {#if current}
  <h1 class="text-[1.5rem]">
    {current.available} {current.pname}
  </h1>
    <div class="w-[20rem] bg-[#222] rounded-lg shadow-lg overflow-hidden mt-8 relative transition-transform duration-300 hover:scale-105 group">
      <div class="relative">
        {#if current.src && current.src.length > 0}
          <img src={current.src[0]} alt="Property image" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
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
          <p class="flex gap-1 items-center">&#183 <Square size={size}/> 125 sqm</p>
        </div>
        <p class="flex  text-[.8rem] gap-1 items-center text-gray-400"><MapPin size={size}/> {current.location} <span class="ml-[.5rem] py-1 px-3 rounded-2xl bg-[#05950540] hover:bg-[#883bed] text-[#ffff]">{current.rent}</span></p>
        <p>{current.place}</p>
      </div>
      <div class="p-6 flex flex-col gap-2">
        <!-- <p class="text-sm text-gray-300 mb-2">Available: {current.available}</p> -->
        <!-- <p class="text-sm text-gray-300 mb-2">Type: {current.pname}</p> -->
        <p class="text-sm text-gray-400 mb-2 w-full flex justify-between">Listing price <span class="text-[#ffff] font-bold">{current.currency}{current.price}</span></p>
        <p class="text-sm text-gray-400 mb-2 w-full flex justify-between">Current market valuation <span class="text-[#ffff] font-bold">{current.currency}{current.valuation}</span></p>
        <p class="text-sm text-gray-400 mb-2 w-full flex justify-between">Funding Progress <span class="text-[#ffff] font-bold">{current.progress}</span></p>
        <div class="bg-gray-700 w-full h-2 rounded relative mb-2">
          <div class="bg-[#883bed] h-2 rounded" style={`width: ${percent}%`}></div>
        </div>
        <p class="text-sm text-gray-400 mb-2 w-full flex justify-between">Appreciation <span class="flex gap-1 text-[green] items-center text-[1rem] font-bold"><TrendingUp color="green" size={12}/>{current.appreciation}</span></p>
        <a href="#" class="px-22 py-3 bg-[#883bed] rounded-[8px]">
           View Details
        </a>
      </div>
    </div>
  {/if}
</main>
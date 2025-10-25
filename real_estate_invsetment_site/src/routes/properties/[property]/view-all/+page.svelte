<script>
  import { page } from '$app/stores';
  import {Bed, Bath, Square,MapPin,TrendingUp, ChevronLeft, ChevronRight} from "lucide-svelte";
  import Header from '$lib/sections/Header.svelte';
  $: property = $page.params.property;
  let properties = [
    { id: 1, 
      name: "Ready to invest",
      available:1,
      pname: "property",
      src:["https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/bundle-images/Altbau/berlin_altbau.jpg","https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/property-images/Bergmannkiez-Kreuzberg/1750339463041.jpg","https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/property-images/Bergmannkiez-Kreuzberg/1750339464095.jpg","https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/property-images/Bergmannkiez-Kreuzberg/1750339464894.jpg", "https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/property-images/Jaegerstrasse-6-HH-2143/1750330085952.jpg"],
      price:650000,
      currency:"$",
      valuation: 667577,
      progress:"1.3%",
      location: "Bergmannstr. 5, 10961 Berlin",
      rent: "Rented",
      appreciation: "+2.70%",
      place:"Kreuzberg Elegance"
    },
    { id: 2, name: "Upcoming", src: [], available: 0, pname: "property", price: 0, currency: "$", valuation: 0, progress: "0%", location: "", rent: "", appreciation: "", place: "" },
    { id: 3, name: "Funded", src: [], available: 0, pname: "property", price: 0, currency: "$", valuation: 0, progress: "0%", location: "", rent: "", appreciation: "", place: "" }
  ];
  $: current = properties.find(p => p.name === property);
  $: images = current && current.src ? current.src : [];
  $: details = current || {};
  const size = 15;
  let mainImageIndex = 0;
  function prevImage() {
    if (images.length) mainImageIndex = (mainImageIndex - 1 + images.length) % images.length;
  }
  function nextImage() {
    if (images.length) mainImageIndex = (mainImageIndex + 1) % images.length;
  }
</script>
<main class="min-h-screen bg-[#14161a] px-10 mt-28">
  {#if current}
    <button class="mb-8 px-6 py-2 cursor-pointer text-white rounded-lg font-semibold hover:bg-[#6a2fc9] transition" on:click={() => window.location.href = `/properties/${current.name}`}> 
      &#8592; Back to {current.name}
    </button>
  {:else}
    <div class="mb-8 px-6 py-2 text-white rounded-lg font-semibold bg-red-600">Property not found. <a href="/properties/Ready%20to%20invest" class="underline">Go to default property</a></div>
  {/if}
  <div class="grid grid-cols-2 gap-10">
    <!-- Images Section -->
    <div class="flex flex-col gap-4">
      <div class="relative">
        {#if images.length > 0}
          <img src={images[mainImageIndex]} alt={`Property image ${mainImageIndex+1}`} class="w-full h-100 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mb-2" />
          <button class="absolute top-1/2 left-2 -translate-y-1/2 bg-[#222] p-2 rounded-full shadow hover:bg-[#883bed]" on:click={prevImage} aria-label="Previous image">
            <ChevronLeft color="#fff" size={22}/>
          </button>
          <button class="absolute top-1/2 right-2 -translate-y-1/2 bg-[#222] p-2 rounded-full shadow hover:bg-[#883bed]" on:click={nextImage} aria-label="Next image">
            <ChevronRight color="#fff" size={22}/>
          </button>
          <span class="absolute bottom-2 right-4 bg-[#883bed] text-white text-xs px-2 py-1 rounded-full">
            {mainImageIndex+1}/{images.length}
          </span>
        {:else}
          <div class="w-full h-56 flex items-center justify-center bg-gray-800 rounded-lg text-gray-400">No images available</div>
        {/if}
      </div>
      <div class="flex gap-2">
        {#each images as img, i}
          <button type="button" class="cursor-pointer border-2 rounded-lg {mainImageIndex === i ? 'border-[#883bed]' : 'border-transparent'}" on:click={() => mainImageIndex = i} aria-label={`Show image ${i+1}`}> 
            <img src={img} alt={`Thumbnail ${i+1}`} class="w-30 h-30 object-cover rounded-lg" />
          </button>
        {/each}
      </div>
    </div>
    <!-- Content Section -->
    <div class="flex flex-col gap-4 justify-start">
      <span class="inline-block bg-[#8fff8f14] text-[#0ab10a] px-3 py-1 rounded-2xl w-fit font-semibold">{details.rent || 'Rented'}</span>
      <p class="flex text-[.9rem] gap-1 items-center text-gray-400"><MapPin size={size}/> {details.location}</p>
      <p class="text-gray-400 mb-2">{details.place}</p>
      <div class=" rounded-lg p-4 shadow-lg">
        <p class="text-sm text-gray-400 mb-2 w-full flex justify-between">Funding Progress <span class="text-[#ffff] font-bold">{details.progress}</span></p>
        <div class="bg-gray-700 w-full h-2 rounded relative mb-2">
          <div class="bg-[#883bed] h-2 rounded" style={`width: ${parseFloat(details.progress)}%`}></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 bg-[#222] rounded-lg p-4 shadow-lg">
        <div class="flex flex-col items-center">
          <span class="text-xs text-gray-400 mb-1">Net Rental Yield</span>
          <span class="font-bold  text-lg">3%</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-xs text-gray-400 mb-1">Annual Rent</span>
          <span class="font-bold text-lg">15,000$</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-xs text-gray-400 mb-1">Verified Appraisal</span>
          <span class="font-bold text-lg">650,000$</span>
        </div>
      </div>
      <div class="bg-[#222] roundered p-6 shadow-lg mt-4">
        <h3 class="text-xl font-bold mb-2">Return Calculator</h3>
        <p class="text-gray-400 mb-2">Investment Amount</p>
        <div class="bg-gray-700 w-full h-2 rounded relative mb-2">
          <div class="bg-[#883bed] h-2 rounded" style="width: 50%"></div>
        </div>
        <div class="flex  gap-2">
          <div class="flex items-center justify-between flex-col rounded-lg  py-2">
            <span class="flex items-center text-[.8rem] gap-2 text-gray-300">
              Proj. Value
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="12" fill="#883bed">i</text></svg>
            </span>
            <span class="font-bold ">15.200 €</span>
          </div>
          <div class="flex items-center flex-col justify-between  rounded-lg px-4 py-2">
            <span class="flex items-center gap-2 text-gray-300 text-[.8rem]">
              Total Return
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><text x="12" y="16" text-anchor="middle" font-size="12" fill="#883bed">i</text></svg>
            </span>
            <span class="font-bold text-green-500">+52.0%</span>
          </div>
        </div>
        <button class="mt-4 w-full bg-[#883bed] text-white py-3 rounded-lg font-semibold hover:bg-[#6a2fc9] transition cursor-pointer">Invest Now</button>
      </div>
      
    </div>
  </div>
</main>

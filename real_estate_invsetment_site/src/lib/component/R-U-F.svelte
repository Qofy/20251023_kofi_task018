<script>
   import Header from "$lib/sections/Header.svelte";
  import "$lib/css/app.css";
  import { Funnel } from "lucide-svelte";

  let properties = [
    "Ready to invest",
    "Upcoming",
    "Funded",
  ];
  let activeProperty = properties[0];
</script>


<div class="flex justify-between mb-9">
    <div class="flex gap-10 bg-[#2a2b2d] h-12 w-md items-center rounded-lg px-4">
      {#each properties as p}
        <a
          href={`/properties/${encodeURIComponent(p)}`}
          class={`py-1.5 px-3 rounded-lg ${p === activeProperty ? 'bg-black text-white font-bold' : 'bg-transparent text-gray-300'}`}
        >
          {p}
        </a>
      {/each}
    </div>
    <button class="flex gap-1.5 items-center cursor-pointer border border-[#2c313a] px-4 rounded-lg hover:bg-[#883bed]">
      <span><Funnel size=18 /></span> Filter and sort
    </button>
  </div>
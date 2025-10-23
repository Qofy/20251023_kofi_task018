<script>
  import Header from "$lib/sections/Header.svelte";
  import "../../lib/css/app.css";

  let properties = [
    "Ready to invest",
    "Upcoming",
    "Funded"
  ]
</script>

<main class="bg-[#14161a]">
  <Header/>
  <div class="flex justify-between px-10">
    <div class="flex gap-4 bg-[#a8aaaf]">
      {#each properties as property}
        <a href={`/properties/${encodeURIComponent(property)}`}>
          {property}
        </a>
      {/each}
    </div>
     <button>Filter and sort</button>
  </div>
  
</main>

<script>
import "../css/app.css"
import Overview from "./Overview.svelte";
let activeTab = 'overview';
export let apartmentIndex = 0;
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'financial', label: 'Financials' },
  { id: 'location', label: 'Location' },
  { id: 'document', label: 'Documents' }
];
</script>

<main class="mt-12">
  <nav class="flex items-center justify-between mb-6 bg-[#1d2025] h-10 px-1 roundered">
    {#each tabs as tab}
      <a
        href="#"
        class="px-30 py-1 rounded-lg text-gray-400 transition-all {activeTab === tab.id ? 'bg-black text-white' : 'text-gray-400'}"
        on:click|preventDefault={() => activeTab = tab.id}
      >
        {tab.label}
      </a>
    {/each}
  </nav>
  <div id="bdy" class="rounded-lg p-6 min-h-[120px]">
    {#if activeTab === 'overview'}
      <div id="overview">
        <Overview index={apartmentIndex}/>
      </div>
    {:else if activeTab === 'financial'}
      <div id="financial">financial</div>
    {:else if activeTab === 'location'}
      <div id="location">location</div>
    {:else if activeTab === 'document'}
      <div id="document">document</div>
    {/if}
  </div>
</main>


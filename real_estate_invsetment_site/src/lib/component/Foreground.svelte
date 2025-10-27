<script>
import "../css/app.css"
import Financial from "./Financial.svelte";
import FinancialMetric from "./FinancialMetric.svelte";
import Overview from "./Overview.svelte";
import {CircleAlert} from "lucide-svelte"
import { apartmentdata } from "$lib/data/apartment-data";
let activeTab = 'overview';
export let apartmentIndex = 0;
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'financial', label: 'Financials' },
  { id: 'location', label: 'Location' },
  { id: 'document', label: 'Documents' }
];
const apartment = apartmentdata[apartmentIndex];
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
      <div id="financial" class="flex flex-col gap-5">
        <h1 class="font-medium text-2xl">Financial Performance</h1>
        <div class="grid grid-cols-4 gap-5">

          <FinancialMetric value={apartment.price} label="Original Price" icon={CircleAlert} />
  <FinancialMetric value={apartment.valuation} label="Current Value" icon={CircleAlert} />
  <FinancialMetric value={apartment.progress} label="Net Rental Yield" icon={CircleAlert} />
  <FinancialMetric value={apartment.progress} label="Annualised ROI" icon={CircleAlert} />
        </div>

        <div>
          <h3>Rental Income Details</h3>
          <FinancialMetric value={apartment.monthlyrent} label="Monthly rent" icon={CircleAlert}/>
        </div>

      </div>
    {:else if activeTab === 'location'}
      <div id="location">location</div>
    {:else if activeTab === 'document'}
      <div id="document">document</div>
    {/if}
  </div>
</main>


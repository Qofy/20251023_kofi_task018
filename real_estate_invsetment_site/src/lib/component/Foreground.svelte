<script>
import "../css/app.css"
import Financial from "./Financial.svelte";
import FinancialMetric from "./FinancialMetric.svelte";
import Overview from "./Overview.svelte";
import {CircleAlert, Wallet, Calendar, TrendingUp} from "lucide-svelte"
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
import { _ } from "$lib/i18n.js";

// Investment amount state and slider settings
let investmentAmount = apartment?.price ?? 100000;
const minInvestment = 0;
const maxInvestment = Math.max(apartment?.valuation ?? 200000, 200000);
const step = 100;

// Ensure numeric type and compute percent for tracker
$: investmentAmount = +investmentAmount || 0;
$: investPercent = Math.max(0, Math.min(100, Math.round(((investmentAmount - minInvestment) / (maxInvestment - minInvestment)) * 100)));

const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
$: formatted = currencyFormatter.format(investmentAmount);

// Projection calculations
const totalReturnPercentBase = 52.1; // base percent used for projections
$: investFraction = apartment?.price ? Math.max(0, Math.min(1, investmentAmount / apartment.price)) : 0;
$: scaledReturnPercent = +(totalReturnPercentBase * investFraction).toFixed(1);
$: monthlyRentalIncome = Math.round((apartment?.monthlyrent || 0) * investFraction);
$: projectedValue10 = Math.round((apartment?.valuation || 0) * (1 + scaledReturnPercent / 100));
$: formattedMonthly = currencyFormatter.format(monthlyRentalIncome);
$: formattedProjected = currencyFormatter.format(projectedValue10);
</script>

<main class="mt-12">
  <nav class="flex items-center justify-between mb-6 bg-[#1d2025] h-10 px-1 roundered">
    {#each tabs as tab}
      <button
        type="button"
        class="px-30 py-1 rounded-lg text-gray-400 transition-all {activeTab === tab.id ? 'bg-black text-white' : 'text-gray-400'}"
        on:click={() => activeTab = tab.id}
      >
        {tab.label}
      </button>
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

        <div class="flex flex-col gap-4">
          <h3>Rental Income Details</h3>
          <FinancialMetric value={apartment.monthlyrent} label="Monthly rent" icon={CircleAlert}/>
        </div>

        <div>
          <div>
            <h2 class="font-medium text-2xl">{$_('Investment & Property Projections')}</h2>
            <p class="text-[.8rem] text-color">{$_('Adjust your investment amount and compare different projections')}</p>
          </div>

          <div class="mt-4 w-full">
            <label for="investment-amount" class="text-sm mb-2 block">{$_('Investment Amount')}</label>
            <div class="flex items-center gap-4">
              <input
                type="number"
                id="investment-amount"
                min={minInvestment}
                max={maxInvestment}
                step={step}
                bind:value={investmentAmount}
                class="w-36 bg-[#0f1113] border border-[#2c313a] rounded px-2 py-1 text-white"
                aria-label={$_('Investment Amount')}
              />

              <!-- range slider synced with the numeric input -->
              <input
                type="range"
                min={minInvestment}
                max={maxInvestment}
                step={step}
                bind:value={investmentAmount}
                class="flex-1" />
            </div>

            <div class="mt-3 h-2 w-full bg-[#111315] rounded overflow-hidden">
              <div class="h-full bg-[#883bed]" style="width: {investPercent}%"></div>
            </div>

            <div class="mt-2 text-xs text-gray-400">{formatted}</div>
          </div>

          <div class="grid grid-cols-3">
            <div class="flex flex-col border border-[#2c313a] py-5 px-3 roundered">
              <div class="flex gap-3 items-center">
                <Wallet size={15}/>
                <p class="text-[.8rem]">Monthly Rental income</p>
              </div>
              <h2 class="text-[2rem]"><span>{formattedMonthly}</span></h2>
            </div>

             <div class="flex flex-col border border-[#2c313a] py-5 px-3 roundered">
              <div class="flex gap-3 items-center">
                <Calendar size={15}/>
                <p class="text-[.8rem]">Projected Value (10 Years)</p>
              </div>
              <h2 class="text-[2rem]"><span>{formattedProjected}</span></h2>
            </div>

             <div class="flex flex-col border border-[#2c313a] py-5 px-3 roundered">
              <div class="flex gap-3 items-center">
                <TrendingUp size={15}/>
                <p class="text-[.8rem]">Total Return (10 Years)</p>
              </div>
              <h2 class="text-[2rem]">{scaledReturnPercent > 0 ? `+${scaledReturnPercent}%` : `${scaledReturnPercent}%`}</h2>
            </div>
          </div>
        </div>
        

      </div>
    {:else if activeTab === 'location'}
      <div id="location">location</div>
    {:else if activeTab === 'document'}
      <div id="document">document</div>
    {/if}
  </div>
</main>


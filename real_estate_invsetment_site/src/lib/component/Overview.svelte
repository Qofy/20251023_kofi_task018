<script>
  import { apartmentdata } from "$lib/data/apartment-data";
  import "../css/app.css"
  import { Home, Bed, CircleCheck, Square, Bath, Wallet } from "lucide-svelte"
  import Criteria from "./Criteria.svelte";
  import { _ } from "$lib/i18n.js";

  export let index = 0; // Pass the apartment index as a prop

  // Features to display (dynamic for each apartment)
  const icons = { Home, Bed, CircleCheck, Square, Bath, Wallet };
  const features = [
    { label: "Property Type", value: apartmentdata[index].type, icon: Home },
    { label: "Bedrooms", value: apartmentdata[index].bedroom, icon: Bed },
    { label: "Status", value: apartmentdata[index].rent, icon: CircleCheck },
    { label: "Living Area", value: apartmentdata[index].area, icon: Square },
    { label: "Bathrooms", value: apartmentdata[index].bath, icon: Bath },
    { label: "Wallet", value: "Fully Funded", icon: Wallet },
  ];
</script>

<main class="flex flex-col gap-8">
  <!--Description-->
  <div class="flex flex-col gap-4.5 border border-[#2c313a] p-6 roundered bg-[#181b20]">
    <h1 class="font-medium text-2xl">{$_('Proper Description')}</h1>
    <p class="text-gray-400">{apartmentdata[index].description}</p>
  </div>

  <!--Key Features-->
  <div class="flex flex-col gap-10 border border-[#2c313a] p-6 roundered bg-[#181b20]">
    <h1 class="font-medium text-2xl">{$_('Key Features')}</h1>
    <div class="grid grid-cols-2 gap-6">
      {#each features as feature}
        <div class="flex gap-2 items-center">
          <div class="bg-[#2e241e] w-10 h-10 flex items-center justify-center rounded-full">
            <svelte:component this={feature.icon} color="#d2510e" />
          </div>
          <div class="flex flex-col">
            <p class="text-color text-[.8rem]">{$_(feature.label)}</p>
            <h2 class="text-[.9rem]">{feature.value === 'Fully Funded' ? $_('Fully Funded') : feature.value}</h2>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!--Investment Criteria-->
  <div class="bg-[#181b20] p-6 roundered border border-[#2c313a] flex flex-col gap-8">
    <div>
      <h1 class="font-medium text-2xl">{$_('Investment Criteria')}</h1>
      <p class="text-color">{$_('Click on the criteria to open a small popup with additional explanations and facts')}</p>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="flex flex-col gap-3">
        <div class="flex gap-3">
          <div class="round-num">1</div> 
          <h3>{$_('Financial Goals')}</h3>
        </div>
        <Criteria/>
        <Criteria/>
        <Criteria/>
      </div>

      <div class="flex flex-col gap-3">
        <div class="flex gap-3">
          <div class="round-num">2</div>
          <h3>{$_('Location Factors')}</h3>
        </div>
        <Criteria/>
        <Criteria/>
        <Criteria/>
      </div>

      <div class="flex flex-col gap-3">
         <div class="flex gap-3">
          <div class="round-num">3</div>
          <h3>{$_('Investment Values')}</h3>
        </div>
        <Criteria/>
        <Criteria/>
        <Criteria/>
      </div>
    </div>
  </div>
</main>
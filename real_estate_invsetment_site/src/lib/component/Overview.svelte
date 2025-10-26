<script>
  import { apartmentdata} from "$lib/data/apartment-data";
  import "../css/app.css"
  import { Home, Bed, CircleCheck,Square,Bath,Wallet } from "lucide-svelte"
	import Criteria from "./Criteria.svelte";

  // Features to display
  const features = [
    { label: "Property Type", value: apartmentdata[0].type, icon: Home },
    { label: "Net Rental Yield", value: apartmentdata[0].bedroom, icon: Bed },
    {label:"Status", value:apartmentdata[0].rent, icon:CircleCheck},
    { label: "Living Area", value: apartmentdata[0].area, icon: Square },
    { label: "Place", value: apartmentdata[0].bath, icon: Bath },
    { label: "Funding", value:"Ready to invest" , icon:Wallet},
  ];
</script>

<main class="flex flex-col gap-8">
  <!--Description-->
  <div class="flex flex-col gap-4.5 border border-[#2c313a] p-6 roundered bg-[#181b20]">
    <h1 class="font-medium text-2xl">Proper Description</h1>
    <p class="text-gray-400">{apartmentdata[0].description}</p>
  </div>

  <!--Key Feautures-->
  <div class="flex flex-col gap-10 border border-[#2c313a] p-6 roundered bg-[#181b20]">
    <h1 class="font-medium text-2xl">Key Features</h1>
    <div class="grid grid-cols-2 gap-6">
      {#each features as feature}
        <div class="flex gap-2 items-center">
          <div class="bg-[#2e241e] w-10 h-10 flex items-center justify-center rounded-full">
            <svelte:component this={feature.icon} color="#d2510e" />
          </div>
          <div class="flex flex-col">
            <p class="text-color text-[.8rem]">{feature.label}</p>
            <h2 class="text-[.9rem]">{feature.value}</h2>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!--Investment Criteria-->
  <div class="bg-[#181b20] p-6 roundered border border-[#2c313a] flex flex-col gap-8">
    <div>
      <h1 class="font-medium text-2xl">Investment Criteria</h1>
      <p class="text-color">Click on the criteria to open a small popup with additional explanations and facts</p>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="flex flex-col gap-3">
        <div class="flex gap-3">
          <div class="round-num">1</div> 
          <h3>Financial Goals</h3>
        </div>
        <Criteria/>
        <Criteria/>
        <Criteria/>
      </div>

      <div class="flex flex-col gap-3">
        <div class="flex gap-3">
          <div class="round-num">2</div>
          <h3>Location Factors</h3>
        </div>
        <Criteria/>
        <Criteria/>
        <Criteria/>
      </div>

      <div class="flex flex-col gap-3">
         <div class="flex gap-3">
          <div class="round-num">3</div>
          <h3>Investment Values</h3>
        </div>
        <Criteria/>
        <Criteria/>
        <Criteria/>
      </div>
    </div>
  </div>
</main>
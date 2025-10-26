<script>
  export let open = false;
  export let onClose = () => {};
  let investment = 0;
</script> 

{#if open}
  <div class="fixed inset-0 z-40 flex items-center justify-center">
    <!-- Blur background -->
    <div class="absolute inset-0 bg-black/30 backdrop-blur-sm z-40" on:click={onClose}></div>
    <!-- Popup content -->
    <div class="relative z-50 bg-[#14161a] rounded-lg shadow-lg p-8 max-w-lg w-full">
      <!-- Property Card -->
      <div class="flex  gap-4 border border-[#2c313a] px-2 py-1 rounded-lg shadow-lg items-center overflow-hidden w-full mb-6">
        <!-- Image -->
        <img src="https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/bundle-images/Altbau/berlin_altbau.jpg" alt="Property" class="w-20 h-20 roundered object-cover" />
        <!-- Details -->
        <div class="flex flex-col">
            <h2 class="text-xl font-light text-[.9rem]">Kreuzberg Elegance</h2>
            <p class="text-gray-600 text-[.8rem]">Bergmannstr. 5, 10961 Berlin</p>
            <div class="flex gap-2">
              <p class="text-gray-500 text-[.7rem] border border-gray-800 p-[.1rem] rounded-[40px]">Apartment</p>
              <p class="text-green-600 font-semibold text-[.7rem] border border-gray-800 p-[.1rem] rounded-[40px]">Net Rental Yield: 3%</p>
            </div>
        </div>
        <div class="roundered">
          <span class="block text-gray-500 text-[.8rem]">Current Value</span>
          <span class="font-bold">650,000 $</span>
        </div>
      </div>
      <!-- End Property Card -->

      <div class="mb-6">
        <label class="block text-white text-[1rem] mb-2" for="investment-amount">Investment Amount</label>
        <div class="relative">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-white">$</span>
          <input
            id="investment-amount"
            type="number"
            min="0"
            bind:value={investment}
            placeholder="0"
            class="w-full pl-8 pr-4 py-2 rounded-lg bg-[#222] text-white border border-[#883bed] focus:outline-none focus:border-[#6a2fc9]"
          />

        </div>
        <div class="flex mt-2 text-gray-400 text-[.9rem]">
          <p>Minimum: 500 $</p>
          <p>Maimum: 50.000 $</p>
        </div>

        <div>
        <span class="block text-white text-[1rem] mb-2" for="investment-amount">Investment Amount</span>

        </div>

      </div>
      <h2 class="text-2xl font-bold mb-4">Invest Now</h2>
      <p class="mb-6">Confirm your investment or add details here.</p>
      <button class="bg-[#883bed] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6a2fc9] transition" on:click={onClose}>Close</button>
    </div>
  </div>
{/if}

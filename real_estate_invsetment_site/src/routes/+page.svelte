<script>
  import { goto } from '$app/navigation';
  let showWelcome = true;
  function handleAction(path) {
    showWelcome = false;
    goto(path);
  }
</script>

{#if showWelcome}
  <main class="bg-[#14161a] min-h-screen flex flex-col items-center justify-center">
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold mb-2 text-[#883bed]">Welcome to Viivi</h1>
      <p class="text-lg text-gray-300">Invest in Premium Real Estate with Blockchain Technology</p>
    </div>
    <div class="flex gap-4">
      <button on:click={() => handleAction('/create-account')} class="bg-[#883bed] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6a2fc9] transition">Create Account</button>
      <button on:click={() => handleAction('/sign-in')} class="bg-[#222] text-white px-6 py-2 rounded-lg font-semibold border border-[#883bed] hover:bg-[#883bed] hover:text-white transition">Sign In</button>
    </div>
  </main>
<!-- {:else}
  <script>
    goto('/properties/Ready%20to%20invest');
  </script> -->
{/if}
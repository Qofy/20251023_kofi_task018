<script>
  import CreateAccount from "$lib/sections/CreateAccount.svelte";
  import bgVideo from "../lib/assets/bg-video.mp4";
  import SignIn from "$lib/sections/SignIn.svelte";
  let showSignIn = false;
</script>

<main class="grid grid-cols-2 ">
  <div class="flex flex-col justify-center items-center py-15 gap-10">
       <img src="https://wytpcfutzfnrjvtendxf.supabase.co/storage/v1/object/public/cdn/landingpage/favicon2.png" alt="vii" class="w-7">
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-[#883bed] text-4xl font-bold">Welcome to Viivi</h1>
      <p>Invest in Premium Real Estate with Blockchain Technology</p>
    </div>
    <div class="flex gap-4 mt-6 flex-col justify-center items-center">
      <div class="flex gap-4">
        <button 
          class="bg-[#883bed] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6a2fc9] transition" 
          on:click={() => showSignIn = false}
        >
          Create Account
        </button>
        <button 
          class="bg-[#222] text-white px-6 py-2 rounded-lg font-semibold border border-[#883bed] hover:bg-[#883bed] hover:text-white transition" 
          on:click={() => showSignIn = true}
        >
          Sign In
        </button>
      </div>
      <div>
        {#if showSignIn}
          <SignIn/>
        {:else}
          <CreateAccount/>
        {/if}
      </div>
    </div>
  </div>
  <div class="relative h-full w-full flex items-center justify-center">
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
      <source src={bgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="relative z-10 w-full h-full flex items-center justify-center">
      <!-- You can add overlay content here if needed -->
    </div>
  </div>
</main>

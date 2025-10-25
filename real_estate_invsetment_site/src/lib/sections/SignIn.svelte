<script>
  import { goto } from '$app/navigation';
  import { fly } from 'svelte/transition';
  let email = '';
  let password = '';
  let error = '';

  function handleSubmit() {
    if (!email || !password) {
      error = 'Email and password are required.';
      return;
    }
    // Simulate sign in
    error = '';
    localStorage.setItem('authenticated', 'true');
    goto('/properties/Ready%20to%20invest');
  }
</script>

<main class="flex flex-col items-center justify-center " id="sign-in">
  <div class=" p-8 rounded-lg shadow-lg w-full max-w-md" in:fly={{ x: 200, duration: 400 }}>
    <h2 class="text-2xl font-bold mb-6 text-[#883bed]">Sign In</h2>
    {#if error}
      <p class="text-red-500 mb-4">{error}</p>
    {/if}
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4">
      <input type="email" placeholder="Email" bind:value={email} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <input type="password" placeholder="Password" bind:value={password} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <button type="submit" class="bg-[#883bed] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6a2fc9] transition">Sign In</button>
    </form>
  </div>
</main>

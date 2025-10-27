<script>
  import { goto } from '$app/navigation';
  let name = '';
  let email = '';
  let password = '';
  let confirmPassword = '';
  let error = '';

  function handleSubmit() {
    if (!name || !email || !password || !confirmPassword) {
      error = 'All fields are required.';
      return;
    }
    if (password !== confirmPassword) {
      error = 'Passwords do not match.';
      return;
    }
    // Simulate account creation
    error = '';
    document.cookie = "authenticated=true; path=/";
    window.location.href = '/properties/Ready%20to%20invest';
  }
</script>

<main class=" flex flex-col items-center justify-center " id="create-account">
  <div class="p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-[#883bed]">Create Account</h2>
    {#if error}
      <p class="text-red-500 mb-4">{error}</p>
    {/if}
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4">
      <input type="text" placeholder="Name" bind:value={name} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <input type="email" placeholder="Email" bind:value={email} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <input type="password" placeholder="Password" bind:value={password} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <input type="password" placeholder="Confirm Password" bind:value={confirmPassword} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <button type="submit" class="bg-[#883bed] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6a2fc9] transition">Create Account</button>
    </form>
  </div>
</main>

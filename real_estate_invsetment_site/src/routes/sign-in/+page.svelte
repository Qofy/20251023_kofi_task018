<script>
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
    alert('Signed in!');
  }
</script>

<main class="min-h-screen flex flex-col items-center justify-center bg-[#14161a]">
  <div class="bg-[#222] p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-[#883bed]">Sign In</h2>
    {#if error}
      <p class="text-red-500 mb-4">{error}</p>
    {/if}
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4">
      <input type="email" placeholder="Email" bind:value={email} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <input type="password" placeholder="Password" bind:value={password} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <button type="submit" class="bg-[#883bed] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6a2fc9] transition">Sign In</button>
    </form>
    <p class="mt-4 text-gray-400">Don't have an account? <a href="/create-account" class="text-[#883bed] underline">Create Account</a></p>
  </div>
</main>

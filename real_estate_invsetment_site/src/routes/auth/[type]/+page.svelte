<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  let type = $page.params.type;
  let email = '';
  let password = '';
  let error = '';
  let name = '';

  function handleSubmit() {
    if (!email || !password || (type === 'create-account' && !name)) {
      error = 'All fields are required.';
      return;
    }
    error = '';
    if (type === 'sign-in') {
      // Simulate sign in
      goto('/properties/Ready%20to%20invest');
    } else {
      // Simulate create account
      goto('/properties/Ready%20to%20invest');
    }
  }
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-[#14161a]">
  <div class="bg-[#222] p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-[#883bed]">{type === 'sign-in' ? 'Sign In' : 'Create Account'}</h2>
    {#if error}
      <p class="text-red-500 mb-4">{error}</p>
    {/if}
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-4">
      {#if type === 'create-account'}
        <input type="text" placeholder="Name" bind:value={name} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      {/if}
      <input type="email" placeholder="Email" bind:value={email} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <input type="password" placeholder="Password" bind:value={password} class="px-4 py-2 rounded bg-[#14161a] text-white border border-[#883bed]" />
      <button type="submit" class="bg-[#883bed] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6a2fc9] transition">{type === 'sign-in' ? 'Sign In' : 'Create Account'}</button>
    </form>
  </div>
</main>

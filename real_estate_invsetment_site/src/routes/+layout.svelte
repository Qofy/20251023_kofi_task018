<script>
		import favicon from '$lib/assets/favicon.svg';
		import Header from '$lib/sections/Header.svelte';
		import { page } from '$app/stores';

		let { children } = $props();
</script>

<script context="module">
	export async function load({ url, cookies }) {
		if (url.pathname !== '/auth') {
			const authenticated = cookies.get('authenticated');
			if (!authenticated) {
				return {
					status: 302,
					redirect: '/auth'
				};
			}
		}
		return {};
	}
</script>
<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $page.url.pathname !== '/auth'}
	<Header/>
{/if}
{@render children?.()}

<script>
	import '$lib/i18n.js';
	import { locale } from '$lib/i18n.js';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/sections/Header.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let { children } = $props();
	// messages are preloaded in the i18n bootstrap so formatting is safe
	let i18nReady = true;
</script>

<script module>
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

	{#if $page.url.pathname !== '/auth' && i18nReady}
		<Header/>
	{/if}

	{#if i18nReady}
		{@render children?.()}
	{/if}

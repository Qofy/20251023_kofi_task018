<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/sections/Header.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let { children } = $props();

	onMount(() => {
		// Simple demo: check localStorage for 'authenticated'
		if (!localStorage.getItem('authenticated')) {
			goto('/auth');
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $page.url.pathname !== '/auth'}
	<Header/>
{/if}
{@render children?.()}

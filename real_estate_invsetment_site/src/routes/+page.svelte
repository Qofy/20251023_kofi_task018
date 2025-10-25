<script context="module">
  import { redirect } from "@sveltejs/kit";
  export function load() {
    throw redirect(307, "/properties/Ready%20to%20invest");
  }
</script>

<script>
 import RUF from "$lib/component/R-U-F.svelte";
</script>

<main class="bg-[#14161a] px-10 mt-30">
 <RUF/>
</main>

<script>
import "$lib/css/app.css"
import {TrendingUp} from "lucide-svelte"

export let icon = TrendingUp;
export let color = "#16703a";
export let h2 = "Long-term Wealth Building";
export let p = "Your bundle is the perfect building block for your long-term wealth accumulation – secure properties with stable appreciation over years.";
export let bg = "#182c26";
</script>

<div class="border border-[#2c313a] roundered p-3 flex gap-4">
  <div class="w-20 h-10 rounded-[50%] flex items-center justify-center" style="background:{bg}">
    <svelte:component this={icon} color={color}/>
  </div>
  <div class="text-[.7rem]">
    <h2 class="text-[.9rem]">{h2}</h2>
    <p class="text-color">{p}</p>
  </div>
</div>
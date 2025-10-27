<!-- <script>
  import { apartmentdata } from "$lib/data/apartment-data";
  import {CircleAlert} from "lucide-svelte"
  import "$lib/css/app.css"

  export let index;
  let icon = CircleAlert
  let color = "white"
  let p = "Original Price"
  let size =15
  let price =apartmentdata[index].price;

</script>

<div class="border border-[#2c313a] flex flex-col items-center justify-center py-3 roundered">
<h3 class="font-bold text-[2rem]">{price} {apartmentdata[index].currency}</h3>
<div class="flex gap-2 items-center">
  <p class="text-color">{p}</p>
  <svelte:component this={icon} size ={size}/>
</div>
</div> -->
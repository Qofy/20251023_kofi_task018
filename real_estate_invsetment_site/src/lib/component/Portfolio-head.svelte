<script>
import "../css/app.css"
const {head, amount} = $props()
</script>

<div class="bg-[#1a1c22] h-25 w-70 flex flex-col justify-center px-7 rounded-[10px]">
  <p class="text-gray-400">{head}</p>
  <h2 class="text-[1.5rem] font-bold">
   {amount}
  </h2>
</div>
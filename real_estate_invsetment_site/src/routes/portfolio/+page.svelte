<script>
  import Header from "$lib/sections/Header.svelte";
  import "../../lib/css/app.css";
  import PortfolioHead from "$lib/component/Portfolio-head.svelte";
    import {FileText, Building2} from "lucide-svelte"

</script>

<main class="bg-[#14161a] flex flex-col gap-10 px-10 mt-28">
  <div class="flex justify-between">
    <PortfolioHead head="Total portfolio value" amount="0,00$"/>
    <PortfolioHead head="Total amount invested" amount="0,00$"/>
    <PortfolioHead head="Total rental income to date" amount="0,00$"/>
    <PortfolioHead head="PROP Tokens" amount="0,00$"/>
  </div>
  <div class="flex bg-[#1a1c22] h-30 items-center gap- px-10 roundered">
    <FileText color="#552ad0"/>
    <h3 class="text-[.9rem]">Monthly Statemwnt history</h3>
  </div>
  <h3 class="font-normal text-2xl">Your investments</h3>
  <div class="bg-[#1a1c22] flex flex-col gap-6 justify-center items-center h-84 roundered">
    <Building2/>
    <h3 class="font-bold text-[1.1rem]">Your investment journey is one step away!</h3>
    <p class="text-gray-400 max-w-118 text-center">Great progress! Complete the remaining verification steps to start investing.</p>
    <a href="#" class="bg-[#883bed] px-6 py-3.5 roundered">Complete verification</a>

  </div>
</main>

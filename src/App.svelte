<script>
  import stage from "./stageStore";
  import Onboard from "./Onboard.svelte";
  import Mainscreen from "./Mainscreen.svelte";
  import Statistics from "./Statistics.svelte";
  import Cart from "./Cart.svelte";
</script>

<style>

</style>

<h1>Helloworld</h1>
{#if $stage === 'onboard'}
  <Onboard />
{:else if $stage === 'mainscreen'}
  <Mainscreen />
{:else if $stage === 'statistics'}
  <Statistics />
{:else if $stage === 'cart'}
  <Cart />
{/if}

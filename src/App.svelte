<script>
  import stage from "./stageStore";
  import Onboard from "./Onboard.svelte";
  import Mainscreen from "./Mainscreen.svelte";
  import Statistics from "./Statistics.svelte";
  import Cart from "./Cart.svelte";
  import Profile from "./Profile.svelte";

  import Hmm from "./hmm.svelte";
</script>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
  }
</style>

<Hmm />
<main>

  {#if $stage === 'onboard'}
    <Onboard />
  {:else if $stage === 'mainscreen'}
    <Mainscreen />
  {:else if $stage === 'stats'}
    <Statistics />
  {:else if $stage === 'cart'}
    <Cart />
  {:else if $stage === 'profile'}
    <Profile />
  {/if}

</main>

<script>
  import stage from "./stageStore";
  import cart from "./cart";
  import { climates, allergies } from "./dataStore";

  let scanned = false;
  const approved = !$allergies.find(allergy => allergy.title == "laktosefri")
    .checked;

  setTimeout(() => {
    scanned = true;
  }, 2000);

  function resetTimer() {
    scanned = false;
  }

  function kjop() {
    scanned = false;
    $cart.push("Tine - H-Melk");
  }
</script>

<style>
  #scanner {
    width: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }

  .result {
    display: block;
    margin: 10px auto;
    width: 90%;
  }

  section {
    position: relative;
    height: 500px;
    margin: 0 auto;
  }

  p {
    background-color: black;
    text-align: center;
    font-size: 2.5rem;
    color: white;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  button {
    height: 30px;
    min-width: 150px;
    margin: 7px;

    border-radius: 4px;
    border: 1px solid white;
  }

  .blurred {
    filter: blur(4px);
  }

  .menu {
    z-index: 2;
    height: 75px;
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    bottom: 0;
  }

  .menu > button {
    min-height: 50px;
    min-width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    background-color: transparent;
  }

  .menu > button > span {
    color: white;
  }

  .icon {
    height: 50px;
    width: 50px;
  }
</style>

<section>
  <img
    class:blurred={scanned}
    id="scanner"
    src="scan.jpg"
    alt="scanning milk" />
  {#if scanned}
    <div class="overlay" on:click|stopPropagation>
      <p>{approved ? 100 : 0} % match</p>
      {#if approved}
        <img class="result" src="approved.png" alt="product meets our values" />
      {:else}
        <img
          class="result"
          src="disapproved.png"
          alt="product does not meets our values" />
      {/if}
      <div class="buttons">
        <button on:click={resetTimer}>Tilbake</button>
        <button on:click={kjop}>Kjøp 🛒</button>
        <button>Info</button>
      </div>
    </div>
  {/if}
  <div class="menu" class:blurred={scanned}>
    <button on:click={() => ($stage = 'stats')}>
      <img class="icon" src="1.svg" alt="stats" />
      <span>Stats</span>
    </button>
    <button on:click={() => ($stage = 'cart')}>
      <img class="icon" src="2.svg" alt="cart" />
      <span>Cart</span>
    </button>
    <button on:click={() => ($stage = 'profile')}>
      <img class="icon" src="3.svg" alt="Profile" />
      <span>Profile</span>
    </button>
  </div>
</section>

<script>
  let scanned = false;
  let score = Math.random();
  $: aboveScore = score > 0.5;

  setTimeout(() => {
    scanned = true;
  }, 2000);

  function resetTimer() {
    scanned = false;
    score = Math.random();
    setTimeout(() => {
      scanned = true;
    }, 2000);
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
  }

  .result {
    display: block;
    margin: 10px auto;
    width: 90%;
  }

  section {
    position: relative;
    height: 500px;
    width: 400px;
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
    height: 3rem;
    min-width: 150px;
    margin: 7px;
  }

  .blurred {
    filter: blur(4px);
  }
</style>

<section>
  <img
    class:blurred={scanned}
    id="scanner"
    src="scan.jpg"
    alt="scanning milk" />
  {#if scanned}
    <div class="overlay">
      <p>{Math.floor(score * 100)} % match</p>
      {#if aboveScore}
        <img class="result" src="approved.png" alt="product meets our values" />
      {:else}
        <img
          class="result"
          src="disapproved.png"
          alt="product does not meets our values" />
      {/if}
      <div class="buttons">
        <button on:click={resetTimer}>Tilbake</button>
        <button on:click={() => (scanned = false)}>Kjøp 🛒</button>
        <button>Info</button>
      </div>
    </div>
  {/if}
</section>

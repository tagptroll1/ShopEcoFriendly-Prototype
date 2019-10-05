<script>
  import stage from "./stageStore";
</script>

<style>
  * {
    color: rgb(77, 136, 77);
  }
  section {
    height: 100%;
    margin: 20px;

    border: 1px solid rgb(194, 255, 194);
    border-radius: 4px;
    background: white;

    padding: 10px 30px;
    padding-top: 20px;
  }
</style>

<section>
  <h1>Statistics</h1>
  <button on:click={() => ($stage = 'mainscreen')}>Tilbake</button>
</section>

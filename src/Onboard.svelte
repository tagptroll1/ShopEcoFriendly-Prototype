<script>
  import stage from "./stageStore";

  let climate = true;

  const climates = [
    [
      "Lavere Co2 utslipp",
      "Hvor mye Co2 produktene slipper ut gjennom prosessen av å lage og resirkulere varen"
    ],
    [
      "Dyrevelferd",
      "At dyrene brukt til å produsere denne varer levde et verdig og godt liv, og døde av naturlige årsaker."
    ],
    [
      "Arbeidsvilkår",
      "At arbeiderene som var med på å lage dette produktet var behandlet rettferdig, og i varetatt"
    ],
    ["Kortreiste varer", "Varen er produsert lokart"]
  ];
  const allergies = [
    [
      "Glutenfritt",
      "Check this if you're allergic to gluten, or avoid eating it for other reasons."
    ],
    [
      "laktosefri",
      "Check this if you're intolerant to lactose, or avoid eating it for other reasons."
    ],
    ["Vegetar", "Check this if you're a vegetarian"],
    ["Vegan", "Check this if you're a vegan"]
  ];
</script>

<style>
  section {
    height: 100%;
    padding: 10px;
    border: 2px solid rgb(226, 226, 173);
    background-color: lightgoldenrodyellow;
    margin: 0 auto;
    max-width: 600px;
  }
  span {
    margin: auto 5px;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border: 1px solid black;
    border-radius: 50%;
    background-color: blue;
    color: white;
  }

  label {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
  }

  input {
    margin: 5px 0 5px auto;
  }

  h2 {
    text-align: center;
  }
</style>

<section>
  {#if climate}
    <h2>Values</h2>
    {#each climates as [name, info]}
      <label title={info}>
        <span>?</span>
        {name}
        <input type="checkbox" />
      </label>
    {/each}
    <button on:click={() => (climate = false)}>Next</button>
  {:else}
    <h2>Allergies / Diets</h2>
    {#each allergies as [name, info]}
      <label title={info}>
        <span>?</span>
        {name}
        <input type="checkbox" />
      </label>
    {/each}
    <button on:click={() => (climate = true)}>Back</button>
    <button on:click={() => ($stage = 'mainscreen')}>Save</button>
  {/if}
</section>

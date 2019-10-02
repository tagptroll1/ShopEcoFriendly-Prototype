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
  *{
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
  span {
    margin: auto 5px;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border-radius: 100px;
    background-color: rgb(218, 255, 215);
    color: rgb(86, 226, 140);
  }
  span:hover{
    background-color: rgb(192, 255, 187);
  }

  label {
    font-size: 1.6em;
    display: flex;
  }

  div{
    margin: 0 5px;
  }

  h2 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 2.2em;
  }

  button{
    font-family: inherit;

    color: rgb(255, 255, 255);
    background: rgb(90, 216, 90);
    border: none;
    font-size: 1.2em;
    padding: 5px 10px;
    margin: 20px 10px;
    border-radius: 4px;
  }
  input{
    margin-left: auto;
    width: 70px;
  }
</style>

<section>
  {#if climate}
    <h2>Values</h2>
    {#each climates as [name, info]}

      <div>
        <label title={info}>
          <span>?</span>
          {name}
          <input type="checkbox" />
        </label>
      </div>

    {/each}
    <button on:click={() => (climate = false)}>Next</button>
  {:else}
    <h2>Allergies / Diets</h2>
    {#each allergies as [name, info]}

      <div>
        <label title={info}>
          <span>?</span>
          {name}
          <input type="checkbox" />
        </label>
      </div>
      
    {/each}
    <button on:click={() => (climate = true)}>Back</button>
    <button on:click={() => ($stage = 'mainscreen')}>Save</button>
  {/if}
</section>

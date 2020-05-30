<script>
  import Tasks from "./Tasks/Tasks.svelte";
  import { projects } from "./taskData";

  let dataLength = Object.keys(projects);

  function countUpTo100(countFrom) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
      countFrom = new Date(countFrom),
      timeDifference = now - countFrom;

    var secondsInADay = 60 * 60 * 1000 * 24;

    let days = Math.floor((timeDifference / secondsInADay) * 1);
    return days;
    /*
    let idEl = document.getElementById(id);
    idEl.getElementsByClassName("days")[0].innerHTML = days;*/
  }
</script>

<style type="text/scss">
  @import "styles.scss";

  #svelte-logo {
    width: 70px;
    vertical-align: bottom;
    position: relative;
    top: 5px;
  }

  #vscode-logo {
    width: 30px;
    vertical-align: bottom;
    position: relative;
    top: 5px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>

<!-- Start of HTML -->
<div class="shell">

  <main>
    <h1>Why hello there, Catalactics here...</h1>
    <p>Welcome to my <a href="https://100daysofcode.com" class="fancyLink" target="_blank">#100DaysOfCode</a> Challenge Website Today is day <span id="dayCount">{countUpTo100('May 20, 2020 12:00:00')}</span>
    </p>

  <!--
    <div class="link-containers">
      <span>Projects</span>
      <span>Progress</span>
    </div>-->

    <div class="tasks-container">

      {#each dataLength as _, i}
        <Tasks {...projects[`${_}`]} />
      {/each}

    </div>

  </main>

  <footer>
    <p id="madeWithLove">
      Using
      <a href="https://svelte.dev" target="_blank">

        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--be3eR7Dm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://nunomalex.me/svelte-logo.png"
          alt="Svelte"
          id="svelte-logo" />
      </a>
      and
      <a href="https://code.visualstudio.com">
        <img
          src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
          alt=""
          id="vscode-logo" />
        VS Code
      </a>
      . Made with 💙 by Joshua P.
    </p>
  </footer>

</div>

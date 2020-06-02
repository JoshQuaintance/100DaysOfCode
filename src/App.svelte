<script>
  import Tasks from "./Tasks/Tasks.svelte";
  import { loader } from "./scripts";
  import { projects } from "./taskData";

  let dataLength = Object.keys(projects);
  let lastOfDataList = dataLength.length;

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

  let showProjects = false;
  let moreProjects = () => {
    showProjects = !showProjects;
    console.log(showProjects);
  };

  let homeBtn = () => {
    if (showProjects == true) {
      loader(moreProjects);
    } else if (showProjects == false) return;
  };

  let headerScrolled = false;

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
      headerScrolled = true;
    } else {
      headerScrolled = false;
    }
  });
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

<div class="loader" />

<header class={headerScrolled == true ? 'headerScrolled' : ''}>

  <a href="https://google.com">
    <img src="./images/Logo.svg" alt="Logo" id="mainLogo" />
  </a>

  <div class="headerLogos">

    <a href="#top" id="home">
      <img src="./images/home.svg" alt="Home" on:click={homeBtn} id="homeBtn" />
    </a>

    <a href="https://github.com/joshuapelealu" target="_blank" id="githubLink">
      <img src="./images/github.svg" alt="Github Mark" id="githubMark" />
    </a>

    <a href="https://twitter.com/bigbrainfes" target="_blank" id="twitterLink">
      <img src="./images/twitter.svg" alt="Twitter" id="twitterLogo" />
    </a>

  </div>
</header>

<!-- Start of HTML -->
<div class="shell">

  <main>
    <h1>Why hello there, Catalactics here...</h1>
    <p>
      Welcome to my
      <a href="https://100daysofcode.com" class="fancyLink" target="_blank">
        #100DaysOfCode
      </a>
      Challenge Website Today is day
      <span id="dayCount">{countUpTo100('May 20, 2020 00:00:00')}</span>
    </p>

    {#if showProjects == false}
      <div class="link-containers">
        <div class="projects-cont">
          <span>Projects</span>

        </div>

        <div class="dev-log">
          <span>Dev Log</span>
          <h6>Latest From The Dev Logs</h6>
          <Tasks {...projects[`Day${lastOfDataList}`]} style={'width: 80%;'} />

          <p
            on:click={() => {
              loader(moreProjects);
              console.log(showProjects);
            }}>
            View More
          </p>
        </div>
      </div>
    {:else}
      <div class="tasks-container">

        {#each dataLength as _, i}
          <Tasks {...projects[`${_}`]} />
        {/each}

      </div>
    {/if}
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

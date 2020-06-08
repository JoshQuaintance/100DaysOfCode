<script>
  import Tasks from "./Components/Tasks/Tasks.svelte";
  import Projects from "./Components/projects/projects.svelte";
  import { loader } from "./scripts";
  import { devLogs } from "./componentData/taskData";
  import { projectsData } from "./componentData/projectsData";

  let dataLength = Object.keys(devLogs);
  let lastOfDataList = dataLength.length;
  //console.log(projectsData["project1"]["tags"]);

  // Count up function
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
  // ----------

  // Dev Log Option functions
  let showDevLogs = false;
  let moreDevLogs = () => {
    showDevLogs = !showDevLogs;
    console.log(showDevLogs);
  };

  let homeBtn = () => {
    if (showDevLogs == true) {
      loader(moreDevLogs);
    } else if (showDevLogs == false) return;
  };
  // ----------

  // Header scrolling function
  let headerScrolled = false;

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
      headerScrolled = true;
    } else {
      headerScrolled = false;
    }
  });
  // ----------

  // More projects functions
  let showProjects = false,
    HTML = true,
    SCSS = true,
    JS = true,
    jQuery = true,
    Svelte = true;
  // ----------
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

  <a href="#top">
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
    <!-- Main Title  -->
    <h1>Why hello there, Catalactics here...</h1>
    <p>
      Welcome to my
      <a href="https://100daysofcode.com" class="fancyLink" target="_blank">
        #100DaysOfCode
      </a>
      <!-- Day Counter  -->
      Challenge Website. Today is day
      <span id="dayCount">{countUpTo100('May 20, 2020 00:00:00')}</span>
    </p>
    <!-- ---------- -->

    <!-- Main Page -->
    {#if showDevLogs == false && showProjects == false}
      <!-- Showcase tabs container -->
      <div class="link-containers">

        <!-- Projects showcase tab -->
        <div class="projects-cont">
          <span>Projects</span>
          <p style="margin-top: 50px;">Featured Project</p>
          <Projects {...projectsData["project1"]}/>
        </div>
        <!-- ---------- -->

        <!-- Dev log showcase tab -->
        <div class="dev-log">
          <span>Dev Log</span>
          <h6>Latest From The Dev Logs</h6>
          <Tasks {...devLogs[`Day${lastOfDataList}`]} style={'width: 80%;'} />

          <p
            on:click={() => {
              loader(moreDevLogs);
              console.log(showDevLogs);
            }}>
            View More
          </p>
        </div>
        <!-- ---------- -->

      </div>
      <!-- ---------- -->

      <!-- Dev Logs -->
    {:else if showDevLogs}
      <div class="tasks-container">

        {#each dataLength as _, i}
          <Tasks {...devLogs[`${_}`]} />
        {/each}

      </div>

      <!-- ---------- -->

      <!-- Projects Container -->
    {:else if showProjects}
      <div class="projects-container">
        <Projects />
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

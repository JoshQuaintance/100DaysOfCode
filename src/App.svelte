<script>
  import Tasks from "./Components/Tasks/Tasks.svelte";
  import Projects from "./Components/Projects/projects.svelte";
  import Header from "./Components/Header/header.svelte";
  import Footer from "./Components/Footer/footer.svelte";
  import Title from "./Components/Title/title.svelte";
  import { loader } from "./scripts";
  import { devLogs } from "./componentData/taskData";
  import { projectsData } from "./componentData/projectsData";

  let dataLength = Object.keys(devLogs);
  let lastOfDataList = dataLength.length;
  
  //console.log(projectsData["project1"]["tags"]);


  // Dev Log Option functions
  let showDevLogs = false;
  let moreDevLogs = () => {
    showDevLogs = !showDevLogs;
    console.log(showDevLogs);
  };

  // ----------

  // More projects functions
  let showProjects = false;
  // ----------
</script>

<style type="text/scss">
  @import "styles.scss";

</style>

<div class="loader" />

<Header />

<!-- Start of HTML -->
<div class="shell">

  <main>
    
    <!-- Main Title -->
    <Title />

    <!-- Main Page -->
    {#if showDevLogs == false && showProjects == false}
      <!-- Showcase tabs container -->
      <div class="link-containers">

        <!-- Projects showcase tab -->
        <div class="projects-cont">
          <span>Projects</span>
          <p style="margin-top: 50px;">Featured Project</p>
          <Projects {...projectsData['project1']} />
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

  <Footer />
</div>

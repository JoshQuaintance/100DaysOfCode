<script>
  import Tasks from "./Tasks/Tasks.svelte";
  import { projects } from "./taskData";

  let dataLength = Object.keys(projects);

</script>

<style type="text/scss">
  @import "styles.scss";
</style>

<!-- Start of HTML -->
<div class="shell">

  <main>
    <h1>Welcome to my 100 Days Of Code Challenge</h1>
    <p>This is where I am going to post about the projects I made</p>

    <div class="tasks-container">
<!--
    {#each dataLength as _, i}
      <Tasks />
    {/each}
-->

      <Tasks {...projects.Day1} />
      <Tasks {...projects.Day2} />
      <Tasks {...projects.Day3} />
      <Tasks {...projects.Day4} />
      <Tasks {...projects.Day5} />
      <Tasks {...projects.Day6} />

    </div>
  </main>

  <footer>
    <p id="madeWithLove">Using Svelte and VSCode. Made with 💙 by Joshua P.</p>
  </footer>

</div>

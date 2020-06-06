<script>
  import Tags from '../Tags/tags.svelte';

  export let customStyle, projectTitle;
</script>

<style type="text/scss">
  @import "./projects.scss";
</style>

<!--Start code here-->
<div class="projects-container" style={customStyle}>

  <a
    href="https://joshuapelealu.github.io/WebDesign/"
    class="project-link"
    target="_blank">

    <div class="img-cont">

      <img
        src="./project-images/codesx3.PNG"
        alt="Codes Codes Codes Project Screenshot" />

    </div>

  </a>

  <h1 class="project-title">{projectTitle}</h1>
  
  <Tags />

</div>

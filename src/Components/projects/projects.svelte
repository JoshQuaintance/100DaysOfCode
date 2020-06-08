<script>
  import Tags from "../Tags/tags.svelte";

  export let customStyle, title, link, imgSrc, imgAlt, description, tags;

</script>

<style type="text/scss">
  @import "./projects.scss";
</style>

<!--Start code here-->
<div class="projects-container" style={customStyle}>

  <a href={link} class="project-link" target="_blank">

    <div class="img-cont">

      <img src={imgSrc} alt={imgAlt} />

    </div>

  </a>

  <h1 class="project-title">{title}</h1>

  <p class="project-description">{description}</p>

  <Tags {tags}/>

</div>

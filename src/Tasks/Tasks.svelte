<script>
  import { fade, fly } from "svelte/transition";

  export let title;
  export let list;
  export let description;

  let listGiven = list.length > 0;
  let hovering = false,
	  notHovering = true;
	  

	
  let containerHovered = () => {
	  hovering = !hovering;
  }

  let containerNotHovered = () => {
	  hovering = !hovering;
	  notHovering = !notHovering;
  }
  
</script>

<style type="text/scss">
  @import "./tasks.scss";


</style>

<div
  class="task-container {title} {hovering == true ? 'containerHovered' : ''}"
  on:mouseenter={containerHovered}
  on:mouseleave={containerNotHovered}
  transition:fade>

  <h1>{title}</h1>
  <p>{description}</p>

  {#if listGiven}
    <ul>
      {#each list as { list }}
        <li>{list}</li>
      {/each}
    </ul>
  {/if}

  {#if hovering}
    <p
      style="visibility: visible;"
      id="clickMore"
      transition:fade
      on:outroend={() => (notHovering = true)}>
      Click for More
    </p>
  {:else if notHovering}
    <p style="visibility: hidden;">Click for More</p>
  {/if}
</div>

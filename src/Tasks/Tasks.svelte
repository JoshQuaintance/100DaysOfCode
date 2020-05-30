<script>
  import { fade, fly } from "svelte/transition";

  export let title;
  export let list;
  export let description;

  //let listGiven = list.length > 0;
  let hovering = false,
    notHovering = true,
    detailDisplayed = false;

  let containerHovered = () => {
    hovering = !hovering;
  };

  let containerNotHovered = () => {
    hovering = !hovering;
    notHovering = !notHovering;
  };

  let displayDetails = () => {
    detailDisplayed = !detailDisplayed;
  };
</script>

<style type="text/scss">
  @import "./tasks.scss";
</style>

<div
  class="task-container {title}
  {hovering == true ? 'containerHovered' : ''}
  {detailDisplayed == true ? 'displayDetails' : ''}"
  on:mouseenter={containerHovered}
  on:mouseleave={containerNotHovered}
  on:click={displayDetails}
  transition:fade>

  <h1>{title}</h1>
  <p>{description}</p>

  <!--{#if listGiven}-->
  <ul class={detailDisplayed == true ? 'detailDisplayed' : ''} transition:fade>
    {#each list as { list }}
      <li>{list}</li>
    {/each}
  </ul>
  <!--{/if}-->

  <p
    style={hovering == true ? 'opacity: 1' : 'opacity: 0'}
    id="clickMore"
    transition:fade>
    Click for More
  </p>

  {#if detailDisplayed}
    <p id="exit-card">Click Anywhere Inside The Card To Go Back</p>
  {/if}

</div>

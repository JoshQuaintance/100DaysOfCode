<script>
  import { fade, fly } from "svelte/transition";

  export let title;
  export let list;
  export let description;

  let listGiven = list.length > 0;
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

  .detailDisplayed {
    display: inline-block !important;
  }

  .detailDisplayed h1 {
    font-size: 100px;
  }

  .detailDisplayed ul {
    font-size: 50px;
  }

  .displayDetails {
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    margin: 0;
    border: none !important;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    margin-left: calc(75% / 2 * -1);
    background-color: white;
    z-index: 1002;
    flex-wrap: wrap;
    align-items: center;
  }

  .displayDetails.containerHovered {
    transform: none !important;
    box-shadow: none !important;
    cursor: default !important;
  }

  .displayDetails #clickMore {
    visibility: hidden !important;
  }
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

  {#if listGiven}
    <ul
      class={detailDisplayed == true ? 'detailDisplayed' : ''}
      transition:fade>
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

  {#if detailDisplayed}
    <p>Click Anywhere Inside The Card To Go Back</p>
  {/if}

</div>

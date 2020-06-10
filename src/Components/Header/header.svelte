<script>
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

  let homeBtn = () => {
    if (showDevLogs == true) {
      loader(moreDevLogs);
    } else if (showDevLogs == false) return;
  };
</script>

<style type="text/scss">
  @import "header.scss";
</style>

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

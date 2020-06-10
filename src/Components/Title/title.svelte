<script>
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
</script>

<style type="text/scss">
  @import "title.scss";
</style>

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

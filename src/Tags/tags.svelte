<script>
    let showTags = true;
    let showHTML = false,
        showSCSS = false,
        showJS = false,
        showJQuery = false,
        showSvelte = false;
</script>

<style type="text/scss">
    @import 'tags.scss';
</style>

{#if showTags}

    <div class="tags-cont">

        <p class="left start html">HTML</p>
        

        <p class="right scss">SCSS</p>

    
        <p class="left JS">JavaScript</p>
    </div>

{/if}
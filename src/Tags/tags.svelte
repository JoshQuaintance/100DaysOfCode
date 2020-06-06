<script>
    let showTags = true;
    export let 
        HTML = false,
        SCSS = false,
        JS = false,
        jQuery = false,
        Svelte = false;
</script>

<style type="text/scss">
    @import 'tags.scss';
</style>

{#if showTags}

    <div class="tags-cont">

        {#if HTML}
        <p class="left start html">HTML</p>
        {/if}
        
        {#if SCSS}
        <p class="right scss">SCSS</p>
        {/if}

        {#if JS}
        <p class="left JS">JavaScript</p>
        {/if}

        {#if jQuery}
        <p class="right JQuery">jQuery</p>
        {/if}

        {#if Svelte}
        <p class="left Svelte">Svelte</p>
        {/if}



    </div>

{/if}
<!-- Route: / -->
<script lang="ts">
    import VideoThumb from "$lib/components/VideoThumb.svelte";

    let names: String[] = [];

    for (let i = 0; i < 50; i++) {
        names.push(`Name ${i}`);
    }

</script>

<div class="videos">
	{#each names as name, index}
        <VideoThumb />
	{/each}
</div>

<style lang="scss">
    .videos{
        padding: 12px 30px;
        display: grid;
        grid-template-columns: repeat(4, minmax(240px, 1fr));
        grid-gap: 50px 16px;
    }
</style>

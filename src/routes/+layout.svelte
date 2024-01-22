<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';
    import "../app.css";
</script>

<Header />
<main class="flex">
    <Sidebar />
    <div class="grow">
        <slot />
    </div>
</main>

<style lang="scss">


</style>
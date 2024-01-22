<script lang="ts">
    import { onMount } from 'svelte';
    import { ui } from '$lib/stores/UiStore.ts';

    let icon = "https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg";

    onMount(() => {
        window.addEventListener('scroll', function(){
            let header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 0);
        })
    });

    function UpdateUI(){
        ui.set({sidebar: !$ui.sidebar});
    }

    let search = "";
    let searchPlaceHolder = "Buscar";

</script>

<header class="header p-4">
    <div class="flex justify-between">
        <button on:click={UpdateUI}>
            <img src={icon} alt="" class="logo" draggable="false">
        </button>
        <div>
            <div class="flex items-center overflow-hidden rounded-full border-[hsl(0,0%,18.82%)] border-[1px] border-solid">
                <input type="text" bind:value={search} placeholder={searchPlaceHolder} class="min-w-[400px] py-2 px-4 bg-[#121212]" >
                <button class="material-symbols-outlined py-2 px-4 bg-[#222222]">
                    search
                </button>
            </div>
        </div>
        <div>
            <!-- <input type="text" > -->
        </div>
    </div>
</header>

<style lang="scss">
    .header{
        position: sticky;
        top: 0;
        z-index: 99;
        background-color: #0f0f0f;
    }
 
    .logo{
        width: 100px;
        max-height: 50px;
        object-fit: cover;
    }
</style>
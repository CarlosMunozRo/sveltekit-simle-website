<script lang="ts">
    import { onMount } from 'svelte';
    import { ui } from '$lib/stores/UiStore.ts';

    let icon = "https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg";

    onMount(() => {
        window.addEventListener('scroll', function(){
            let header = document.querySelector('.header');
            if(header) header.classList.toggle('sticky', window.scrollY > 0);
        })
    });



    let search = "";
    let searchPlaceHolder = "Buscar";

</script>

<header class="header p-4">
    <div class="flex justify-between items-center">
        <button class="burg-menu" on:click={ui.set({sidebar: !$ui.sidebar})} class:open={$ui.sidebar}>
            <span></span>
            <span></span>
            <span></span>
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
 
    .burg-menu{
        width: 40px;
        height: 16px;
        position: relative;

        >span{
            background-color: white;
            height: 2px;
            width: 100%;
            position: absolute;
            transition: all 0.3s ease-in-out;

            &:nth-child(1){
                top: 0%;
                left: 0;
                transform-origin: center left;
            }
            &:nth-child(2){
                top: 50%;
                translate: -50% 0px;
                left: 50%;
            }
            
            &:nth-child(3){
                top: 100%;
                left: 0;
                transform-origin: center left;
            }
        }

        &.open{
            >span{
                &:nth-child(1){
                    transform: rotate(-45deg);
                    top: 50%;
                    width: 20px;
                }
                &:nth-child(2){
                    top: 50%;
                }
                &:nth-child(3){
                    transform: rotate(45deg);
                    top: 50%;
                    width: 20px;
                }
            }
        }

    }

</style>
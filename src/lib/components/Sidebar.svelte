<script lang="ts">
    import { ui } from '$lib/stores/UiStore.ts';

    let src="https://yt3.googleusercontent.com/ytc/AIf8zZTISnAkD2kHuVZMRVTr5QNCww-gagEU9xDdc_w6=s176-c-k-c0x00ffffff-no-rj";

</script>

<div class="sidebar flex flex-col gap-2 p-[12px]" class:closed={$ui.sidebar}>
    <a href="/" class="btn active"><span class="icon material-symbols-outlined">home</span><span>Home</span></a>
    <a href="/" class="btn"><span class="icon material-symbols-outlined">subscriptions</span><span>Suscripciones</span></a>
    <hr>
    <a href="/" class="btn"><span class="icon"><img class="rounded-full" {src} alt=""></span><span>Test</span></a>
    <a href="/" class="btn"><span class="icon"><img class="rounded-full" {src} alt=""></span><span>Test</span></a>
    <a href="/" class="btn"><span class="icon"><img class="rounded-full" {src} alt=""></span><span>Test</span></a>

</div>

<style lang="scss">

    .sidebar{
        position: sticky;
        top: 82px;
        height: calc(100svh - 82px);
        overflow: auto;
        transition: all 0.3s ease-in-out;
        width: 240px;
        min-width: 240px;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
        background: transparent; 
        }

        &::-webkit-scrollbar-thumb {
        background: transparent;
            border-radius: 500px;
        }

        &:hover::-webkit-scrollbar-thumb {
            background: #4A4A4A;
        }

        &.closed{
            width: 0px;
            min-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
        }

    }

    hr{
        height: 1px;
        background-color: rgba(255, 255, 255, 0.2);
        border: none;
    }

    .btn{
        min-height: 40px;
        padding: 0 12px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        transition: all;
        background-color: transparent;
        &.active{
            background-color: #272727;
        }
        &:hover{
            background-color: #272727;
            &.active{
                background-color: #3d3d3d;
            }
        }
        .icon{
            margin-right: 24px;
            width: 24px;
            height: 24px;
        }
    }

</style>
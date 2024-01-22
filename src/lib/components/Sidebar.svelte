<script lang="ts">


</script>

<div class="sidebar min-w-[240px] flex flex-col gap-2 p-[12px]">
    
    <a href="#da" class="btn active"><span class="icon material-symbols-outlined">home</span><span>Home</span></a>
    <a href="#da" class="btn"><span class="icon material-symbols-outlined">home</span><span>Home</span></a>
    <hr>
    <a href="#da" class="btn"><span class="icon material-symbols-outlined">home</span><span>Test</span></a>
    <a href="#da" class="btn"><span class="icon material-symbols-outlined">home</span><span>Test</span></a>
    <a href="#da" class="btn"><span class="icon material-symbols-outlined">home</span><span>Test</span></a>

</div>

<style lang="scss">

    .sidebar{
        position: sticky;
        top: 0;
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
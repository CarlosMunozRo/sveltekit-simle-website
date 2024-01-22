<script lang="ts">
    import { onMount } from 'svelte';

    let icon = "https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg";

    onMount(() => {
        window.addEventListener('scroll', function(){
            let header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 0);
        })
    });

</script>

<header class="header p-4">
    <div>
        <img src={icon} alt="" class="logo">
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
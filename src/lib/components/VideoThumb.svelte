<script lang="ts">

    let thumbnail: string = "https://urgenciesveterinaries.com/wp-content/uploads/2023/09/survet-gato-caida-pelo-01.jpeg";
    
    let src: string = "https://yt3.googleusercontent.com/ytc/AIf8zZTISnAkD2kHuVZMRVTr5QNCww-gagEU9xDdc_w6=s176-c-k-c0x00ffffff-no-rj";
</script>

<div class="video">
    <div class="thumb"><img src={thumbnail} alt=""></div>
    <div class="flex gap-[12px] mt-[12px]">
        <div class="max-w-[36px] "><img {src} alt="" class="rounded-full"></div>
        <div class="grow">
            <div class="title">
                32 Reasons WHY TS IS BETTER Than Go
            </div>

        </div>
    </div>
</div>

<style lang="scss">
    
    .video{
        .thumb{
            border-radius: 10px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .title{
            font-size: 16px;
            line-height: 2.2rem;
            font-weight: 500;
        }
    }

</style>
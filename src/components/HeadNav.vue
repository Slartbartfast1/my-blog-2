<template>
    <div :class="'head '+(slide?'slide':'')">

    </div>
</template>

<script>
    export default {
        name: "HeadNav",
        props: {
            slide: Boolean,
            required: true
        },
        data(){
            return{
                slide:this.slide,
            }
        }
    }
</script>

<style scoped lang="scss">
    .head {
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 64px;
        top:-64px;
        background-color: #FFF;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, .1);
        transition:.4s all ease;
        h1{
            margin:0 auto;
            text-align: center;
        }
    }
    .slide{
        top:0;
    }

</style>
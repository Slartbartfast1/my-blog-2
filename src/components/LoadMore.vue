<template>
    <div class="load">
        <button @click="load">Load More<Icon type="ios-arrow-down"size="16" /></button>
    </div>
</template>

<script>
    export default {
        name: "LoadMore",
        methods:{
            load(){
                this.$emit('load','')
            }
        }
    }
</script>

<style scoped lang="scss">
.load{
    font-size:15px;
    position: relative;
    height:60px;
    button{
        color:white;
        background: linear-gradient(45deg,#2d8cf0 0%, #70f5ff 100%);
        line-height: 30px;
        padding:0 10px;
        outline:none;
        transition:box-shadow .3s ease ;
        &:hover{
            margin-top:-1px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.2);
        }
    }
}
    
    
</style>
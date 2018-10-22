<template>
            <div class="author">
                <div class="border">
                </div>
                <div class="avatar"><img src="https://slartbartfast.cn/admin/avatar/avatar%20(1)_gaitubao_com_296x296.png" alt=""></div>
            </div>
</template>

<script>
    export default {
        name: "AuthorBox"
    }
</script>

<style scoped lang="scss">
.author{
    height: 300px;
    background-color:#FFF;
    margin-top:30px;
    position: relative;

    .avatar{
        margin:0 auto;
        width:160px;
        height:160px;
        border-radius: 80px;
        border:1px dotted green;
        overflow: hidden;
        margin-top:96px;
        /*position: absolute;*/
        img{
            width:100%;
            height:100%;
        }
    }
    
}
</style>
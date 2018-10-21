<template>


            <Card dis-hover="true">
                <Avatar src="https://slartbartfast.cn/admin/avatar/avatar%20(1)_gaitubao_com_296x296.png" size="large"/>
                <div class="imgTitle"><img
                        src="https://slartbartfast.cn/static/assets/img/ES6%E4%B9%8Blet%E5%92%8Cconstwallhaven-39700_gaitubao_com_1135x480.jpg"
                        alt="标题图片"></div>
                <div class="title"><p>Here is title</p></div>
</Card>


</template>

<script>
    export default {
        name: "ArticleBox"
    }
</script>

<style scoped lang="scss">

    .ivu-avatar{
        height:64px;
        width:64px;
        border-radius: 32px;
    }
    .imgTitle  {
        padding:20px 0 15px 0;
       img{
           height: 250px;
           width: 100%;}
    }
    .title{
        padding-left: 10px;
        color:black;
        font-size: 30px;
        font-weight: 600;
    }
</style>
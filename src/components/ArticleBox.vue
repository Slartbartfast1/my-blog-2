<template>
    <Card dis-hover="true">
        <Avatar src="https://slartbartfast.cn/admin/avatar/avatar%20(1)_gaitubao_com_296x296.png" size="large"/>
        <div class="imgTitle"><img
                src="https://slartbartfast.cn/static/assets/img/ES6%E4%B9%8Blet%E5%92%8Cconstwallhaven-39700_gaitubao_com_1135x480.jpg"
                alt="标题图片"></div>
        <div class="title">
            <p>Here is title???</p>
        </div>
        <div class="summary">
            <i>summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary summarysummarysummarysummary
                summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary</i>

        </div>
        <div class="boxBottom">
            <Icon type="ios-thumbs-up-outline" size="30"/>
        </div>
    </Card>


</template>

<script>
    export default {
        name: "ArticleBox"
    }
</script>

<style scoped lang="scss">


    .ivu-avatar {
        height: 50px;
        width:50px;
        border-radius: 25px;

    }

    .imgTitle {
        margin-top:10px;
        img {
            height: 200px;
            width: 100%;
        }
    }

    .title {
        color: black;
        font-size: 30px;
        font-weight: 600;
    }
    .summary{
        ::before{
            content: '';
            position: absolute;
            display: block;
            height:100%;
            width: 100%;
            background-image: linear-gradient(to bottom,rgba(255,255,255,0) 0,rgba(255,255,255,.7) 100%);
        }
        position:relative;
        word-break: break-word;
        color:rgba(0,0,0,.7);
        font-size:16px;
    }
    .boxBottom{
        padding-top:10px;
    }
</style>
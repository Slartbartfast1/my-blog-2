<template>
    <Card dis-hover="true">
        <Avatar src="https://slartbartfast.cn/admin/avatar/avatar%20(1)_gaitubao_com_296x296.png" size="large"/>
        <div class="info">
            <span class="author"><div>泛银河系含漱爆破液</div></span>
            <i class="date">
                <div>Oct 16 · 5 min</div>
            </i>
        </div>
        <Icon type="ios-star" size="20"/>
        <div class="imgTitle"><img
                src="https://slartbartfast.cn/static/assets/img/ES6%E4%B9%8Blet%E5%92%8Cconstwallhaven-39700_gaitubao_com_1135x480.jpg"
                alt="标题图片"></div>
        <div class="title">
            <p>泛银河系含漱爆破液</p>
        </div>
        <div class="summary">
            <i>summarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummarysummary</i>
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

    * {
        user-select: none;

        .ivu-avatar {
            height: 50px;
            width: 50px;
            border-radius: 25px;

        }
        .info {
            /*width:70px;*/
            height: 50px;
            position: absolute;
            top: 25px;
            left: 70px;

            .author {
                font-size: 12px;
                cursor: pointer;
            }
            .date {
                cursor: default;
            }
        }
        .ivu-icon-ios-star{
            position:absolute;
            right:20px;
            top:30px;
        }

        .imgTitle {
            margin-top: 10px;
            text-align: center;
            padding: 10px 0;
            img {
                height: 200px;
                width: 100%;
            }
        }

        .title {
            color: black;
            font-size: 30px;
            font-weight: 300;
            cursor: pointer;
        }
        .summary {
            ::before {
                content: '';
                position: absolute;
                display: block;
                height: 100%;
                width: 100%;
                background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .7) 100%);
            }
            position: relative;
            word-break: break-word;
            color: rgba(0, 0, 0, .7);
            font-size: 16px;
        }
        .boxBottom {
            padding-top: 10px;
        }
    }
</style>
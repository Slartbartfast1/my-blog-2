
<template>
    <div class="latest" :on-reach-edge="getLatest">
        <Card v-for="item in latest">
            <Avatar src="https://slartbartfast.cn/admin/avatar/avatar%20(1)_gaitubao_com_296x296.png" size="large"/>
            <div class="info">
                <span class="author"><div>{{item.author}}</div></span>
                <i class="date">
                    <div>{{item.createTime}}</div>
                </i>
            </div>
            <div class="imgTitle"><img
                    src="https://slartbartfast.cn/static/assets/img/ES6%E4%B9%8Blet%E5%92%8Cconstwallhaven-39700_gaitubao_com_1135x480.jpg"
                    alt="标题图片"></div>
            <div class="title">
                <p>{{item.title}}</p>
            </div>
            <div class="summary">
                <i>{{item.gist}}</i>
            </div>
            <div class="boxBottom">
                <Icon type="ios-thumbs-up-outline" size="26"/>
                <span class="good"> 1111</span>
                <div class="comment"><span>{{item.view}} responses </span>
                    <Icon type="ios-text-outline" size="26"/>
                </div>

            </div>

        </Card>
    </div>
</template>

<script>
    export default {
        name: "Latest",
        mounted:function(){
            this.getLatest()
        },
        data(){
            return{
                latest:[],
                num:1,
            }
        },
        methods:{
            getLatest(){
                this.$http.get("http://localhost:8001/latest")
                    .then((res)=>{
                        this.latest=res.body
                    })
            }
        }
    }
</script>

<style scoped lang="scss">

    .ivu-card {
        user-select: none;
        position: relative;

        .ivu-avatar {
            height: 40px;
            width: 40px;
            border-radius: 20px;

        }
        .info {
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
        .ivu-icon-ios-star {
            position: absolute;
            right: 20px;
            top: 20px;
        }

        .imgTitle {
            margin-top: 10px;
            text-align: center;
            img {
                height: 200px;
                width: 100%;
            }
        }

        .title {
            color: black;
            font-size: 20px;
            font-weight: 400;
            cursor: pointer;
        }
        .summary {
            ::before {
                content: '';
                position: absolute;
                display: block;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .7) 100%);
            }
            position: relative;
            word-break: break-word;
            color: rgba(0, 0, 0, .7);
            font-size: 12px;

        }
        .boxBottom {
            padding-top: 10px;
            position: relative;
            .good {
                text-indent: 6px;
                position: absolute;
                top: 16px;
                left: 20px;
                font-size: 10px;
            }
            .comment {
                position: absolute;
                right: 0;
                top: 15px;
                font-size: 12px;
                color: rgba(0, 0, 0, .54)
            }
        }
    }
</style>
<template>
    <div class="featured">
        <Card v-for="item in featured" :key="item.articleid">
            <!--<Avatar src="https://slartbartfast.cn/admin/avatar/avatar%20(1)_gaitubao_com_296x296.png" size="small"/>-->
            <!--<div class="info">-->
                <!--<span class="author"><div>{{item.author}}</div></span>-->
                <!--<i class="date">-->
                    <!--<div>{{item.createTime}}</div>-->
                <!--</i>-->
            <!--</div>-->
            <!--<Icon type="ios-star" size="20"/>-->

            <div class="imgTitle"
                 v-src="'http://58.87.107.26/'+item.imgurl">
                <img
                        :src="'http://58.87.107.26/'+item.imgurl.slice(0, -4)+'-thumb'+item.imgurl.slice(-4)"
                        alt="标题图片" class="img-thumb">
            </div>
            <div class="title">
                <router-link :to="{path:'/article',query:{id:item.articleid}}">
                    <p>{{item.title}}</p>
                </router-link>
            </div>
            <div class="summary">
                <i>{{item.gist}}</i>
            </div>
            <!--<div class="boxBottom">-->
                <!--<Icon type="ios-thumbs-up-outline" size="26"/>-->
                <!--<span class="good"> 1111</span>-->
                <!--<div class="comment"><span>{{item.view}} responses</span>-->
                    <!--<Icon type="ios-text-outline" size="26"/>-->
                <!--</div>-->
            <!--</div>-->
        </Card>
    </div>

</template>

<script>

    export default {
        name: "Featured",
        mounted: function () {
            this.getFeatured()
        }
        ,
        data() {
            return {
                featured: [],
            }
        },
        methods: {
            getFeatured() {
                this.$http.get('http://localhost:8001/featured')
                    .then((res) => {
                        this.featured = res.body
                    })
            },


        },
        directives: {
            src: {
                bind: function (el, binding) {
                    var element = new Image();
                    element.className = "img-src"
                    element.style.width = '100%'
                    element.style.height = '200px'
                    element.style.zIndex = '200'
                    element.style.transform = 'scale(1.1)'
                    element.src = binding.value
                    element.style.filter='blur(20px)'
                    element.style.transition='.3s ease all'
                    element.onload=function(){
                        element.style.filter='blur(0px)'
                        element.style.transform = 'scale(1)'
                        let obj = el.querySelector('.img-thumb')
                        el.removeChild(obj)
                    };
                    el.appendChild(element)
                },
            }
        },
    }
</script>

<style scoped lang="scss">

    .ivu-card {
        user-select: none;
        position: relative;
        border:1px solid rgba(0,0,0,.1);
        .imgTitle {
            height: 200px;
            width: 100%;
            /*margin-top: 10px;*/
            text-align: center;
            overflow: hidden;
            position: relative;
            .img-thumb {
                filter: blur(10px);
                z-index: 1;
                height: 200px;
                width: 100%;
                transition: 1s all ease;
                position: absolute;
                left: 0;
                transform: scale(1.1);
            }
        }

        .title {
            padding:6px;
            height:30px;
            color: black;
            font-size:2rem;
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
            text-indent:.5em;
            position: relative;
            word-break: break-word;
            color: rgba(0, 0, 0, .7);
            font-size: .8rem;

        }
    }

</style>
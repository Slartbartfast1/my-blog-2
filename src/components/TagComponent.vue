<template>
    <keep-alive>
        <div class="tags">
            <Card v-for="(item,index) in tags" :key="item.slug">
                <Avatar src="https://slartbartfast.cn/admin/avatar/avatar%20(1)_gaitubao_com_296x296.png" size="small"/>
                <div class="info">
                    <span class="author"><div>{{item.author}}</div></span>
                    <i class="date">
                        <div>{{item.createTime}}</div>
                    </i>
                </div>
                <Icon type="ios-star" size="20"/>
                <div class="imgTitle" v-html="html[index]" v-src="'http://58.87.107.26/'+item.imgurl">{{html[index]}}
                </div>
                <div class="title">
                    <router-link :to="{path:'/article',query:{id:item.articleid}}">
                        <p>{{item.title}}</p>
                    </router-link>
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
    </keep-alive>
</template>

<script>

    export default {
        name: "TagComponent",
        mounted: function () {
            this.getArticleByTag()
        },
        data() {
            return {
                tags: [],
                html: [],
            }
        },
        watch: {
            "$route": "getArticleByTag",//路由更新时执行方法
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
                    element.style.filter = 'blur(20px)'
                    element.style.transition = '.3s ease all'
                    element.onload = function () {
                        element.style.filter = 'blur(0px)'
                        element.style.transform = 'scale(1)'
                        let obj = el.querySelector('.img-thumb')
                        el.removeChild(obj)
                    };
                    el.appendChild(element)
                },
                componentUpdated: function (el, binding) {
                    var element = new Image();
                    element.className = "img-src"
                    element.style.width = '100%'
                    element.style.height = '200px'
                    element.style.zIndex = '200'
                    element.style.transform = 'scale(1.1)'
                    element.src = binding.value
                    element.style.filter = 'blur(20px)'
                    element.style.transition = '.3s ease all'
                    element.onload = function () {
                        element.style.filter = 'blur(0px)'
                        element.style.transform = 'scale(1)'
                        let obj = el.querySelector('.img-thumb')
                        el.removeChild(obj)
                    };
                    el.appendChild(element)
                },//路由更新后
            }
        },

        /*自定义指令生命周期
    （1）bind： 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。

　　（2）inserted： 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。

　　（3）update： 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。

　　（4）componentUpdated：被绑定元素所在模板完成一次更新周期时调用。

　　（5）unbind：只调用一次， 指令与元素解绑时调用。*/


        methods: {
            getArticleByTag() {
                this.$http.get(`http://localhost:8001/tags/article?tag=${this.$route.query.tag}`)
                    .then((res) => {
                        this.tags = res.body;
                        this.html = [];
                        this.tags.forEach((el) => {
                            var img = `<img src="http://58.87.107.26/${el.imgurl.slice(0, -4)}-thumb${el.imgurl.slice(-4)}" class="img-thumb" alt="标题图片" style="width:100%;height:100%">`
                            this.html.push(img)
                        })

                    })
            },


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
            height: 200px;
            width: 100%;
            margin-top: 10px;
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
                font-size: 12px;
                top: 16px;
                left: 20px;
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
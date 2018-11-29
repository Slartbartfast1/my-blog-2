<template>
    <keep-alive>
        <div class="tags">
            <Card v-for="(item,index) in tags" :key="item.slug">
                <router-link :to="{path:'/article',query:{id:item.articleid}}">
                    <div class="imgTitle" v-html="html[index]" v-src="'http://58.87.107.26/'+item.imgurl">{{html[index]}}
                    </div>
                </router-link>
                <div class="title">
                    <router-link :to="{path:'/article',query:{id:item.articleid}}">
                        <p>{{item.title}}</p>
                    </router-link>
                </div>
                <div class="summary">
                    <i>{{item.gist}}</i>
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
        methods: {
            getArticleByTag() {
                this.$http.get(`http://localhost:8001/tags/article?tag=${this.$route.query.tag}`)
                    .then((res) => {
                        this.tags = res.body;
                        this.html = [];
                        this.tags.forEach((el) => {
                            var img = `<img src="http://58.87.107.26/${el.imgurl.slice(0, -4)}-thumb${el.imgurl.slice(-4)}" class="img-thumb" alt="标题图片"
                            style="width:100%;height:100% ;
                            filter: blur(30px);
                            transition: 1s all ease;
                            position: absolute;
                            left: 0;
                            transform: scale(1.1);">`
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
            font-size: 12px;
        }
    }
</style>
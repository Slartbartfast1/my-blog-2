<template>
    <Layout>
        <Content>
            <div>
                <div v-for="item in article" :key="item.articleid">
                    <div class="imgTitle" :style="background">
                        <div class="gray">
                            <Row type="flex" justify="center">
                                <Col span="13">
                                    <div class="heading">
                                        <router-link :to="{path:'/tag',query:{tag:item.id,name:item.categoryName}}">
                                            <div class="tag">{{item.categoryName}}</div>
                                        </router-link>
                                        <h1>{{item.title}}</h1>
                                        <span>{{item.createTime}}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <Row type="flex">
                        <Col :xs="{span:20,offset:1}" :md="{span:13,offset:5}">
                            <Chat :articleid="articleid"></Chat>
                            <article v-html="article[0].content" v-highlight>
                            </article>
                        </Col>
                        <Col span="4">
                            <Catalog></Catalog>
                        </Col>
                    </Row>
                    <Random></Random>
                </div>
            </div>
            <BackToTop></BackToTop>
        </Content>
        <Footer>
            <Footer1></Footer1>
        </Footer>
    </Layout>
</template>

<script>
    import BackToTop from '../components/BackToTop'
    import Random from '../components/Random'
    import Catalog from '../components/Catalog'
    import Footer1 from '../components/Footer1'
    import Chat from '../components/Chat'
    const moment=require('moment');

    export default {
        name: "ArticlePAge",
        components: {
            BackToTop,
            Random,
            Catalog,
            Footer1,
            Chat
        },

        mounted: function () {
            this.getArticle();
            document.querySelectorAll("table").forEach((el) => {
                el.className = 'table';
            })
        },
        watch: {"$route": "getArticle",},

        data() {
            return {
                article: [],
                background: null,
                tags: [],
                articleid:null,
            }
        },
        methods: {
            getArticle() {
                this.$http.get(`http://localhost:8001/article?id=${this.$route.query.id}`)
                    .then((res) => {
                        this.article = res.body;
                        this.background = `background: no-repeat center center url(http://58.87.107.26/${res.body[0].imgurl})`;
                        this.articleid=res.body[0]['articleid'];
                        this.article[0]['createTime']=moment(this.article[0]['createTime']).format('YYYY年MM月DD日')
                    })
            }
        }
    }

</script>


<style scoped lang="scss">
.commentsWindow{
    margin-left:-60px;

}
    .imgTitle {
        min-height: 300px;
        width: 100%;
        background-size: cover !important;
        color: #FFF;
        position: relative;
        z-index: 999;
        .gray {
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, .5);

            .heading {
                h1 {
                    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", STHeiti, "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei", SimSun, sans-serif;
                    font-size: 55px;
                    line-height: 1.1;
                    font-weight: 700;
                    margin-bottom: 24px;
                }

                span {
                    font-size: 20px;
                    font-family: Lora, 'Times New Roman', serif;
                    font-style: italic;
                    font-weight: 300;
                }

                .tag {
                    cursor: pointer;
                    display: inline-block;
                    padding: 0 8px;
                    height: 24px;
                    font-size: 12px;
                    line-height: 24px;
                    border-radius: 12px;
                    color: #DDD;
                    border: 1px solid;
                    margin-bottom: 10px;
                    transition: .2s ease all;

                    &:hover {
                        background-color: rgba(255, 255, 255, .3);
                        color: white;
                    }
                }

                padding: 150px 0;
            }
        }

    }

    article {
        background-color: #fff;
        margin-top: 20px;
        font-size: medium;
        font-family: '楷体';

        p {


            /*line-height: 1.5em;*/
            padding: 10px;
            margin: 0;
            span{
                font-size: medium!important;
            }
        }


        blockquote {
            padding: 16px 0 16px 24px;
            font-size: 18px;
            font-weight: 300;
        }
    }

    .ivu-layout-footer {
        background-color: #fff;
    }
</style>





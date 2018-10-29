<template>
    <div>
    <div v-for="item in article">
        <div class="imgTitle" :style="background">
            <div class="gray">
            <Row type="flex" justify="center">
                <Col span="13">
                    <div class="heading">
                        <div class="tag">{{item.categoryName}}</div>
                    <h1>{{item.title}}</h1>
                <span>{{item.createTime}}</span>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
        <Row type="flex" justify="center">
            <Col span="13">
                <article  v-html="article[0].content">
                </article>
            </Col>
        </Row>


    </div>
    </div>
</template>

<script>
    export default {
        name: "ArticlePAge",
        beforeMount:function(){
            this.getArticle()
        },
        data(){
            return{
                article:[],
                background:null
            }
        },
        methods:{
            getArticle(){
                this.$http.get(`http://localhost:8001/article?id=${this.$route.query.id})`)
                    .then((res)=>{
                        this.article=res.body;
                        this.background=`background: no-repeat center center url(http://58.87.107.26/${res.body[0].imgurl})`;
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
.imgTitle {
    min-height:300px;
    width: 100%;
    background-size:cover!important;
    color:#FFF;
    position: relative;
    .gray {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .5);
    .heading{
        h1{
            font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB",STHeiti,"Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
            font-size:55px;
            line-height: 1.1;
            font-weight: 700;
            margin-bottom: 24px;
        }
        span{
            font-size:20px;
            font-family: Lora,'Times New Roman',serif;
            font-style: italic;
            font-weight: 300;
        }
        .tag{
            cursor: pointer;
            display: inline-block;
            padding: 0 8px;
            height: 24px;
            font-size: 12px;
            line-height: 24px;
            border-radius: 12px;
           color:#DDD;
            border: 1px solid ;
            margin-bottom: 10px;
            transition: .2s ease all;
            &:hover {
                background-color: rgba(255,255,255,.3);
                color: white;
            }
        }
padding:150px 0;
    }
}




}
article{
    margin-top:20px;
    font-size:20px;
    p{
        margin:20px;
    }

}
</style>
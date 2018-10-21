<template>
    <div id="app">
        <HeadNav></HeadNav>
        <Row type="flex" justify="center">
            <Col span="15" >
                <AuthorBox></AuthorBox>
            </Col>

        </Row>


        <Row type="flex" justify="center" class="featured">
            <Col span="15">
                <div class="cate"><b>Featured</b></div>
                <ArticleBox></ArticleBox>
            </Col>
        </Row>
        <Row type="flex" justify="center" class="featured">
            <Col span="15">
                <div class="cate"><b>Lasted</b></div>
                <ArticleBox></ArticleBox>
            </Col>
        </Row>

        <Footer1></Footer1>

    </div>
</template>
<script>
    import HelloWorld from './components/HelloWorld.vue'
    import HeadNav from './components/HeadNav.vue'
    import Footer1 from './components/Footer1.vue'
    import ArticleBox from './components/ArticleBox.vue'
    import AuthorBox from './components/AuthorBox'


    export default {
        name: 'app',
        components: {
            HelloWorld,
            HeadNav,
            Footer1,
            ArticleBox,
            AuthorBox,
        }
    }
</script>

<style lang="scss">
    #app {

        .cate{
            color:black;
            padding:40px 0;
            font-size: 25px;
            font-weight: 400;
        }
    }

</style>

<template>
    <div id="app">
        <Layout>
<Header>
        <HeadNav></HeadNav>
</Header>
        <Content>
        <Row type="flex" justify="center">
            <Col span="15" >
                <AuthorBox></AuthorBox>
            </Col>
        </Row>
        <Row type="flex" justify="center" class="featured">
            <Col span="15">
                <div class="cate"><b>Featured</b></div>
                <Featured></Featured>
            </Col>
        </Row>
        <Row type="flex" justify="center" class="featured">
            <Col span="15">
                <div class="cate"><b>Latest</b></div>
                <Latest></Latest>
            </Col>
        </Row>
        </Content>
        <Footer>
        <Footer1></Footer1>
        </Footer>
        </Layout>
    </div>
</template>
<script>
    import HelloWorld from './components/HelloWorld.vue'
    import HeadNav from './components/HeadNav.vue'
    import Footer1 from './components/Footer1.vue'
    import Featured from './components/Featured.vue'
    import Latest from './components/Latest.vue'
    import AuthorBox from './components/AuthorBox'


    export default {

        name: 'app',
        components: {
            HelloWorld,
            HeadNav,
            Footer1,
            AuthorBox,
            Featured,
            Latest,
        },
    }
</script>

<style lang="scss">
    #app {
        .ivu-layout-header{
            background-color: #ddd;
            padding:0;
        }
        .ivu-layout-content{
            background-color: #fff;
        }
        .cate{
            color:black;
            padding:40px 0;
            font-size: 25px;
            font-weight: 400;
        }
    }

</style>

<template>
        <Layout>
            <Header>
                <HeadNav></HeadNav>
            </Header>
            <Content>
                <Row type="flex" justify="center">
                    <Col span="14">
                        <AuthorBox></AuthorBox>
                    </Col>
                </Row>
                <router-view></router-view>
                <BackToTop></BackToTop>
            </Content>
            <Footer>
                <Footer1></Footer1>
            </Footer>
        </Layout>
</template>

<script>
    import AuthorBox from '../components/AuthorBox'
    import FeaturedAndLatest from '../components/FeaturedAndLatest'
    import HeadNav from '../components/HeadNav'
    import Footer1 from '../components/Footer1'
    import BackToTop from '../components/BackToTop'
    // import LoadMore from '../components/LoadMore'

    export default {
        name: "Index",
        components:{
            AuthorBox,
            HeadNav,
            Footer1,
            FeaturedAndLatest,
            BackToTop,

        },

    }
</script>

<style lang="scss">
    .ivu-card-body{
        padding:0 !important;
    }
    #hero {
        /*<!--background:no-repeat 0 -600px  url(https://cdn.vuetifyjs.com/images/parallax/material2.jpg);-->*/
    }
    .ivu-layout-header {
        background-color: #ddd;
        padding: 0;
    }
    .ivu-layout-content {
        background-color: #ddd;
    }

</style>
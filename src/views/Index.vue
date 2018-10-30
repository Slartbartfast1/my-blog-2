<template>
        <Layout>
            <Header>
                <HeadNav></HeadNav>
            </Header>
            <Content>
                <Row type="flex" justify="center">
                    <Col span="15">
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

<style scoped lang="scss">
    .highlight {
        &:after {
            display: block;
            content: "";
            height: 3px;
            width: 0px;
            background-color: #0082a7;
            transition: width .5s ease;
        }
        &:hover {
            &:after {
                width: 100%;
            }

        }
    }
    #hero {
        /*<!--background:no-repeat 0 -600px  url(https://cdn.vuetifyjs.com/images/parallax/material2.jpg);-->*/
    }

    .ivu-card {
        margin: 48px 0;
    }
    .ivu-layout-header {
        background-color: #ddd;
        padding: 0;
    }
    .ivu-layout-content {
        background-color: #fff;
    }

</style>
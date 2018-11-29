<template>
    <Layout>
        <Header>
            <HeadNav></HeadNav>
        </Header>
        <Content>
            <Row type="flex" justify="center">
                <Col span="14">
                    <Chat :articleid="228"></Chat>
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
    import Chat from '../components/Chat'

    export default {
        name: "Index",
        components: {
            AuthorBox,
            HeadNav,
            Footer1,
            FeaturedAndLatest,
            BackToTop,
            Chat,
        },

    }
</script>

<style lang="scss">
    .ivu-card-body {
        padding: 0 !important;
    }

    .ivu-layout-header {
        background-color: #ddd;
        padding: 0;
    }

    .ivu-layout-content {
        background-color: #ddd;
    }

    ::-webkit-scrollbar {
        width: 16px;
        height:16px;
        background-color: rgba(0, 205, 246, 0.05);
    }

    ::-webkit-scrollbar-track
    {
        background-color: #fff;
    }
    ::-webkit-scrollbar-thumb{
        height:50px;
        background: rgba(0, 190, 228, 0.13);
    }

</style>
<template>
    <div id="app">
        <Layout>
<Header>
        <HeadNav></HeadNav>
</Header>
        <Content>
        <Row type="flex" justify="center" id="hero">
            <Col span="15" >
                <AuthorBox></AuthorBox>
            </Col>
        </Row>
        <router-view/>
        </Content>
        <Footer>
        <Footer1></Footer1>
        </Footer>
        </Layout>
    </div>
</template>
<script>
    import HeadNav from './components/HeadNav.vue'
    import Footer1 from './components/Footer1.vue'
    import AuthorBox from './components/AuthorBox'

    export default {

        name: 'app',
        components: {
            HeadNav,
            Footer1,
            AuthorBox,
        },
    }
</script>

<style lang="scss">
    #app {
        .highlight{
            &:after{
                display:block;
                content: "";
                height: 3px;
                width: 0px;
                background-color: #0082a7;
                transition: width .5s ease;
            }
            &:hover{
                &:after{
                    width:100%;
                }

            }
        }

        .ivu-card{
            margin:48px 0 ;
        }
        .ivu-layout-header{
            background-color: #ddd;
            padding:0;
        }
        .ivu-layout-content{
            background-color: #fff;
        }

    }

</style>

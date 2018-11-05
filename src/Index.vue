<template>
    <div id="app">
                <router-view/>
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
        .underline {
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
            background:no-repeat 0 -600px  url(https://cdn.vuetifyjs.com/images/parallax/material2.jpg);
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

    }

</style>

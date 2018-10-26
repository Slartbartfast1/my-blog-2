<template>
    <div>
        <Row type="flex" justify="center" class="featured">
            <Col span="12">
                <Affix v-show="this.show">
                    <div class="cate">
                        <a href="#">
                            <Icon type="md-pricetag"/>
                        </a>
                        <b>Featured</b>
                    </div>
                </Affix>
                <Featured></Featured>
            </Col>
        </Row>
        <Row type="flex" justify="center" class="featured">
            <Col span="12">
                <Affix @on-change="mission">
                    <div class="cate">
                        <a href="#">
                            <Icon type="md-pricetag"/>
                        </a>
                        <b>Latest</b>
                    </div>
                </Affix>
                <Latest></Latest>
            </Col>
        </Row>
    </div>
</template>

<script>
    import Featured from '../components/Featured'
    import Latest from '../components/Latest'

    export default {
        name: 'home',
        components: {
            Featured,
            Latest,
        },
        data() {
            return {
                show: true
            }
        },
        methods: {
            mission: function () {
                return this.show = !this.show
            }
        }
    }
</script>
<style scoped lang="scss">
    .cate {
        color: black;
        font-size: 25px;
        font-weight: 400;
    }
</style>

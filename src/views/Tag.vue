<template>
    <div>
        <Row type="flex" justify="center" class="featured">
            <Col span="12">
                <Affix v-show="this.show">
                    <div class="cate">
                        <a href="#">
                            <Icon type="md-pricetag"/>
                        </a>
                        <b>{{this.$route.query.name}}</b>
                    </div>
                </Affix>
                <TagComponent></TagComponent>
            </Col>
        </Row>
    </div>
</template>

<script>
    import TagComponent from '../components/TagComponent'

    export default {
        name: 'tag',
        components: {
    TagComponent,
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

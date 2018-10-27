<template>
    <Content>
        <Row type="flex" justify="center">
            <Col span="15">
                <AuthorBox></AuthorBox>
            </Col>
        </Row>
        <router-view/>
    </Content>
</template>

<script>
    import AuthorBox from '../components/Featured'
    import Featured from '../components/Featured'
    import Latest from '../components/Latest'
    export default {
        name: "Index",
        component:
        AuthorBox,
    }
</script>

<style scoped>

</style>
<template>
    <div class="tagBox">
        <router-link :to="{path:'/'}">
            <div class="tag icon">
                <Icon type="md-home"/>
            </div>
        </router-link>
        <router-link v-for="item in tags" :key="item.slug" :to="{path:'/tag1',query:{tag:item.id,name:item.categories}}" >
            <div class="tag">{{item.categories}}</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        mounted: function () {
            this.getTags()
        },
        name: "Tags",
        data() {
            return {
                tags: [],
            }
        },
        methods: {
            getTags: function () {
                this.$http.get('/tags/name')
                    .then((res) => {
                        this.tags = res.body
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .tagBox {
        margin:30px auto;
        text-align: center;
        vertical-align: center;
        .tag {
            cursor: pointer;
            display: inline-block;
            padding:4px;
            font-size: 12px;
            border-radius:15px;
            color: rgb(0, 133, 161);
            border: 1px solid rgb(0, 133, 161);
            margin: 5px;
            transition: .2s ease all;
            &:hover {
                background-color: rgb(0, 133, 161);
                color: white;
            }
        }
        .ivu-icon-md-homex{
            font-size:12px;
            margin-top: -4px;
        }
    }


</style>
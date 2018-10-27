<template>
    <div class="tagBox">
        <router-link :to="{path:'/'}">
            <div class="tag icon">
                <Icon type="md-home" size="22"/>
            </div>
        </router-link>
        <router-link v-for="item in tags" :to="{path:'/tag',query:{tag:item.id,name:item.categories}}">
            <div class="tag">{{item.categories}}</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        mounted: function () {
            this.getTags()
        },
        updated: function () {
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
                this.$http.get('http://localhost:8001/tags/name')
                    .then((res) => {
                        this.tags = res.body
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .tagBox {
        margin: 48px auto 48px auto;
        text-align: center;
        vertical-align: center;

        .tag {
            cursor: pointer;
            display: inline-block;
            padding: 0 8px;
            height: 24px;
            font-size: 12px;
            line-height: 24px;
            border-radius: 12px;
            color: rgb(0, 133, 161);
            border: 1px solid rgb(0, 133, 161);
            margin: 5px;
            transition: .2s ease all;
            &:hover {
                background-color: rgb(0, 133, 161);
                color: white;
            }
        }
        .ivu-icon-md-home {
            margin-top: -4px;
        }
    }


</style>
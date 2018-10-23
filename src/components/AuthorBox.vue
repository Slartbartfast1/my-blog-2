<template>
    <div class="author">

        <div class="avatar"><img src="https://slartbartfast.cn/admin/avatar/avatar%20(1)_gaitubao_com_296x296.png"
                                 alt=""></div>
        <div class="nickName"><h1>泛银河系含漱爆破液</h1>
            <ButtonGroup>
                <Button icon="logo-github" type="dashed"></Button>
                <Button icon="ios-chatbubbles" type="dashed"></Button>
                <Button icon="logo-steam" type="dashed"></Button>
                <Button icon="ios-at" type="dashed"></Button>
            </ButtonGroup>
        </div>
        <div class="search">
            <Icon type="ios-search" size="66"/>
            <input class="input" type="search" autocomplete="off" placeholder="搜索博文">
        </div>
        <div class="tags">
            <Tag color="primary" checkable>标签一</Tag>
            <Tag color="primary" checkable>标签一</Tag>
            <Tag color="primary" checkable>标签一</Tag>
        </div>
        <divider></divider>

    </div>
</template>

<script>
    export default {
        name: "AuthorBox"
    }
</script>

<style scoped lang="scss">
    .author {
        background-color: #FFF;
        margin-top: 30px;
        position: relative;

        .avatar {
            margin: 96px auto 0 auto;
            width: 160px;
            height: 160px;
            border-radius: 80px;
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, .1);
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .nickName {

            display: block;
            margin: 20px auto 0 auto;
            text-align: center;
            .ivu-btn-group {
                margin-top: 10px;
                .ivu-btn {
                    margin: 0 6px;
                }
            }
        }
        .search {
            margin: 30px auto 0 auto;
            width: 80%;
            height: 88px;
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, .1);
            transition: .3s ease all;
            padding: 11px;

            &:hover {
                box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .2);
            }
            .ivu-icon-ios-search {
                color: #c7c9c9;
                margin-bottom: 16px;
            }
            .input {
                border: none;
                outline: none;
                height: 66px;
                line-height: 32px;
                font-size: 24px;
                margin-left: 10px;
                width: 80%;
                color: #767878;
            }
            border-radius: 3px;

            .ivu-input-wrapper {
                left: 50%;
                transform: translateX(-50%);
            }

        }
        .tags {
            margin: 30px auto 0 auto;
            width: 90%;
            height: 100px;
            display: flex;
            justify-content: center;

            flex-wrap: wrap;
            .ivu-tag {
                margin: 10px 10px;
            }
        }

    }
</style>
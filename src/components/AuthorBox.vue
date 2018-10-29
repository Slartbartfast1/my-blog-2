<template>
    <div class="author"  id="hero">
        <div class="avatar animated" v-bind:class="random" @click="animation" ><img src="https://slartbartfast.cn/admin/avatar/avatar%20(1)_gaitubao_com_296x296.png"
                                 alt=""></div>
        <div class="nickName">
            <h1 class="underline">泛银河系含漱爆破液</h1>
            <div></div>
            <ButtonGroup>
                <Button icon="logo-github" type="dashed"></Button>
                <Button icon="ios-chatbubbles" type="dashed"></Button>
                <Button icon="logo-steam" type="dashed"></Button>
                <Button icon="ios-at" type="dashed"></Button>
            </ButtonGroup>
        </div>
        <divider></divider>
        <div class="search">
            <Icon type="ios-search" size="66"/>
            <input class="input" type="search" autocomplete="off" placeholder="Search the blog">
        </div>
<Tags></Tags>
    </div>
</template>

<script>
    import 'animate.css'
    import Tags from '../components/Tags'
    export default {
        name: "AuthorBox",
        components:{
            Tags
        },
        data() {
            return {
                animate: ['bounce',
                    'flash',
                    'pulse',
                    'rubberBand',
                    'shake',
                    'headShake',
                    'swing',
                    'tada',
                    'wobble',
                    'jello',
                    'bounceIn',
                    'bounceInDown',
                    'bounceInLeft',
                    'bounceInRight',
                    'bounceInUp',
                    'fadeIn',
                    'fadeInDown',
                    'fadeInDownBig',
                    'fadeInLeft',
                    'fadeInLeftBig',
                    'fadeInRight',
                    'fadeInRightBig',
                    'fadeInUp',
                    'fadeInUpBig',
                    'flipInX',
                    'flipInY',
                    'lightSpeedIn',
                    'rotateIn',
                    'rotateInDownLeft',
                    'rotateInDownRight',
                    'rotateInUpLeft',
                    'rotateInUpRight',
                    'jackInTheBox',
                    'rollIn',
                    'zoomIn',
                    'zoomInDown',
                    'zoomInLeft',
                    'zoomInRight',
                    'zoomInUp',
                    'heartBeat'],
                random:'tada',

            }
        },
        methods:{
            animation:function(){
                var num=Math.random()*this.animate.length;
                this.random=this.animate[num.toFixed(0)];
                console.log(this.random)
            }
        }
    }
</script>

<style scoped lang="scss">
    .author {
        background-color: #FFF;
        margin-top: 30px;
        position: relative;

        .avatar {

            cursor: pointer;
            margin: 96px auto 0 auto;
position:relative;
            top:-50px;
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
            h1{
                display: inline-block;
            }

            .ivu-btn-group {
                /*display: block;*/
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
                transition:.3s ease all;

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


    }
</style>
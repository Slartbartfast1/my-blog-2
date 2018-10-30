<template>
    <div class="backToTop hide" @click="goTop">
        <Icon type="md-arrow-up" size="20"/>
    </div>
</template>

<script>
    export default {
        name: "BackToTop",
        mounted() {
            window.addEventListener('scroll', this.hide)
        },
        methods: {
            hide() {
                if (window.pageYOffset < 1400) {
                    document.getElementsByClassName('backToTop')[0].className = 'backToTop hide';

                } else {
                    document.getElementsByClassName('backToTop')[0].className = 'backToTop';
                }
            },
            goTop() {
                var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(this.goTop);//检测动画帧数
                    window.scrollTo(0, currentScroll - (currentScroll / 4));
                }
            }
        },


    }
</script>

<style scoped lang="scss">
    .backToTop {
        position: fixed;
        right: 30px;
        bottom: 30px;
        height: 40px;
        width: 40px;
        box-shadow: -1px -1px 10px 1px rgba(0, 0, 0, .1);
        background-color: #FFF;
        line-height: 40px;
        text-align: center;
        transition: .3s all ease;
        cursor: pointer;
        &:hover {
            box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .1);
            background-color: #f7f7f7;
        }
    }

    .hide {
        height:0;
        width:0;
        right:-40px;
        bottom:70px;
    }

</style>
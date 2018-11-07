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
                window.pageYOffset < 1400?
                    document.getElementsByClassName('backToTop')[0].className = 'backToTop hide'
                    : document.getElementsByClassName('backToTop')[0].className = 'backToTop';
            },
            goTop() {
                var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(this.goTop);//最小动画帧数
                    window.scrollTo(0, currentScroll - (currentScroll / 5));
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
        transition:all .3s  ease,background-color 0s;
        cursor: pointer;
        border-radius: 2px;
        &:hover {
            box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .1);
            background-color: #f7f7f7;
        }
    }
    .hide {
        right:-41px;
        transform: rotate(90deg);
    }

</style>
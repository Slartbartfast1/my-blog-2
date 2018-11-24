<template>
    <div class="backToTop hide" @click="goTop()">
        <Icon type="md-arrow-up" size="16"/>
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
                let el=document.getElementsByClassName('backToTop')[0];
                window.pageYOffset < 1400 ?
                    el.className = 'backToTop hide'
                    :el.className = 'backToTop';
            },

            goTop() {
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(this.goTop);//最小动画帧数
                    window.scrollTo(0, currentScroll - (currentScroll / 6));
                }
            }
        },


    }
</script>

<style scoped lang="scss">
    .backToTop {
        position: fixed;
        right: 40px;
        bottom: 30px;
        height: 36px;
        width: 36px;
        box-shadow: -1px -1px 10px 1px rgba(0, 0, 0, .1);
        background-color: #FFF;
        line-height: 32px;
        text-align: center;
        transition: all .3s ease, background-color 0s;
        cursor: pointer;
        &:hover {
            box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, .1);
            background-color: #f7f7f7;

        }
    }

    .hide {
        right: -37px;
        transform:rotateZ(180deg);
        border-radius: 0;
    }

</style>
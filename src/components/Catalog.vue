<template>
    <Affix>
        <div class="catalog">
            <div class="catalogTitle">目录</div>
            <div class="catalogBody">
                <div class="highlightTitle" :style="'top:'+this.Top+'px'"></div>
                <ul>
                    <li v-for="(item,i) in titles"
                        :class="'item '+item.WT+' i'+item.index"
                        :key="item.index"
                        @click="scrollToAnchor(i)">
                        {{item.text}}
                    </li>
                </ul>
            </div>
        </div>
    </Affix>
</template>

<script>
    export default {
        name: "Catalog",
        mounted: function () {
            this.catchHeader();
            window.addEventListener('scroll', this.scrollListener)
        },
        data() {
            return {
                titles: [],
                Top: 30,
            }
        },
        methods: {
            scrollToAnchor(index) {
                let offset = this.titles[index].offset;
                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                });
            },

            scrollListener() {
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                let len = this.titles.length;
                let min = Math.abs(currentScroll - this.titles[0].offset);
                let minIndex = 0;
                let ul = document.querySelector('.catalogBody ul');
                let per = ul.offsetHeight / len;
                let all = document.querySelectorAll('.item');
                for (let i = 0; i < len; i++) {
                    if (currentScroll - this.titles[i].offset > -40) {
                        let dis = Math.abs(currentScroll - this.titles[i].offset);
                        if (dis <= min) {
                            min = dis;
                            minIndex = i;
                        }
                    }
                }
                let el = document.querySelectorAll('.item')[minIndex];
                Array.prototype.forEach.call(all, el => {
                    this.removeActive(el)
                });
                this.Top = minIndex * per;
                this.addActive(el);
            },

            removeActive(obj) {
                let obj_class = obj.className + '';
                obj.className = obj_class.replace(' active', '');
            },

            addActive(obj) {
                let obj_class = obj.className;
                if (obj_class.indexOf('active') !== -1) return;
                obj.className = obj_class + ' active';
            },

            catchHeader() {
                let el = Array.prototype.slice.call(document.querySelectorAll('h1,h2,h3,h4,h5'), 1);
                let len = el.length;
                let head = document.getElementsByClassName('imgTitle')[0];
                for (let i = 0; i < len; i++) {
                    let obj = {
                        WT: 'd' + el[i].localName[1],
                        text: el[i].innerText,
                        offset: el[i].offsetTop + head.offsetHeight,
                        index: i
                    };
                    el[i].id = `header${i}`;
                    this.titles.push(obj);
                }
            },
        },
    }
</script>

<style scoped lang="scss">

    .catalog {
        width: 100%;
        background-color: #FCFCFC;
        margin-left: 16px;

        .catalogTitle {
            background-color: #fff;
            padding: 4px 0 4px 12px;
            width: 100%;
            font-weight: bold;
            font-size: 16px;
        }

        .catalogBody {
            position: relative;

            .highlightTitle {
                cursor: pointer;
                height: 30px;
                position: absolute;
                display: block;
                left: 0;
                right: 0;
                z-index: 2;
                border-left: 3px solid #0082a7;
                transition: all .2s ease;
                background-color: rgba(0, 198, 238, .05);
            }

            ul {
                padding-left: 0 !important;
                position: relative;

                .item {
                    height: 30px;
                    line-height: 30px;
                    text-overflow: ellipsis;
                    cursor: pointer;
                    width: 100%;
                    background-color: #fff;
                    display: block;
                    position: relative;
                    padding-left: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    z-index: 1;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 4px;
                        margin-top: -2px;
                        width: 4px;
                        height: 4px;
                        background-color: currentColor;
                        border-radius: 50%;
                    }

                    &:hover {
                        color: #0082a7;
                    }
                }

                .active {
                    color: #0082a7;
                }

                .d1 {
                    padding-left: 12px;
                    font-weight: 800;

                    &:before {
                        width: 6px;
                        height: 6px;
                    }
                }

                .d2 {
                    padding-left: 16px;
                    font-weight: 600;

                    &:before {
                        left: 8px;
                    }
                }

                .d3 {
                    padding-left: 24px;
                    font-weight: 400;

                    &:before {
                        left: 14px;
                        width: 3px;
                        height: 3px;
                    }
                }

                .d4, .d5 {
                    padding-left: 36px;
                    font-weight: 200;
                    font-size: .7rem;

                    &:before {
                        left: 24px;
                        width: 2px;
                        height: 2px;
                    }
                }
            }
        }
    }
</style>
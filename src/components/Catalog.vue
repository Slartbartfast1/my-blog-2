<template>
    <Affix>
        <div class="catalog">
            <div class="catalogTitle">目录</div>
            <div class="catalogBody">
                <ul>
                    <li v-for="(item,i) in titles"
                        :class="'item '+item.WT+' i'+item.i"
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
            }
        },
        methods: {
            scrollToAnchor(index) {
                let offset = this.titles[index].offset;
                window.scrollTo({
                    top: offset-20 ,
                    behavior: "smooth"
                });
            },

            scrollListener() {
                let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                let len = this.titles.length;
                let min = 10000;
                let minIndex = 0;
                for (let i = 0; i < len; i++) {
                    if (currentScroll - this.titles[i].offset >0) {
                        let dis = Math.abs(currentScroll - this.titles[i].offset);
                        if (dis <= min) {
                            min = dis;
                            minIndex = i;
                        }
                    }
                }
                let el = document.querySelectorAll(`ul li`)[minIndex];
                let all = document.querySelectorAll(`ul li`);
                Array.prototype.forEach.call(all, el => {
                    this.removeActive(el)
                });
                this.addActive(el);
            },

            removeActive(obj) {
                let obj_class = obj.className + '';
                let removed = obj_class.replace(' active', '');
                obj.className = removed;
            },

            addActive(obj) {
                let obj_class = obj.className;
                if (obj_class.indexOf('active') >= 0) return;
                let added = obj_class + ' active';
                obj.className = added;
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
            font-size: 1.2rem;
        }

        .catalogBody {
            ul {
                padding-left: 0 !important;

                .item {
                    &:hover {
                        background-color: #DDD;
                    }
                    text-overflow:ellipsis;
                    cursor: pointer;
                    width: 100%;
                    background-color: #fff;
                    display: block;
                    position: relative;
                    padding: 4px 0 4px 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .active {
                    background-color: #DDD;
                }

                .d1 {
                    font-weight: 800;
                }

                .d2 {
                    padding-left: 20px;
                    font-weight: 600;
                }

                .d3 {
                    padding-left: 30px;
                    font-weight: 400;
                }

                .d4, .d5 {
                    padding-left: 40px;
                    font-weight: 200;
                }
            }

        }
    }
</style>
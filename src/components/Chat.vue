<template>
    <div class="commentsWindow">
        <button @click="flip" class="commentsButton">
            <Badge class="badge" :count="comments.length" type="normal">
                <Icon type="ios-chatbubbles-outline" size="22"/>
            </Badge>
        </button>
        <div :class="'wrap animated '+show" v-show="show">
            <div class="chat">
                <div class="pingLun">评论</div>
                <div class="history">
                    <div class="sofa" v-if="!comments.length">还没有人评论呢(～ o ～)</div>
                    <div class="comments animated fadeIn" v-for="(item,i) in comments">
                        <small>#{{i}}</small>
                        <kbd>{{item.name}}</kbd>
                        <div class="post">{{item.content}}&nbsp&nbsp&nbsp&nbsp&nbsp</div>
                        <Time :time="item.date" Interval="1"/>
                        <a @click="reply(item.id,item.name)">&nbsp&nbsp&nbsp回复</a>
                    </div>
                </div>
                <div class="inputBox">
                    <form id="commentSubmit" @submit.prevent="submitThis" action="http://localhost:8001/comments"
                          method="post">
                        <div class="name">
                            <label for="name">
                                <input type="text" id="name" name="name" placeholder="Name(选填)" autocomplete="off"
                                       v-model="myComment.name"
                                       aria-required="true">
                            </label>
                        </div>
                        <div class="email">
                            <label for="email">
                                <input type="email" id="email" name="email" placeholder="Email(填写邮箱及时获得回复哦)"
                                       autocomplete="off" required
                                       v-model="myComment.email">
                            </label></div>
                        <div class="content">
                            <label for="content">
                                <input name="content" id="content" placeholder="Blablabla" class="bla" required
                                       v-model="myComment.content"
                                       autocomplete="off"></input></label>
                            <button class="submit" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        props: {
            articleid: Number,
            required: true
        },
        data() {
            return {
                show: null,
                comments: [],
                disabled: false,
                info: null,
                //TODO:Cookie存入用户名
                myComment: {
                    id: null,
                    name: null,
                    email: null,
                    content: null,
                    date: null,
                    reply: null,
                    articleid: this.articleid,
                    url: null,
                },
            }
        },
        mounted: function () {
            this.getComments()
        },

        methods: {
            flip() {
                let el = document.querySelector('.wrap');
                if (this.show === null) {
                    this.show = 'flipInY'
                }
                if (el.className === 'wrap animated flipInY') {
                    this.show = 'fadeOut'
                }
                if (el.className === 'wrap animated fadeOut') {
                    this.show = 'flipInY'
                }
            },
            success(content) {
                this.$Message.success(content);
            },
            error(content) {
                this.$Message.error(content);
            },
            getComments() {
                this.$http.get(`http://localhost:8001/comments?articleid=${this.articleid}`)
                    .then(res => {
                        this.comments = res.body;
                        this.myComment.url = window.location.href;
                    })

            },
            reply(id, name) {
                this.myComment.reply = id;
                this.myComment.content = `@${name}:`;
            },
            submitThis(el) {
                let history = document.querySelector('.history');
                let obj = document.querySelector('.submit');
                obj.setAttribute('disabled', true);
                this.$http.post(`http://localhost:8001/comments`, this.myComment)
                    .then(res => {
                        if (res.bodyText === '添加成功') {
                            this.getComments();
                            this.myComment.content = null;
                            this.success('评论成功');
                            history.scrollTop = history.scrollHeight;
                            obj.removeAttribute('disabled')
                        } else {
                            this.error('评论失败');
                            obj.removeAttribute('disabled')
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .commentsWindow {
        height: 600px;
        width: inherit;
        position: fixed;

        .fadeOut {
            display: none;
        }

        .commentsButton {
            &:active {
                box-shadow: 0 2px 3px 1px rgba(0, 0, 0, .1) inset;
            }

            min-width: 50px;
            min-height: 50px;
            position: fixed;
            top: 50%;
            outline: none;
            border-radius: 50%;
            box-shadow: 0 0 1px 1px rgba(0, 0, 0, .1);
            z-index: 2;
            background-color: #fcfcfc;

            .ivu-badge-count {
                background-color: rgb(0, 133, 161) !important;
            }
        }


        .wrap {
            background-color: #ddd;
            position: fixed;
            top: 20%;
            margin-left: 56px;
            z-index: 999;
            width: inherit;
            border: 1px solid rgba(255, 255, 255, 0.04);

            .pingLun {
                text-align: center;
                font-size: medium;
                background-color: #fff;
            }

            .history {
                height: 400px;
                background-color: #fff;
                padding-top: 10px;
                overflow: scroll;
                font-size: small;

                .sofa {
                    height: 60px;
                }

                .post {
                    display: inline-block;
                }

                kbd {
                    background-color: rgb(0, 133, 161);

                }

                .comments {
                    padding: 10px;
                    min-height: 30px;
                    word-break: break-word;

                    a {
                        display: none;
                        right: 0;
                        position: relative;
                    }

                    &:nth-child(odd) {
                        background-color: rgba(212, 212, 212, 0.29);
                    }

                    &:hover {
                        background-color: #f8f8f8;

                        a {
                            display: inline-block;
                        }
                    }
                }
            }

            .inputBox {
                font-size: small;
                height: 50%;

                input, textarea {
                    height: 100%;
                    width: 100%;
                    outline: none;
                    padding: 0 0 0 10px;
                }

                .name, .email {
                    width: 50%;
                    display: inline-block;
                    background-color: rgba(233, 233, 233, 0.11);

                }

                .name {
                    border-right: 3px dotted rgba(0, 130, 167, 0.26)
                }

                .email {

                }
            }

            .content {

                background-color: #fff;
                padding-right: 150px;

                button {
                    transition: .2s all ease;
                    border-left: rgba(0, 0, 0, .1) solid 1px;
                    outline: none;
                    position: absolute;
                    width: 150px;
                    background-color: rgba(3, 234, 249, 0.07);
                    font-size: small;

                    &:disabled {
                        background-color: rgba(2, 57, 60, 0.34);

                        &:hover {
                            background-color: rgba(2, 57, 60, 0.34);
                            color: inherit;
                        }

                    }

                    &:hover {
                        background-color: rgb(9, 179, 191);
                        color: #fff;
                    }
                }
            }
        }
    }
</style>
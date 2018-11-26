<template>
    <div class="wrap">
        <div class="chat" v-show="show">
            <div class="history">
                <div class="comments" v-for="(item,i) in comments">
                    <kbd>{{item.name}}</kbd>
                    <div class="post">{{':'+item.content}}&nbsp&nbsp&nbsp&nbsp&nbsp</div>
                    <Time :time="item.date" Interval="10"/>
                    <a @click="reply(item.id,item.name)">&nbsp&nbsp&nbsp回复</a>
                </div>
            </div>
            <div class="inputBox">
                <form id="commentSubmit" @submit.prevent="submitThis" action="http://localhost:8001/comments"
                      method="post">
                    <div class="name">
                        <label for="name">
                            <input type="text" id="name" name="name" placeholder="Name" autocomplete="off"
                                   v-model="myComment.name"
                                   aria-required="true">
                        </label>
                    </div>
                    <div class="email">
                        <label for="email">
                            <input type="email" id="email" name="email" placeholder="Email" autocomplete="off"
                                   v-model="myComment.email">
                        </label></div>
                    <div class="content">
                        <label for="content">
                            <input name="content" id="content" placeholder="Blabla" class="bla"
                                   v-model="myComment.content"
                                   autocomplete="off"></input></label>
                        <button type="submit">发送</button>
                    </div>
                </form>
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
                show: true,
                comments: [],
                myComment: {
                    id: null,
                    name: null,
                    email: null,
                    content: null,
                    date: null,
                    reply: null,
                    articleid: this.articleid
                },
            }
        },
        mounted: function () {
            this.getComments()
        },
        methods: {
            getComments() {
                this.$http.get(`http://localhost:8001/comments?articleid=${this.articleid}`)
                    .then(res => {
                        this.comments = res.body;
                        console.log(this.comments)
                    })
            },
            reply(id, name) {
                this.myComment.reply = id;
                console.log(this.myComment.reply, name);
                let textarea = document.querySelector('.bla');
                textarea.value = `@${name}:`;
                console.log(textarea.value)
            },
            submitThis(el) {
                this.myComment.date = Date.now();
                if (!this.myComment.name) {
                    this.myComment.name = 'anonymous';
                }
                this.$http.post(`http://localhost:8001/comments`, this.myComment)
                    .then(res => {
                        console.log(res)
                    })
            }
        }

    }
</script>

<style scoped lang="scss">
    .wrap {
        background-color: #ddd;
        position: fixed;
        top: 20%;
        left: 25%;
        z-index: 2;
        overflow: hidden;

        .history {
            height: 400px;
            width: 500px;
            background-color: #fff;
            padding-top: 10px;

            div {
                display: inline-block;
            }

            kbd {
                background-color: rgb(0, 133, 161);
                font-size: .8rem;
            }

            .comments {
                min-height: 30px;
                width: 100%;
                word-break: break-word;

                a {
                    display: none;
                    right: 0;
                    position: relative;
                }

                &:nth-child(odd) {
                    background-color: #f8f8f8;
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
            font-size: 1.2rem;
            height: 50%;

            input, textarea {
                height: 100%;
                width: 100%;
                outline: none;
                padding: 0 0 0 10px;
            }

            .name, .email {
                width: 50%;
                height: 50px;
                display: inline-block;
                background-color: rgba(246, 246, 246, 0.96);

            }

            .name {
                border-right: 3px dotted rgba(0, 130, 167, 0.26)
            }

            .email {

            }
        }

        .content {
            height: 50px;
            background-color: #fff;
            padding-right: 50px;

            button {
                transition: .2s all ease;
                border-left: rgba(0, 0, 0, .1) solid 1px;
                outline: none;
                position: absolute;
                width: 50px;
                height: 50px;

                &:hover {
                    background-color: rgb(5, 105, 112);
                    color: #fff;
                }
            }
        }
    }


</style>
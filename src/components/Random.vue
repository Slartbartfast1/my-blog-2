<template>
    <Row type="flex" justify="center" class="random">
        <div class="luck" ><Button type="primary" shape="circle" icon="md-refresh" :loading="loading" @click="getRandom"></Button></div>
        <div class="randomItem" v-for="item in random" :key="item.articleid">
            <router-link :to="{path:'/article',query:{id:item.articleid}}">
                <div class="img">
                    <img v-lazy="'http://58.87.107.26/'+item.imgurl" alt="标题图片">
                </div>
            </router-link>
            <div class="title">
                <span>{{item.author+' '+item.createTime.slice(0,10)+':'}}</span>
                <router-link :to="{path:'/article',query:{id:item.articleid}}">
                <p>{{item.title}}</p>
                </router-link>
            </div>
        </div>

    </Row>
</template>

<script>
    export default {
        name: "Random",
        mounted:function(){
            this.getRandom();

        },
        data(){
            return{
                random:[],
                loading:false
            }
        },
        methods:{
          getRandom(){
              this.loading=true
              this.$http.get(`http://localhost:8001/random?limit=4`)
                  .then((res) => {
                      this.random=res.body;
                      this.loading=false
                  })
          }
        },
    }
</script>

<style scoped lang="scss">
    .random {
        background-color: #f4f5f5;
        height: 17vw;
        width: 100%;
        align-items: center;
        position: relative;
        .randomItem{
            width:14vw;
            height:14vw;
            background-color: #fff;
            margin:0 1vw;
            position: relative;
            transition:box-shadow 1s ease;
            &:hover{
                box-shadow: 0 1px 10px 1px rgba(0,0,0,.1);
                margin-top:-5px;
            }
            .img{
                overflow:hidden;
                height:8vw;
                width:100%;
                img{
                    transition: all ease .3s;
                    &:hover{
                        transform: scale(1.1);
                    }
                    height:100%;
                    width:100%;
                }
            }
            .title{
                height:6vw;
                width:98%;
                position:absolute;
                left:50%;
                transform: translateX(-50%);
                margin-top:-1vw;
                z-index: 1;
                background-color: #fff;
                span{
                    font-size:.6rem;
                    color:#999;
                }
                p{
                    font-size: 1rem;
                    color:black;
                    text-align: center;
                    padding:15px
                }
            }
        }
        .luck{
           position: absolute;
            top:0;
            transform: translateY(-50%);
        }
    }

</style>

<template>
    <div class="latest">
        <Card v-for="item in latest">
            <div class="imgTitle"
                 v-src="'http://58.87.107.26/'+item.imgurl">
                <img
                        :src="'http://58.87.107.26/'+item.imgurl.slice(0, -4)+'-thumb'+item.imgurl.slice(-4)"
                        alt="标题图片" class="img-thumb">
            </div>
            <div class="title">
                <router-link  :to="{path:'/article',query:{id:item.articleid}}">
                <p>{{item.title}}</p>
                </router-link>
            </div>
            <div class="summary">
                <i>{{item.gist}}</i>
            </div>
        </Card>
        <LoadMore @load="loadMore" v-if="this.start!==this.total-4"></LoadMore>
    </div>

</template>

<script>
    import LoadMore from '../components/LoadMore'
    export default {
        name: "Latest",
        components:{
            LoadMore,
        },
        mounted:function(){
            this.getLatest();
            this.getTotal();
            // window.addEventListener('scroll', this.getMore)
        },
        updated:function(){

        },
        data(){
            return{
                latest:[],
                num:1,
                total:null,
                size:4,
                start:0,
            }
        },
        watch:{
            start:function(val,oldVal){
                if(val>this.total-4){
                    this.start=this.total-4;
                }
            },
        },
        methods:{
            getLatest(){
                this.$http.get(`http://localhost:8001/latest?${this.size}`)
                    .then((res)=>{
                        this.latest=res.body
                    })
            },
            getTotal(){
                this.$http.get(`http://localhost:8001/latest?total=1`)
                    .then((res)=>{
                        this.total=res.body[0]['num']
                    })
            },
//             getMore(){
// if(this.start!==this.total-4){
//     if(document.body.scrollTop + window.innerHeight+1 >=
//         document.body.offsetHeight ||
//         document.documentElement.scrollTop + window.innerHeight+1 >=
//         document.body.offsetHeight){
//         this.start+=4;
//         this.$http.get(`http://localhost:8001/latest?size=${this.size}&=${this.start}`)
//             .then((res)=>{
//                 this.latest=this.latest.concat(res.body)
//             })
//     }
// }
//             },
            loadMore(){
                this.start+=4;
                this.$http.get(`http://localhost:8001/latest?size=${this.size}&start=${this.start}`)
                    .then((res)=>{
                        this.latest=this.latest.concat(res.body)
                    })
            }
        },
        directives: {
            src: {
                bind: function (el, binding) {
                    var element = new Image();
                    element.className = "img-src"
                    element.style.width = '100%'
                    element.style.height = '200px'
                    element.style.zIndex = '200'
                    element.style.transform = 'scale(1.1)'
                    element.src = binding.value;
                    element.style.filter='blur(20px)'
                    element.style.transition='.3s ease all'
                    element.onload=function(){
                        element.style.transform = 'scale(1)'
                        element.style.filter='blur(0px)'
                        let obj = el.querySelector('.img-thumb')
                        el.removeChild(obj)
                    };
                    el.appendChild(element)
                },
            }
        },
    }
</script>

<style scoped lang="scss">

    .ivu-card {
        user-select: none;
        position: relative;
        border:1px solid rgba(0,0,0,.1);
        .imgTitle {
            height: 200px;
            width: 100%;
            text-align: center;
            overflow: hidden;
            position: relative;
            .img-thumb {
                filter: blur(10px);
                z-index: 1;
                height: 200px;
                width: 100%;
                transition: 1s all ease;
                position: absolute;
                left: 0;
                transform: scale(1.1);
            }
        }

        .title {
            padding:6px;
            height:30px;
            color: black;
            font-size:2rem;
            font-weight: 400;
            cursor: pointer;
        }
        .summary {
            ::before {
                content: '';
                position: absolute;
                display: block;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, .7) 100%);
            }
            text-indent:.5em;
            position: relative;
            word-break: break-word;
            color: rgba(0, 0, 0, .7);
            font-size: .8rem;

        }
    }
</style>
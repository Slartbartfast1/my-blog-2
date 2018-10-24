//
// var featured=require('API/featured')
// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();
//
//
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.use('/api/featured',featured)
//
//
//
// export default app => {
//   // app.use(express.json());
//   //
//   //
//   // app.get('/foo', (req, res) => {
//   //   res.json({msg: 'foo'});
//   // });
//   // //
//   // app.post('/bar', (req, res) => {
//   //   res.json(req.body);
//   // });
// }
const express = require('express');
const app = express();
const $sql=require('./API/sql')

// 跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//精选
app.get('/featured',(req,res)=>{
    $sql.mySelect(`select title,gist,createTime,author,imgurl,category,view from article where top=1 and articleid!=228`, (vals)=>{
        let rows = JSON.stringify(vals);
        res.send(rows)
    })
})

//时间排序
app.get('/latest',(req,res)=>{
    $sql.mySelect(`select title,gist,createTime,author,imgurl,category,view from article where top=2 and articleid!=228 order by createTime desc`, (vals)=>{
        let rows = JSON.stringify(vals);
        res.send(rows)
    })
});


app.listen(8001,() => {
    console.log('连接成功');
})




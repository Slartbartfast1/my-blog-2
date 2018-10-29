const express = require('express');
const app = express();
const $sql = require('./API/sql')

// 跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


//精选
app.get('/featured', (req, res) => {
    $sql.mySelect(`select articleid,title,gist,createTime,author,imgurl,category,view from article where top=1 and articleid!=228 `, (data) => {
        let rows = JSON.stringify(data);
        res.send(rows)
    })
})

//时间排序
app.get('/latest', (req, res) => {
    let params = +req.query.load || 4;
    $sql.mySelect(`select articleid,title,gist,createTime,author,imgurl,category,view from article where top=2 and articleid!=228 order by createTime desc limit 0,${params} `, (data) => {
        let rows = JSON.stringify(data);
        res.send(rows)
    })
});

//获得标签名称
app.get('/tags/name', (req, res) => {
    $sql.mySelect(`select * from categories`, (data) => {
        let rows = JSON.stringify(data);
        res.send(rows)
    })
})

//获得文章列表
app.get('/tags/article', (req, res) => {
    let id = req.query.tag;
    $sql.mySelect(`select * from article where articleid!=228 and category=${id}`, (data) => {
        let rows = JSON.stringify(data);
        res.send(rows)
    })
});

//获得文章内容
app.get('/article', (req, res) => {
    let id = req.query.id;
    $sql.mySelect(`select 
    article.articleid,
    article.title,
    article.author,
    article.createTime,
    article.content,
    article.top,
    article.view,
    article.imgurl, 
    article.gist,
    article.category,
    categories.id,
    categories.categories as categoryName
    from article inner join categories 
    on article.category=categories.id 
    where article.articleid=${id}`
        ,(data) => {
        let rows = JSON.stringify(data);
        res.send(rows)
    })
})


app.listen(8001, () => {
    console.log('连接成功');
});




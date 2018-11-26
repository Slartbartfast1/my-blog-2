const express = require('express');
const app = express();
const $sql = require('./API/sql');
const bodyParser=require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
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

//时间排序8
app.get('/latest', (req, res) => {
    if (req.query.total) {
        $sql.mySelect(`select count(1) as num from article where top=2 and articleid!=228`, (data) => {
            let rows = JSON.stringify(data);
            res.send(rows)
        })
    } else {
        if (!req.query.start) {
            let params = +req.query.offset || 4;
            $sql.mySelect(`select articleid,title,gist,createTime,author,imgurl,category,view from article where top=2 and articleid!=228 order by createTime desc limit 0,${params} `, (data) => {
                let rows = JSON.stringify(data);
                res.send(rows)
            })
        } else {
            let start = req.query.start;
            let size = req.query.size;
            $sql.mySelect(`select articleid,title,gist,createTime,author,imgurl,category,view from article where top=2 and articleid!=228 order by createTime desc limit ${start},${size} `, (data) => {
                let rows = JSON.stringify(data);
                res.send(rows)
            })
        }

    }

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
    $sql.mySelect(`select * from article where articleid!=228 and category=${id} order by createTime desc`, (data) => {
        let rows = JSON.stringify(data);
        res.send(rows)
    })
});

app.get('/random', (req, res) => {
    let limit = req.query.limit;
    $sql.mySelect(`select 
    articleid,
    author,
    title, 
    imgurl,
    createTime
    from article where articleid!=228 
    order by rand() limit ${limit}`
        , (data) => {
            let rows = JSON.stringify(data);
            res.send(rows)
        })
})

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
        , (data) => {
            let rows = JSON.stringify(data);
            res.send(rows)
        })
});

app.get('/comments', (req, res) => {
    let articleid = req.query.articleid || 228;
    $sql.mySelect(`select * from comments where articleid=${articleid}`
        , data => {
            let rows = JSON.stringify(data);
            res.send(rows)
        })
});

app.post('/comments', (req, res) => {
    console.log(req.body);
    $sql.myInsert('comments',req.body
        ,data=>console.log('添加成功'));
});


app.listen(8001, () => {
    console.log('连接成功');
});




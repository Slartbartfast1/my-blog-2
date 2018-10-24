var express=require('express');
var router=express.Router();
var $sql=require('./sql.js');



router.get("/featured",function(req,res,next){
    $sql.mySelect("select title,gist,createTime,author,imgurl,category,view from article where top=1",function(err,res){
        if(err){
            res.render("featured",{})
        }else{
            res.render("featured",{res})
        }
    });
});
module.exports = router;
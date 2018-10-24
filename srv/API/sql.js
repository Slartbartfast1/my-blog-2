var express=require('express');
var mysql=require('mysql');
var connection=require('./config.js')

const pool = mysql.createPool(
    connection.info
)

var $sql = {
    mySelect: function (select, callback) {
        pool.query(select, function (err, res) {
            if (err) {
                console.log("连接失败：", err)
            } else {
                callback(res)
            }
        })
    },
    myInsert: function (insert, callback = console.log) {
        pool.query(insert, function (err, res) {
            if (err) {
                console.log("添加失败：", err)
            } else {
                callback(res)
            }
        })
    },
    myUpdata: function (updata, callback = console.log) {
        pool.query(updata, function (err, res) {
            if (err) {
                console.log("更新失败：", err)
            } else {
                callback(res)
            }
        })
    },
    myDelete: function (del, callback = console.log) {
        pool.query(del, function (err, res) {
                if (err) {
                    console.log("删除失败：", err)
                } else {
                    callback(res)
                }
            }
        )
    }

};


module.exports = $sql;



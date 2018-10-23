var express = require('express');
var mysql = require('mysql');
var connection = require('./mysql');
var sql = mysql.createConnection(connection.info);
sql.connect();
var $sql = {
    mySelect: function (select, callback) {
        sql.query(select, function (err, res) {
            if (err) {
                console.log("连接失败：", err)
            } else {
                callback(res)
            }
        })
    },
    myInsert: function (insert, callback = console.log) {
        sql.query(insert, function (err, res) {
            if (err) {
                console.log("添加失败：", err)
            } else {
                callback(res)
            }
        })
    },
    myUpdata: function (updata, callback = console.log) {
        sql.query(updata, function (err, res) {
            if (err) {
                console.log("更新失败：", err)
            } else {
                callback(res)
            }
        })
    },
    myDelete: function (del, callback = console.log) {
        sql.query(del, function (err, res) {
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



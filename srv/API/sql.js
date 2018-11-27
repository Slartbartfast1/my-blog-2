const express=require('express');
const mysql=require('mysql');
const connection=require('./configs/mysqlConfig.js');

const pool = mysql.createPool(
    connection.info
);

let $sql = {
    mySelect: function (select, callback) {
        pool.query(select, function (err, res) {
            if (err) {
                console.log("连接失败：", err)
            } else {
                callback(res)
            }
        })
    },
    myInsert: function (table,values, callback) {
        pool.query(`insert into ${table} set ?`,values, function (err, res) {
            if (err) {
                callback('添加失败')
            } else {
                callback('添加成功')
            }
        })
    },
    myUpdata: function (query,values, callback=console.log) {
        pool.query(query,obj, function (err, res) {
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



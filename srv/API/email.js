'use strict';
const nodemailer = require('nodemailer');
const emailConfig=require('./configs/emailConfig')
/* var emailTo='1019118008@qq.com';
 var emailSubject='Hello'
 var emailContent='<b>有人回复你了</b>';*/


let transporter = nodemailer.createTransport(emailConfig);




// send mail with defined transport object
function sendMail(emailTo,emailSubject,emailContent){
    let mailOptions = {
        from: '"泛银河系含漱爆破液" <1019118008@qq.com>', // sender address
        to: emailTo, // list of receivers
        subject: emailSubject, // Subject line
        // 发送text或者html格式
        // text: 'Hello world?', // plain text body
        html: `<b>emailContent</b>` // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}

module.exports=sendMail;

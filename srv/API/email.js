'use strict';



var emailTo='1019118008@qq.com';
var emailSubject='HEllo'
var emailContent='<b>有人回复你了</b>';

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
        user: '1019118008@qq.com',
        pass: 'irrjbpgbenfnbfcd',
    }
});

let mailOptions = {
    from: '"hello" <1019118008@qq.com>', // sender address
    to: emailTo, // list of receivers
    subject: emailSubject, // Subject line
    // 发送text或者html格式
    // text: 'Hello world?', // plain text body
    html: emailContent // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});
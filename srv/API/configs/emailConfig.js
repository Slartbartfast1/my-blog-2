const emailConfig={
    // host: 'smtp.ethereal.email',
    service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
        port: 465, // SMTP 端口
    secureConnection: true, // 使用了 SSL
    auth: {
    user: '1019118008@qq.com',
        pass: 'kgytqxtfdsagbcdi',
}
}
module.exports=emailConfig;
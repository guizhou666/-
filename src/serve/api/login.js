var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

var User = require('../modules/db/user');


app.post('/api/login', (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (!user) {
            res.send({
                code: 201,
                message: '用户不存在',
            })
        } else {
            if (req.body.password == user.password) {
                res.send({
                    code: 200,
                    message: '登录成功'
                })
            } else {
                res.send({
                    code: 201,
                    message: '密码错误'
                })
            }
        }
    });
});

// 退出登录
app.get('/logout', (req, res) => {
    req.session.user = null;
    res.redirect('/');
});
module.exports = app;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());




// 登录
let login = require('./api/login');
app.use(login);
app.listen(3000, () => {
    console.log('node running');
});
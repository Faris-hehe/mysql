///**
// * Created by Administrator on 2016/10/19 0019.
// */
//var mysql = require('node-mysql');
//var conn = mysql.createConnection({
//    host: '101.200.129.112',
//    user: 'hyx',
//    password: 'hyx1990529',
//    database: 'node_hyx',
//    port: 22
//});
//conn.connect();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
//mongoose.connect('mongodb://101.200.129.112/runoob');
mongoose.Promise = require('bluebird');

var Movie = mongoose.model('Movie', {
    doctor: String,
    title: String,
    language: String,
    country: String,
    year: Number,
    summary: String,
    poster: String,
    flash: String
});

var movie1 = new Movie({
    doctor: 'hyx',
    title: '仙剑',
    language: '中文',
    country: '中国',
    year: 2020,
    summary: '好片',
    flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
});
movie1.save(function (err) {
    if (err) {
        console.log(err);
    }else{
        console.log('meow');
    }
});
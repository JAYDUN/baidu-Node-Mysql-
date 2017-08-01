var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host:'localhost',
    port:8889,
    user:'root',
    password:'root',
    database:'baiduNews'
});
/* GET users listing. */
router.get('/getNews', function(req, res, next) {
    connection.query('SELECT * FROM `news`',function (err,rows) {
        res.json(rows);
    });
});

router.post('/update', function(req, res) {

    var newsId=req.body.id;
    var newsTitle=req.body.newsTitle;
    var newsType=req.body.newsType;
    var newsImg=req.body.newsImg;
    var newsTime=req.body.newsTime;

    connection.query('UPDATE `news` SET' +
        ' `newsTitle`=?,`newsType` =?,`newsImg`=?,`newsTime`=? WHERE`id`=?',[newsTitle,newsType,newsImg,newsTime,newsId],function (err,result) {
        // res.json(result);
        res.send(result);
    });
});

router.get('/getUpInfo', function(req, res) {
  var newsid = req.query.newsid;
    connection.query('SELECT * FROM `news` WHERE `id`=?',[newsid],function (err,rows) {
        res.json(rows);
    });
});

router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM `news` WHERE `id`=?',[newsid],function (err,result) {
        // res.json(rows);
        res.send(result);
    });
});

router.post('/insert', function(req, res) {

    var newsTitle=req.body.newsTitle;
    var newsType=req.body.newsType;
    var newsImg=req.body.newsImg;
    var newsTime=req.body.newsTime;

    connection.query('INSERT INTO `news`(`newsTitle`,`newsType`,`newsImg`,`newsTime`) ' +
        'VALUES (?,?,?,?)',[newsTitle,newsType,newsImg,newsTime],function (err,result) {
        // res.json(rows);
        res.send(result);

    });
});

module.exports = router;

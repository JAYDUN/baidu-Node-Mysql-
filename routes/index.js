var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(req, res, next) {
  var newsType = req.query.newsType;

  var connection = mysql.createConnection({
    host:'localhost',
      port:8889,
      user:'root',
      password:'root',
      database:'baiduNews'
      }
  );

  connection.connect();

  connection.query('SELECT * FROM `news` WHERE `newsType` = ?',[newsType],function (err,rows,fields) {
      res.json(rows);

  });
});

module.exports = router;

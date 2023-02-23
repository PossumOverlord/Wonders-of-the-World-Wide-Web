const express = require('express');
const app = express();
const db = require('./connection');
app.set('view engine', 'ejs');

const path = require('path');
const upload = require('./upload');
app.use(express.static(path.resolve('./public')));


var obj = {};

app.get('/', function(req,res){
    let sql = 'SELECT * FROM storage ORDER BY date DESC';
    db.query(sql, function(err, results){
        if(err) {
            throw err;
        } else {
            obj = {data: results};
            res.render('index', obj)
        }
    });
 });
 

app.get('/posting', function(req,res){
    let sql = 'SELECT * FROM storage ORDER BY date DESC';
    db.query(sql, function(err, results){
        if(err) {
            throw err;
        } else {
            obj = {data: results};
            res.render('posting', obj)
        }
    });
 });

app.listen(process.env.PORT || 3000, function(){
   console.log('server, port 3000');
});

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//app.post('/posting', function(req,res){
app.post('/posting', upload.single('img'), function(req,res){    
   const title = req.body.title;
   const text = req.body.text;
   const img = "/uploads/" + req.file.filename;
   const sqlInstert = "INSERT INTO storage (title, text, img) VALUES (?, ?, ?);"
   db.query(sqlInstert, [title, text, img], (err, result)=> {
       if(err) {
           throw err;
       } else {
           res.redirect('..');
       }
   });
});

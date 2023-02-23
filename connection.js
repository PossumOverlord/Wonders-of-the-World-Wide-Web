const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'gnomeJS',
  password: 'Lego0224!',
  database: 'wideserver'
});

db.connect(function(err){
  if(err) {
      console.log(err);
  } else {
      console.log('connected to mySQL');
  }
});


module.exports = db;

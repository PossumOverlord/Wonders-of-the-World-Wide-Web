const express = require('express');
const sessions = require('express-session');
const app = express();
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(sessions({
  secret: "mylittlesecret",
  saveUninitialized:true,
  cookie: { maxAge: 1000 * 60 *60},
  resave: false
}));

const path = require('path');
app.use(express.static(path.resolve('./public')));

app.get('/', function(req,res){
  let obj;
  if (req.session.username) {
    console.log(req.session.username)
    obj = {
      session: req.session.username
    }
  }
  res.render('home', obj)
});
app.post('/', function(req,res){
  res.render('home')
});
app.get('/register', function(req,res){
  res.render('register')
});
app.get('/login', function(req,res){
  res.render('login')
});
app.post('/register', async function(req,res){
  const db = client.db('chungus1');
  const collection = db.collection('wideWeb');
  console.log(req.body.username, req.body.password)
  user = await collection.insertOne({
    username: req.body.username,
    password: req.body.password
  })
  res.redirect('/')
});

app.post('/login', async function(req,res){
  const db = client.db('chungus1');
  const collection = db.collection('wideWeb');
  console.log(req.body.username, req.body.password)
  user = await collection.findOne({
    username: req.body.username,
    password: req.body.password
  })
  console.log(user)
  if (user != null) {
    req.session = req.session;
    req.session.username = req.body.username;
    req.session.userid = user._id;
    res.redirect('/')
  } else {
    res.redirect('/login')
  }
});

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});

const Test = require('./mongo/write');

const { MongoClient } = require('mongodb');
const { session } = require('passport');

const uri = "mongodb+srv://Teoman:Lego0224@chungus0.wvy95s0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('chungus1');
    const collection = db.collection('wideWeb');
    console.log("Connected!");

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    //await client.close(;);
  }
}
run().catch(console.error);

async function save(obj){
  console.log(obj);
  /*
  addTest.save().then(function(){
    console.log('saved');
  })
  */
}

app.get('/a', async function(res,req){
  try {
    const db = client.db("chungus1");
    const collection = db.collection("wideWeb")
    console.log("connected to mongodb");
    second = await collection. insertOne({ cool: "cool!",
    superCool: "not",
    notCool: "still cool"
  });

  //gör om till global variabel 
  console.log(second)
  
  //res.render('index');
  } catch(err){
    console.log(err);
  }

});

app.listen(process.env.PORT || 3000, function(){
    console.log('server, port 3000');
 });
 
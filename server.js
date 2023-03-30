const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static(path.resolve('./public')));

app.get('/', function(req,res){
    res.render('index')
 });


const Test = require('./mongo/write');

const { MongoClient } = require('mongodb');

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
    console.log('root');
  const addTest = new Test({
    cool: "cool!",
    superCool: "not",
    notCool: "still cool"
  });
  console.log('addTe');
  save(addTest);
  
  //res.render('index');
  } catch(err){
    console.log(err);
  }

});

app.listen(process.env.PORT || 3000, function(){
    console.log('server, port 3000');
 });
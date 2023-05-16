var test;
async function db(){
  try {
    test = "hej";
  } finally {
    console.log(test);
    module.exports = test;
  }
}
db();
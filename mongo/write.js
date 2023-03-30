const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    cool: String,
    superCool: String,
    notCool: String
});


const Test = mongoose.model("tests", TestSchema);

module.exports = Test;
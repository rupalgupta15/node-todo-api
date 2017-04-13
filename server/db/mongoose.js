var mongoose = require('mongoose');

//Specifying which Promise library we are gonna use
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

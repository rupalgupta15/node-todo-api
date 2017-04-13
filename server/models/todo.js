var mongoose = require('mongoose');

//this is how we create model in mongoose
var Todo = mongoose.model('Todo',{
  text : {
    type : String,
    required : true,
    minlength : 1,
    trim : true
  },
  completed : {
    type : Boolean,
    default : false
  },
  completedAt : {
    type : Number,
    default : null
  }
});

module.exports = {Todo};

// //need to call the model created as a constructor function
// var newTodo = new Todo({
//   text : 'Grocery Shopping'
// });
//
// //Need to call save in order to save the instance to the database
// newTodo.save().then((doc)=> {
//   console.log('Saved todo',doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// var nextTodo = new Todo({
//   text : 'Get batteries',
//   completed : true  ,
//   completedAt : 10
// });
//
// nextTodo.save().then((doc)=> {
//   console.log(JSON.stringify(doc,undefined,2));
// }, (e) => {
//   console.log('Unable to save todo',e);
// });

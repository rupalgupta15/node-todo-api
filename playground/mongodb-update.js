//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id : new ObjectID('58e3fbe43377ce24043f5421')
// },{
//   $set : {
//     completed : true
//   }
// }, {
//   returnOriginal : false
// }).then((result) => {
//   console.log(result);
// });

//Challenge
db.collection('Users').findOneAndUpdate({
  _id : new ObjectID('58e54dea9f105935aa2204ed')
},{
  $set : {
    name : 'Sanket Gupta'
  } ,
  $inc : {
    age : -1
  }
}, {
  returnOriginal : false
}).then((result) => {
  console.log(JSON.stringify(result,undefined,2));
});

  //db.close();
});

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// //deleteMany
// db.collection('Todos').deleteMany({text : 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

// //deleteOne
// db.collection('Todos').deleteOne({text : 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

// //findOneAndDelete
// db.collection('Todos').findOneAndDelete({text : 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

//Challenge : Delete multiple docs from users which are duplicates and also findOneAndDelete one doc using id
// //deleteMany
// db.collection('Users').deleteMany({name : 'Rupal'}).then((result) => {
//   console.log(result);
// });


//findOneAndDelete
db.collection('Users').findOneAndDelete({
  _id : new ObjectID('58e54dd99f105935aa2204dd')}).then((result) => {
  console.log(JSON.stringify(result,undefined,2));
});

  //db.close();
});

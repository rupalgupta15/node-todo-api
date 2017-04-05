//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//Script to fetch documents, converting them to array and printing to screen

// db.collection('Todos').find({
//   _id : new ObjectID('58e410879f105935aa21fb30')}
// // {completed : false}
// ).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs,undefined,2));
// }, (err) => {
//   console.log('Unable to fetch todos',err);
// });

//For counting the number of documents
// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count : ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos',err);
// });

db.collection('Users').find({name : 'Rupal'}).toArray().then((docs) => {
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
}, (err) => {
  console.log('Unable to fetch todos',err);
});

  //db.close();
});

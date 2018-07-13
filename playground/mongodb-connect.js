// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');
// var obj = new ObjectId();
// console.log(obj); generate random ObjectId each time by object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect mongodb server'); // here is the return
    //statement to stop the execution of rest of the program
  }
  console.log('connected to mongodb server');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2)); //ops Contains the documents inserted with added _id fields
  // });

  db.collection('Users').insertOne({
    name: 'souvik dey',
    age: 21,
    location: 'Agarpara, Kolkata'
  }, (err, result) => {
    if(err){
      return console.log('unable to insert users data');
    }
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// database name TododApp
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect mongodb server');
  }
  console.log('connected to mongodb server');
  const db = client.db('TodoApp')

// http://mongodb.github.io/node-mongodb-native/2.0/api

  // db.collection('Users').find({
  //     _id: new ObjectId('5b48d9f2ca3e74c40c469baa')
  //   }).toArray().then((docs) => {
  //   console.log("Users");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("unable to fetch collections from db", err);
  // })

    db.collection('Users').find({name: "souvik pal"}).count().then((count) => {
      console.log("Users");
      console.log(`Total count: ${count}`);
    }, (err) => {
      console.log("unable to fetch collections from db", err);
    })

  client.close();
});

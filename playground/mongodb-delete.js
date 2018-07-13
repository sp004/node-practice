// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectId
} = require('mongodb');

// database name TododApp
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    // deleteOne
    db.collection('Users').deleteOne({_id: new ObjectId("5b48d9f2ca3e74c40c469baa")})
    .then((result) => {
        console.log(result);
    })

    // deleteMany
    // db.collection('Users').deleteMany({
    //     name: "souvik pal"
    // })
    // .then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
       db.collection('Users').findOneAndDelete({
               _id: '123'
           })
           .then((result) => {
               console.log(result);
           })

    client.close();
});

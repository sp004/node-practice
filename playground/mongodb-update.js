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

    // https: //docs.mongodb.com/manual/reference/operator/update/
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectId("5b490311ca3e74c40c469e7a")
    }, 
    {
        $set: {
            name: "souvik pal",
            age: "22"
        }
    },
    {
        returnOriginal: {
            name: "rintu pal",
            age: "20"
        }
    }).then((result) => {
        console.log(result);
    })

    client.close();
});

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/Statistics';

const connectionPromise = MongoClient.connect(url);

exports.getCollection = collectionName =>
    connectionPromise
        .then(db =>
            db.collection(collectionName)
                .find()
                .toArray());
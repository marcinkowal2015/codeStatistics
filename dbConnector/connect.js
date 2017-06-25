const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/Statistics';

const connectionPromise = MongoClient.connect(url);

exports.getCollection = collectionName => {
    return connectionPromise.then(db => {
        const collectionPromise = db.collection(collectionName).find().toArray();
        collectionPromise.then(() => db.close(), () => db.close());
        return collectionPromise;
    })
};
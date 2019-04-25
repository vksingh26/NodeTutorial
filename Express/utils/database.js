const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

let _db;
const mongoConnect = (cb) =>{
    MongoClient.connect(url)
    .then(client => {
        console.log('Connected Successfully!');
        _db = client.db('Shop');
        cb();
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
}

const getDB = () => {
    if(_db){
        return _db;
    }
    throw 'No Database Found !'
}
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

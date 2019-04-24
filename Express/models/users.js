const mongodb = require('mongodb');
const getDb = require('../utils/database').getDB;

const ObjectId = mongodb.ObjectId;

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    save(){
       const db = getDb;
       return db.collection('users').insertOne(this);
    }

    static findUserById(userId){
        const db = getDb;
        return db.collection('users').find({
            _id: new ObjectId(userId).next()
        });
    }
}
const mongodb = require('mongodb');
const getDb = require('../utils/database').getDB;

const ObjectId = mongodb.ObjectId;

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    save() {
        const db = getDb;
        return db.collection('users').insertOne(this);
    }

    static findById(userId) {
        const db = getDb();
        return db
            .collection('users')
            .findOne({
                _id: new ObjectId(userId)
            })
            .then(user => {
                console.log(user);
                return user;
            })
            .catch(err => {
                throw err;
            });
    }
}

module.exports = User;
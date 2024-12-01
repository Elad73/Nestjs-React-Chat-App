import { Db } from 'mongodb';

module.exports = {
    async up(db: Db) {
        // creating a unique index on the email field of the users collection and setting it to be unique
        await db.collection('users').createIndex({ email: 1 }, { unique: true });
    }

}
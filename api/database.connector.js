const mongoose = require('mongoose');

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const DB_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const init = () => {
    const db = mongoose.connection;

    db.on('connecting', () => {
        console.log('===> connecting to MyDB...');
    });

    db.on('connected', () => {
        console.log('===> MyDB connected');
    });

    db.on('reconnected', () => {
        console.log('===> MyDB reconnected');
    });

    db.on('disconnected', () => {
        setTimeout(() => {
            mongoose.connect(DB_URI, { server: { auto_reconnect: true } }).catch(error => handleConnectionError(error));
        }, 4000);

    });

    mongoose.connect(DB_URI, { server: { auto_reconnect: true } }).catch(error => handleConnectionError(error));
};

const handleConnectionError = (error) => {
    console.error('===> Error in MyDB connection');
    console.log('===> Try to reconnect to MyDB...');
};

module.exports = {
    init
};

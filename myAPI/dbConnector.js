const mongoose = require('mongoose');

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const dbURI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const initDBConnection = () => {
    const db = mongoose.connection;

    db.on('connecting', () => {
        console.log('connecting to MongoDB...');
    });

    db.on('error', (error) => {
        console.error('Error in MongoDb connection: ' + error);
        mongoose.disconnect();
    });

    db.on('connected', () => {
        console.log('MongoDB connected');
    });

    db.once('open', () => {
        console.log('MongoDB connection opened');
    });

    db.on('reconnected', () => {
        console.log('MongoDB reconnected');
    });

    db.on('disconnected', () => {
        console.log('MongoDB disconnected');
        setTimeout(() => {
            mongoose.connect(dbURI, { server: { auto_reconnect: true } });
        }, 5000);

    });

    mongoose.connect(dbURI, { server: { auto_reconnect: true } });
};

module.exports = {
    initDBConnection
};

// const {
//     MONGO_USERNAME,
//     MONGO_PASSWORD,
//     MONGO_HOSTNAME,
//     MONGO_PORT,
//     MONGO_DB
// } = process.env;

const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000
};

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const url = `mongodb://admin:admin@127.0.0.1:27017/mydb?authSource=admin`;

mongoose
    .connect(url, options)
    .then(function () {
        console.log("MongoDB is connected");
    })
    .catch(function (err) {
        console.log(err);
    });

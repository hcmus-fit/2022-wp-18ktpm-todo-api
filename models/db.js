const { MongoClient } = require("mongodb");
// Connection URI
const uri = process.env.MONGODB_URI;
// Create a new MongoClient
const client = new MongoClient(uri);

exports.connect = () => {
    return client.connect();
};

exports.db = () => {
    return client.db();
};

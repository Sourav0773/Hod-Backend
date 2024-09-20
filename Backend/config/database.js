import { MongoClient } from 'mongodb';

const uri = "mongodb:// 127.0.0.1:27017";
let db;

export const connectToDb = async () => {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db("cryptoData");
    console.log("Connected to MongoDB");
};

export const getDb = () => {
    if (!db) {
        throw new Error("Database not initialized");
    }
    return db;
};

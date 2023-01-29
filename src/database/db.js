import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();
console.log("envvariable",process.env.DATABASE_URL)
const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
    await mongoClient.connect();
    console.log('MongoDB connected');
} catch (error) {
    console.log(error);
}

const db = mongoClient.db('misticosburger');
export default db;
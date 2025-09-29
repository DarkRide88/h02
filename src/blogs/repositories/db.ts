import {MongoClient, ObjectId} from 'mongodb';


const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

export const client = new MongoClient(mongoUri);

export async function  runDb() {
    try {
        await client.connect();
        await client.db("blogs").command({ping:1});
        console.log('SUCCESS')
    } catch {
        console.log('ERROR')
        await client.close();
    }
}
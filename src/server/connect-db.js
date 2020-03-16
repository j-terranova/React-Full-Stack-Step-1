import { MongoClient } from 'mongodb';
const url = process.env.MONGODB_URI || `mongodb://localhost:27017/organizer`;
//const url = `mongodb://localhost:27017/organizer`;
let db = null;

console.log("Outside of Connection");
export async function connectDB(){
    console.log("About to make Connection");
    if (db) return db;
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    db = client.db();
    console.log("Connection Made");
    console.info("Got DB,", db)
    return db;
}

connectDB();
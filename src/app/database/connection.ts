const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
const URI = process.env.MONGODB_URI as string;
const DB_NAME = process.env.MONGODB_NAME as string;

let singleton:any;

async function connect() {
  if (singleton) return singleton;

  const client = new MongoClient(URI, {
    serverSelectionTimeoutMS: 55000,
  });

  try {
    await client.connect();
    singleton = client.db(DB_NAME);
    return singleton;
  } catch (e) {
    console.error(e);
  }
}

export default connect;

const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
const URI = process.env.MONGODB_URI as string;

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export default client;

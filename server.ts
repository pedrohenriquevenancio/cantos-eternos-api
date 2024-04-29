import client from './src/app/database/mongoDBConfig';
import app from './src/index';
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

import app from './src/index';
import connect from './src/app/database/connection';
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;

const client = connect();

client.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port https://cantos-eternos-api.vercel.app/`);
  });
})
.catch(console.dir);

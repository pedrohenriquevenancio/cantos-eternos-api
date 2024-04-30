import app from './src/index';
import connect from './src/app/database/connection';
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;

const client = connect();

client.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
})
.catch(console.dir);

const app = require('./src/configs/app');
const dotenv = require('dotenv');
dotenv.config();

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
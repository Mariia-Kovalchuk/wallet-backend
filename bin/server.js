const mongoose = require('mongoose');
require('dotenv').config();

const app = require('../app')

const { DB_HOST, PORT = 3001 } = process.env

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT)
    console.log(`Database connection successful. Use our API on port: ${PORT}`)
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1);
  })




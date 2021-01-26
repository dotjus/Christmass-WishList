import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

// Can not use this because this file is being loaded as ES module
// configures the variables in dontenv file
// require('dotenv').config()
// const CONNECTION_URL = process.env.ATLAS_URI

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// not currently using .env
const CONNECTION_URL = 'mongodb+srv://dotjus:cupcakes@cluster0.kz7gg.mongodb.net/<dbname>?retryWrites=true&w=majority'
// process.env.PORT is what Heroku deployment will use, 5000 is what local deployment will use 
const PORT = process.env.PORT || 5000

// Now we use mongoose to connect to the db
// useNewUrlParser: true, useUnifiedTopology: true prevents annoying warning messages
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // if coonection is succesful...
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    // if connection fails...
  .catch((error) => console.log(`${error} did not connect`));

  // Passes param on set to prevent console warnings
mongoose.set('useFindAndModify', false);
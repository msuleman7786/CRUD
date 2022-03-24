const express = require("express");
require('dotenv').config()                                          // This is use to import the env file(.env)

const app = express();

app.use(express.json());

app.use("/", require("./router"))

const port = process.env.PORT
app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})
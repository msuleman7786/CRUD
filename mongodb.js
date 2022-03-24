const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "slashRTC";

const client = new MongoClient(url);

async function mongoDatabase() {
    let result = await client.connect();
    let dbo = await result.db(database);
    return dbo.collection("employee");
}

module.exports = mongoDatabase;
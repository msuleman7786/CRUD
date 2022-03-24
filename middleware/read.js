const mongoDatabase = require("../mongodb");

const readData = async(req, res)=> {
    let data = await mongoDatabase();
    let result = await data.find().toArray();
    return res.send(result);
}

module.exports = {readData};
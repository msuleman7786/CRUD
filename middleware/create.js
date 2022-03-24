const mongoDatabase = require("../mongodb");

const createData = async(req, res)=> {
    let data = await mongoDatabase();
    let result = await data.insertOne(req.body)

    res.json(
        {message: result}
    )
};

module.exports = {createData};
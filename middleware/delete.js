const mongoDatabase = require("../mongodb");
const mongodb = require("mongodb")

const deleteData = async(req, res)=> {
    let data = await mongoDatabase();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send("Deleted Successfully")
};

module.exports = {deleteData};
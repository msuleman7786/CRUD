const mongoDatabase = require("../mongodb");


const updateData = async(req, res)=> {
    let data = await mongoDatabase();
    let result = await data.updateOne(
        {name: req.body.name},
        {$set: req.body}
    )

    res.send("Result Updated Successfully")
}

module.exports = {updateData};
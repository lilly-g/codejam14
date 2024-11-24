const Outing = require("../models/outingModel");

exports.handler = async (req, res) => {
    
    // get join code
    const { joinCode } = req.body;

    const doc = await Outing.findOne({ 'joinCode' : joinCode }).exec();
    const loc = doc.get('locations')[0];

    res.status(200).json(loc);
}
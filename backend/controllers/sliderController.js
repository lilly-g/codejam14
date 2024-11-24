const Outing = require("../models/outingModel");

export default async function handler(req, res) {
    // get join code
    const { joinCode } = req.body;

    const doc = await Outing.findOne({ joinCode: joinCode.value }, 'locations');

    console.log(doc);
    res.send(200).json(doc);
}
const Outing = require("../models/outingModel");

// create new outing event
exports.createNewOuting = async (req, res) => {
    // get form data
    const { outingName, name , pass } = req.body;

    // make new entry
    Outing.create({
        name: outingName,
        admin: {
            adminName: name,
            adminPass: pass
        }
    })

    res.status(200).json({ "message": "success" });
}

// add new (non admin) user to event
exports.userJoin = async (req, res) => {
    const formData = req.body;
    res.status(200).json({ "message": "success" });
}

// login (admin & non admin) to event
exports.login = async (req, res) => {
    const formData = req.body;
    res.status(200).json({ "message": "success" });
}
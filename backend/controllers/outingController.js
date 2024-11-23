const Outing = require("../models/outingModel");

// create new outing event
exports.createNewOuting = async (req, res) => {
    // get form data
    const { newGroupName, newAdminName, newAdminPass } = req.body;

    // make new entry
    Outing.create({
        name: newGroupName,
        admin: {
            adminName: newAdminName,
            adminPass: newAdminPass
        },
        status: "accepting",
        joinCode: "joincode"
    })

    res.status(200).json({ "message": "success" });
}

// add new (non admin) user to event
exports.userJoin = async (req, res) => {
    const { joinCode, newUserName, newUserPass } = req.body;
    res.status(200).json({ "message": "success" });
}

// login (admin & non admin) to event
exports.login = async (req, res) => {
    const { groupCode, name , pass } = req.body;
    res.status(200).json({ "message": "success" });
}
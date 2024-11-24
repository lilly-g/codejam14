const mongoose = require("mongoose");

// define attributes of database entry
const outingSchema = new mongoose.Schema({
    name: {type: String, required: true},
    admin: {
        adminName: {type: String, required: true},
        adminPass: {type: String, required: true}
    },
    joinCode: {type: String, required: true},
    status: {type: String, required: true},
    users: [{
        userName: String,
        userPass: String,
        
    }],
    locations: [{
        name: String,
        address: String,
        website: String,
        hours: String,
        yesCount: Number,
        noCount: Number,
    }],
})

// make instance of model named Outing
const Outing = mongoose.model('Outing', outingSchema, 'outings')

module.exports = Outing;
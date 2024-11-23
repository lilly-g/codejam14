const mongoose = require("mongoose");

// define attributes of database entry
const outingSchema = new mongoose.Schema({
    name: String,
    admin: {
        adminName: String,
        adminPass: String
    },
    joinCode: String,
    users: [{
        userName: String,
        userPass: String
    }],
    locations: [{
        name: String,
        address: String,
        description: String,
        price: Number,
        website: String,
        yesCount: Number,
        noCount: Number
    }],
    hours: {
        monday: {opening: Date, closing: Date},
        tuesday: {opening: Date, closing: Date},
        wednesday: {opening: Date, closing: Date},
        thursday: {opening: Date, closing: Date},
        friday: {opening: Date, closing: Date},
        saturday: {opening: Date, closing: Date},
        sunday: {opening: Date, closing: Date}
    }
})

// make instance of model named Outing
const Outing = mongoose.model('Outing', outingSchema, 'outings')

module.exports = Outing;
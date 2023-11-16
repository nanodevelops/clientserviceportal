const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contactNumber: { type: String, required: true},
    address: { type: String },
    gender: { type: String },
    age: { type: String },
    vulnerability: { type: String },
    purposeOfVisit: { type: String },
    timeIn: { type: String },
    timeOut: { type: String }
})

const Client = mongoose.model("Client", clientSchema)

module.exports = Client
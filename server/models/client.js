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

clientSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("Client", clientSchema)
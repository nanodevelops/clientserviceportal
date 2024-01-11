const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String },
    contact: { type: String, required: true},
    email: { type: String, required: true },
    address: { type: String },
    visitPurpose: { type: String, required: true },
    timeIn: { type: String },
    timeOut: { type: String },
    vulnerability: { type: String },
    date: { type: Date, default: Date.now }
})

clientSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("Client", clientSchema)
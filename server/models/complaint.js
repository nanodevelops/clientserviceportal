const mongoose = require("mongoose")

const complaintSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    },
    contactNumber: { type: String, required: true},
    age: { type: String },
    gender: { type: String },
    disability: { type: String },
    briefOfComplaint: { type: String },
    writtenBy: { type: String },
    clientEndorsed: { type: Boolean },
    csuOfficerEndorsed: { type: Boolean }
})

complaintSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("Complaint", complaintSchema)
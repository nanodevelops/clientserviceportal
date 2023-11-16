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

const Complaint = mongoose.model("Complaint", complaintSchema)

module.exports = Complaint
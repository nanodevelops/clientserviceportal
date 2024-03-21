const mongoose = require("mongoose")

const complaintSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    },
    vulnerability: { type: String },
    mode: { type: String },
    brief: { type: String },
    author: { type: String },
    clientEndorsed: { type: Boolean },
    csuOfficerEndorsed: { type: Boolean },
    dueDate: Date,
    status: { type: String }
})

complaintSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

complaintSchema.virtual("clientName").get(function(){
    return `${this.client.firstName} ${this.client.lastName}`
})

module.exports = mongoose.model("Complaint", complaintSchema)
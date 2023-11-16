const mongoose = require("mongoose")

const enquirySchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    },
    disability: { type: String },
    mode: { type: String },
    brief: { type: String },
    author: { type: String },
    clientEndorsed: { type: Boolean },
    csuOfficerEndorsed: { type: Boolean },
    pending: { type: Boolean },
    resolved: { type: Boolean },
    archived:{ type: Boolean }
})

enquirySchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("Enquiry", enquirySchema)
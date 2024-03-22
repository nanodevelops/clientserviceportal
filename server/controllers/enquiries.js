const enquiriesRouter = require("express").Router()
const Enquiry = require("../models/enquiry")

enquiriesRouter.get("/", async(request, response) => {
    const enquiries = await Enquiry.find({}).populate("client")
    response.json(enquiries.map((enquiry) => {
        return {
            client: enquiry.clientName,
            id: enquiry.id,
            vulnerability: enquiry.vulnerability
        }
    }))
})

enquiriesRouter.post("/", async(request, response) => {
    const body = request.body;

    const enquiry = new Enquiry({
        client: body.client,
        clientId: body.clientId,
        vulnerability: body.vulnerability,       
    })

    const savedEnquiry = await enquiry.save();

    response.status(201).json(savedEnquiry);
})

module.exports = enquiriesRouter;
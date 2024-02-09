const complaintsRouter = require("express").Router()
const Complaint = require("../models/complaint")

complaintsRouter.get("/", async(request, response) => {
    const complaints = await Complaint.find({})
    response.json(complaints.map((complaint) => complaint.toJSON()))
})

complaintsRouter.post("/", async (request, response) => {
    const body = request.body;
  
    // Validate the request body as needed
  
    const complaint = new Complaint({
      // Include properties specific to Complaint model
      client: body.client,
      clientId: body.clientId,
      vulnerability: body.vulnerability,
      // Add more properties if needed
    });
  
    const savedComplaint = await complaint.save();
  
    response.status(201).json(savedComplaint);
});

module.exports = complaintsRouter
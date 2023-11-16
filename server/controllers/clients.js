const clientRouter = require("express").Router()
const Client = require("../models/client")

clientRouter.get("/", async(request, response) => {
    const clients = await Client
        .find({})
    response.json(clients.map((client) => client.toJSON()))
})

clientRouter.get("/:id", async(request, response) => {
    const client = await Client
        .findById(request.params.id)
    if(client) {
        response.json(client.toJSON())
    }else {
        response.status(404).end()
    }
})

clientRouter.post("/", async(request, response) => {
    const body = request.body

    if(!body.firstName || !body.lastName) {
        return response.status(400).send({ error: "First name, Last name missing." })
    }

    const client = new Client({
        firstName: body.firstName,
        lastName: body.lastName,
        contactNumber: body.contactNumber,
        address: body.address,
        gender: body.gender,
        age: body.age,
        vulnerability: body.vulnerability,
        purposeOfVisit: body.purposeOfVisit,
        timeIn: body.timeIn,
        timeOut: body.timeOut
    })

    if(!client.blacklisted){
        client.blacklisted = false
    }
    const savedClient = await client.save()
    response.status(201).json(savedClient)
})

module.exports = clientRouter
const config = require("./utils/config")
const express = require("express")
const app = express()
const cors = require("cors")
const logger = require("./utils/logger")
const mongoose = require("mongoose")

const clientsRouter = require("./controllers/clients")
const complaintsRouter = require("./controllers/complaints")
const enquiriesRouter = require("./controllers/enquiries")

const middleware = require("./utils/middleware")


mongoose.set("strictQuery", false)

logger.info("Connecting to mongoDB Server:", config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI).then(() => {
    logger.info("Connected to MongoDB")
}).catch((error) => {
    logger.error("Error connecting to external DB Server", error.message)
})

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use("/api/clients", clientsRouter)
app.use("/api/complaints", complaintsRouter)
app.use("/api/enquiries", enquiriesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app

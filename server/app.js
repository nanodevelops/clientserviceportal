const config = require("./utils/config")
const express = require("express")
const app = express()
const cors = require("cors")
const logger = require("./utils/logger")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())

mongoose.set("strictQuery", false)
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    logger.info("Connected to MongoDB")
}).catch((error) => {
    logger.error("Error connecting to external DB Server", error.message)
})

module.exports = app

const logger = require("./logger")

const requestLogger = (request, response, next) => {
    console.log("Method:", request.method)
    console.log("Path:", request.path)
    console.log("Body:", request.body)
    console.log("-----")
    next()
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "Unknown Endpoint" })
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)
    next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
}
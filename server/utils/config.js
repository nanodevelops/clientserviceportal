require("dotenv").config()

const PORT = process.env.PORT
const MONGODB_URI = process.NODE_ENV === "test" ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI
const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD

module.exports = {
    MONGODB_URI,
    username,
    password,
    PORT
}
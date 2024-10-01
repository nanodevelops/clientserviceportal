require("dotenv").config()

const PORT = process.env.PORT || 3001
const MONGODB_URI = process.NODE_ENV === "test" ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI
const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD

module.exports = {
    MONGODB_URI,
    PORT,
    username,
    password
}
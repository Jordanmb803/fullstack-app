require('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')

const {
    SERVER_PORT
} = process.env



const app = express()

app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} now listening`)} )
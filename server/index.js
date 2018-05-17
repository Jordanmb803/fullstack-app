require('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET
} = process.env

const app = express()

// order is important
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
// must come after session
app.use(passport.initialize())
// must come after initialize middleware
app.use(passport.session())
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: '',
    scope: 'openid profile'
}))

app.listen(SERVER_PORT, () => {console.log(`${SERVER_PORT} now listening`)} )
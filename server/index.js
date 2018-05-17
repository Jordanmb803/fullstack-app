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
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env

const app = express()

massive(CONNECTION_STRING).then( (db) => {
    app.set('db', db)
})

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
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
//  below is the function that runs when a user successfully logs on
}, (accessToken, refreshToken, extraParams, profile, done) => {
    let db = app.get('db')
}))

passport.serializeUser((profile, done) => {
    done(null, profile)
})

passport.deserializeUser(() => {
    // whatever we pass out, ends up on the req object as req.user
    done(null, profile)
})

app.get('/login', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: '/login'
}))

app.listen(SERVER_PORT, () => {console.log(`Port ${SERVER_PORT} now listening`)} )
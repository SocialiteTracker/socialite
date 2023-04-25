import express from 'express';
const path = require('path');
const app = express();
app.use(express.json());
import cookieParser from 'cookie-parser';
app.use(cookieParser());

import UserController from './controllers/userController';
import SessionController from './controllers/sessionController';
import CookieController from './controllers/cookieController';

import { Request, Response, NextFunction } from 'express';


const PORT = 3000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

// Root - Checks session and directs to profile if extant 
app.get('/', SessionController.checkLogin, (req: Request, res: Response) => {
    console.log('get req to root')
    // End result - send to profile - how to do w/ React Router?
})

// Login
app.get('/login', (req, res) => {
    console.log('get to login')
    // End result - send to login - how to do w/ React Router?
})

app.post('/login', UserController.authenticateUser, CookieController.setCookies, SessionController.startSession, (req, res) => {
    console.log('post to login')
    // Authenticate user - pass through usercontroller authenticate middleware
    // Set cookies - pass through cookie controller create cookie middleware
    // Start session - pass through session controller start session middleware
})

// Signup
app.get('/signup', (req, res) => {
    console.log('get to signup');
    // Serve signup page
})

app.post('/signup', UserController.createUser, CookieController.setCookies, SessionController.startSession, (req, res) => {
    //app.post('/signup', (req, res) => {
    console.log('post to signup')
    // Create user - user controller create user
    // Set cookies - cookie control create cookie
    // Start session - session controller start session
})

// 404: 
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
    console.log('404')
});

// Global error handler: Not sure how to do this in Typescript!
// @ts-expect-error 
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
    console.log('global error')
});
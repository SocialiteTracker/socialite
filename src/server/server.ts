import express from 'express';
const path = require('path');
const app = express();
app.use(express.json());
import cookieParser from 'cookie-parser';
app.use(cookieParser());

import UserController from './controllers/userController';
import SessionController from './controllers/sessionController';
import CookieController from './controllers/cookieController';
const dbController = require("./controllers/dbController");

import { Request, Response, NextFunction } from 'express';

const PORT = 3000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

// // Root - Checks session and directs to profile if extant 
// // By default go to login, but if session redirect to profile
// app.get('/', SessionController.checkLogin, (req: Request, res: Response) => {
//     console.log('get req to root');

//     if (res.locals.isCookie === true) {
//         res.redirect(301, '/profile');
//     }
// })

// app.post('/login', UserController.authenticateUser, CookieController.setCookies, SessionController.startSession, (req, res) => {
//     console.log('post to login')
//     res.redirect(301, '/profile')
// })

// app.post('/signup', UserController.createUser, CookieController.setCookies, SessionController.startSession, (req, res) => {
//     console.log('post to signup')
//     // Create user - user controller create user
//     // Set cookies - cookie control create cookie
//     // Start session - session controller start session
// })

// //Save the state containing SocialMedia & URL to db 
// app.post('/socialMedia', SessionController.checkLogin, dbController.saveSocialLink, (req: Request, res: Response) => {
//     return res.sendStatus(200);
// })

// //delete the link in the links table for user
// app.delete('/socialMedia', SessionController.checkLogin, dbController.deleteSocialLink, (req: Request, res: Response) => {
//     return res.sendStatus(200);
// })

//getSocialMedias// send social_name & social_value
app.get('/api/getAllSocials', dbController.getAllSocials, (req: Request, res: Response) => {
    return res.status(200).json(res.locals.socials);
});

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
import express from 'express';
const path = require('path');
const app = express();
app.use(express.json());
import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

import UserController from './controllers/userController';
import SessionController from './controllers/sessionController';
import CookieController from './controllers/cookieController';
const dbController = require("./controllers/dbController");

import { Request, Response, NextFunction } from 'express';

const PORT = 3000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

//TODO - some issues with this 
//react router doesn't make a get request to localhost:3000 but only to localhost:8080 (bc of proxy )
//we can either 
// A) handle authentication here but redirection on frontend 
// or 
// B) in frontend have a way to force some get request to this endpoint 
// lets discuss tomorrow :)
//-Giles

// app.get('/', SessionController.checkLogin, (req: Request, res: Response) => {
//     console.log("requesting endpoint");
//     console.log("authenticated: ", res.locals.authenticated);
//     if(res.locals.authenticated) res.redirect(301, '/profile');
//     else{
//         console.log('redirecting')
//         res.redirect(301, '/');
//     }
// });

app.post('/api/login', UserController.authenticateUser, CookieController.setCookies, SessionController.startSession, (req, res) => {
    if(res.locals.authenticated) res.redirect(301, '/profile');
    else res.redirect(301, '/');
});

app.post('/api/signup', UserController.createUser, CookieController.setCookies, SessionController.startSession, (req, res) => {
    if(res.locals.valid) res.redirect(301, '/profile');
    else res.redirect(301, '/');
});


//Save the state containing SocialMedia & URL to db 
app.post('/socialMedia', dbController.saveSocialLink, (req: Request, res: Response) => {
    return res.sendStatus(200);
})

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
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

module.exports = app;
import express from 'express';
const path = require('path');
const app = express();
app.use(express.json());
import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

import UserController from '../src/server/controllers/userController';
import SessionController from '../src/server/controllers/sessionController';
import CookieController from '../src/server/controllers/cookieController';
const dbController = require("../src/server/controllers/dbController");

import { Request, Response, NextFunction } from 'express';

const PORT = 3000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

app.post('/api/login', UserController.authenticateUser, SessionController.startSession, (req, res) => {
    if(res.locals.authenticated) res.redirect(301, '/profile');
    else res.redirect(301, '/');
});

app.post('/api/signup', UserController.createUser, CookieController.setCookies, SessionController.startSession, (req, res) => {
    if(res.locals.valid) res.redirect(301, '/profile');
    else res.redirect(301, '/');
});


//Save the state containing SocialMedia & URL to db 
app.post('/api/socialMedia', dbController.saveSocialLink, (req: Request, res: Response) => {
    return res.sendStatus(200);
})

// //delete the link in the links table for user
app.delete('/api/socialMedia', dbController.deleteSocialLink, (req: Request, res: Response) => {
    return res.sendStatus(200);
})

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

module.exports = app;
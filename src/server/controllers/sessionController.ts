// require in session model
const session = require('express-session');
const pool = require('../config/connect')


// app.use(session({
//      store: new (require('connect-pg-simple')(session))({
//     pool: pool,
//     tableName : 'user_sessions',
//     createTableIfMissing: true,

//   }),
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 24 * 60 * 60 * 1000, secure: true}
//   }))

import { Request, Response, NextFunction } from 'express';

const SessionController = {

    checkLogin: (req: any, res: Response, next: NextFunction) => {
        if(req.session.isAuthenticated) res.locals.authenticated = true; //current session 
        else res.locals.authenticated = false; //no current session 
        return next();
    },

    startSession: async (req: any, res: Response, next: NextFunction) => {
        session({
           store: new (require('connect-pg-simple')(session))({
           pool: pool,
           tableName: 'user_sessions',
           createTableIfMissing: true,
         }),
           secret: process.env.SESSION_SECRET,
           resave: false,
           saveUninitialized: true,
           cookie: { maxAge: 24 * 60 * 60 * 1000, secure: true}
         });
         req.session.isAuthenticated = res.locals.authenticated;
         req.session.userId = res.locals.userId;
        return next();
    }
};

export default SessionController;
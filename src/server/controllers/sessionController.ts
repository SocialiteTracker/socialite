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

    checkLogin: async (req: any, res: Response, next: NextFunction) => {

        const userId = req.session.userId; //pull userId from request body

        // implement later 
        const findCookie = 'SELECT * FROM cookies WHERE user_id=$1';
        const values = [userId];
        const response = await pool.query(findCookie, values);
        const cookie = response.rows;

        if(cookie.length > 0) res.locals.authenticated = true; //current session 
        else res.locals.authenticated = false; //no current session 

        return next();
    },

    startSession: async (req: any, res: Response, next: NextFunction) => {

        // if(res.locals.authenticated){
        //     const addCookie = 'INSERT INTO cookies (created_at,user_id) VALUES ($1,$2)';
        //     const values = [new Date().toTimeString().split(' ')[0],res.locals.userId];
        //     const response = await pool.query(addCookie, values);   
        session({
            store: new (require('connect-pg-simple')(session))({
           pool: pool,
           tableName : 'user_sessions',
           createTableIfMissing: true,
         }),
           secret: process.env.SESSION_SECRET,
           resave: false,
           saveUninitialized: true,
           cookie: { maxAge: 24 * 60 * 60 * 1000, secure: true}
         })
         req.session.isAuthenticated = res.locals.authenticated;
         req.session.userId = res.locals.userId;
        return next();
    }
};

export default SessionController;
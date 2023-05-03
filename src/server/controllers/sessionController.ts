// require in session model
const pool = require('../config/connect')


import { Request, Response, NextFunction } from 'express';

const SessionController = {

    checkLogin: async (req: Request, res: Response, next: NextFunction) => {

        const userId = req.cookies.userId; //pull userId from request body

        // implement later 
        const findCookie = 'SELECT * FROM cookies WHERE user_id=$1';
        const values = [userId];
        const response = await pool.query(findCookie, values);
        const cookie = response.rows;

        if(cookie.length > 0) res.locals.authenticated = true; //current session 
        else res.locals.authenticated = false; //no current session 

        return next();
    },

    startSession: async (req: Request, res: Response, next: NextFunction) => {

        if(res.locals.authenticated){
            const addCookie = 'INSERT INTO cookies (created_at,user_id) VALUES ($1,$2)';
            const values = [new Date().toTimeString().split(' ')[0],res.locals.userId];
            const response = await pool.query(addCookie, values);   
        } 
        return next();
    }
};

export default SessionController;
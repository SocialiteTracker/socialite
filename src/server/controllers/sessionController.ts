// require in session model
const pool = require('../config/connect')

import { Request, Response, NextFunction } from 'express';

// TO DO HERE:
// [x] Move redirect out of middleware and into '/' route
// [ ] Pass cookie/user ID in res.locals
const SessionController = {
    constructor() { }

    checkLogin = (req: Request, res: Response, next: NextFunction) => {
        console.log('in checkLogin middleware');

        // Create variable for cookie held in request:
        const cookie = req.cookies.ssid;

        // Search the Cookie table for an existing cookie that matches user's:
        const findCookie = 'SELECT * FROM cookies WHERE id = cookie'

        // if we get a response from query return next()
        // If not, redirect to login page
        pool.query(findCookie, [])
            .then((response: string) => {
                if (response.length) {
                    res.locals.isCookie = true;
                } else {
                    res.locals.isCookie = false;
                }
                
            })
        return next();
    }

    startSession: (req: Request, res: Response, next: NextFunction) => {
        const findCookie = 'SELECT * FROM cookies WHERE user_id=$1';
        const values = [res.locals.userId];
        const response = await pool.query(findCookie, values);
        const cookie = response.rows;
    }
};

export default SessionController;
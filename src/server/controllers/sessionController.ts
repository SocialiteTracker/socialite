// require in session model

const pool = require('../config/connect')

import { Request, Response, NextFunction } from 'express';

class SessionController {
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
                if (!response.length) {
                    console.log('cookie not found!')
                    next();
                } else {
                    res.redirect(301, '/profile');
                }
            })
        next();
    }

    startSession = (req: Request, res: Response, next: NextFunction) => {
        console.log('in startSession middleware')
    }
};

export default new SessionController();
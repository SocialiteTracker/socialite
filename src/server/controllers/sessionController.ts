// require in session model

const db = require('data placeholder')

import { Request, Response, NextFunction } from 'express';

class SessionController {
    constructor() { }

    checkLogin = (req: Request, res: Response, next: NextFunction) => {
        // console.log('in checkLogin middleware');

        // Create variable for cookie held in request:
        const cookie = req.cookies.ssid;

        // Search the Cookie table for an existing cookie that matches user's:
        const findCookie = 'SELECT * FROM cookies WHERE id = cookie'

        // if we get a response from query return next()
        // If not, redirect to login page
        db.query(findCookie, [])
            .then((response: string) => {
                if (response.length) {
                    return next();
                } else {
                    res.redirect(301, '/login'); // <-- Does this work w. React Router?
                }
            })
        next();
    }

    startSession = (req: Request, res: Response, next: NextFunction) => {
        console.log('in startSession middleware')
    }
};

export default new SessionController();
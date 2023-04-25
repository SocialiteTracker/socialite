// Require in user data model
const bcrypt = require('bcrypt');
const db = require('data placeholder')

import { Request, Response, NextFunction } from 'express';

class UserController {
    constructor() { }

    createUser = (req: Request, res: Response, next: NextFunction) => {
        console.log('in createUser middleware');
        next();
    }

    authenticateUser = (req: Request, res: Response, next: NextFunction) => {

        const user = req.body.username;
        const pw = req.body.password;

        const findUser = 'SELECT * FROM users WERE username = user && password = pw';

        db.query(findUser, [])
            .then((response: string) => {
                if (response.length) {
                    return next();
                } else {
                    res.redirect(301, '/signup');
                }
            })
    }
};

export default new UserController();

// Require in user data model
const bcrypt = require('bcrypt');
const pool = require('../config/connect')

import { Request, Response, NextFunction } from 'express';

const UserController  = {

    createUser: (req: Request, res: Response, next: NextFunction) => {
        console.log('in createUser middleware');
        next();
    },

    authenticateUser: async (req: Request, res: Response, next: NextFunction) => {

        const username = req.body.username;
        const password = req.body.password;

        const findUser = 'SELECT * FROM users WERE username = $1 && password = $2';
        const values = [username,password];

        const response = await pool.query(findUser, values);
        const user = response.rows;
        if(user.length > 0){ //user exists 
            return next();
        }
        else res.locals.valid = false; //user does not exist
    } 
};

export default UserController;

// Require in user data model
const bcrypt = require('bcrypt');
const pool = require('../config/connect')

import { Request, Response, NextFunction } from 'express';

const UserController  = {

    createUser: async (req: Request, res: Response, next: NextFunction) => {

        const username = req.body.username;
        const password = req.body.password;

        //Check if user already exists in database 
        const findUser = 'SELECT * FROM users WHERE username=$1';
        const valuesFindUser = [username];
        const response = await pool.query(findUser, valuesFindUser);
        const user = response.rows;

        if(user.length > 0){ //username already exists - do not add to database
            res.locals.valid = false;
            return next();
        }
        else{ //user does not exist - add new user to database
            const addUser = 'INSERT INTO Users (username,password) VALUES ($1,$2)';
            const valuesAddUser = [username,password];
            await pool.query(addUser, valuesAddUser);
            res.locals.valid = true;
            return next();
        }
    },

    authenticateUser: async (req: Request, res: Response, next: NextFunction) => {

        const username = req.body.username;
        const password = req.body.password;

        const findUser = 'SELECT * FROM users WHERE username = $1 AND password = $2';
        const values = [username,password];

        const response = await pool.query(findUser, values);
        const user = response.rows;
        if(user.length > 0){
            res.locals.authenticated = true; //user exists
            res.locals.userId = user[0].id;
        }
        else res.locals.authenticated = false; //user does not exist
        return next();
    } 
};

export default UserController;

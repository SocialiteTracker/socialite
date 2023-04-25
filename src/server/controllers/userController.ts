// Require in user data model
const bcrypt = require('bcrypt');

import { Request, Response, NextFunction } from 'express';

class UserController {
    constructor() { }

    createUser = (req: Request, res: Response, next: NextFunction) => {
        console.log('in createUser middleware');
        next();
    }

    authenticateUser = (req: Request, res: Response, next: NextFunction) => {
        console.log('in authUser middleware')
    }
};

export default new UserController();

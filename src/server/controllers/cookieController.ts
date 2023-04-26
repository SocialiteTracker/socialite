import { Request, Response, NextFunction } from 'express';
const pool = require('../config/connect');

const CookieController = {

    setCookies: (req: Request, res: Response, next: NextFunction) => {
        
        //pull userID and use it to set a cookie 


        next();
    }
};

export default CookieController;
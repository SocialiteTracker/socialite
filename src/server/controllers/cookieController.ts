import { Request, Response, NextFunction } from 'express';

class CookieController {
    constructor() { }

    setCookies = (req: Request, res: Response, next: NextFunction) => {
        console.log('in setCookies middleware');
        next();
    }
};

export default new CookieController();
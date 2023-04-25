// require in session model

import { Request, Response, NextFunction } from 'express';

class SessionController {
    constructor() { }

    checkLogin = (req: Request, res: Response, next: NextFunction) => {
        console.log('in checkLogin middleware');
        next();
    }

    startSession = (req: Request, res: Response, next: NextFunction) => {
        console.log('in startSession middleware')
    }
};

export default new SessionController();
import { Request, Response, NextFunction } from 'express';

const CookieController = {

    setCookies: async (req: Request, res: Response, next: NextFunction) => {

        //if user authenticated give them a cookie 
        if(res.locals.authenticated) res.cookie('userId',res.locals.userId); //set a session cookie
        return next();
    }
};

export default CookieController;
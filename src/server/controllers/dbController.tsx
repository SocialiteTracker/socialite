import { Request, Response, NextFunction } from 'express';
//require links from database


const dbController = {
    saveSocialMedia : async (req: Request, res:Response, next:NextFunction) =>  {
        try {
            // first find the user_id in user table database
            //check if user_id has linkName in links database if so then update just the link (url)
            // if linkName does not exist, add linkName to links table
            return next()
        }catch{
            return next({
                log: 'Express error handler caught error in dbController.saveSocialMedia middleware',
                status: 500,
                message: { err: 'Error saving entry to DB' },
            });
        }
    }
}
module.exports = dbController;
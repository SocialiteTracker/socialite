import { Request, Response, NextFunction } from 'express';
//require links from database


const dbController = {
    saveSocialMedia : async (req: Request, res: Response, next: NextFunction) =>  {
        try {
            // first find the user_id in <user table in database>

            //if user_id has the same linkName in <links table in database> update the link url in table

            //if the linkName does not exist for the user_id then add linkName and link to links table
            return next()
        }catch{
            return next({
                log: 'Express error handler caught error in dbController.saveSocialMedia middleware',
                status: 500,
                message: { err: 'Error saving entry to DB' },
            });
        }
    },
    deleteSocialMedia : async (req: Request, res: Response, next: NextFunction) => {
        try {
            // find the user in user table
                // use the user_id to check in links table if the requested deleted socialMedia linkName exists in table
                // if it does exist delete the row in table
                return next()
        }catch {
        return next({
            log: "Express error handler caught error in dbController deleteSocialMedia Middleware", 
            status: 500, 
            message: {
                err: 'Error saving entry to DB'
            }
        })
    }
    }
}
module.exports = dbController;
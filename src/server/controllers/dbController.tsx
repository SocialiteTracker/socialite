import { Request, Response, NextFunction } from 'express';
//require links from database
const pool = require('../config/connect');

const dbController = {
    saveSocialLink: async (req: Request, res: Response, next: NextFunction) =>  {
        try {
            pool.query
            // first find the user_id in <user table in database>

            //if user_id has the same linkName in <links table in database> update the link url in table

            //if the linkName does not exist for the user_id then add linkName and link to links table
            return next()
        }catch{
            return next({
                log: 'Express error handler caught error in dbController.saveSocialLink middleware',
                status: 500,
                message: { err: 'Error saving entry to DB' },
            });
        }
    },
    deleteSocialLink: async (req: Request, res: Response, next: NextFunction) => {
        try {
            // find the user in user table
                // use the user_id to check in links table if the requested deleted socialMedia linkName exists in table
                // if it does exist delete the row in table
                return next()
        }catch {
        return next({
            log: "Express error handler caught error in dbController deleteSocialLink Middleware", 
            status: 500, 
            message: {
                err: 'Error saving entry to DB'
            }
        })
    }
    },
    getAllSocials : async (req: Request, res: Response, next: NextFunction) => {
        try {
            //uncomment once session middleware added
            // const { user_id } = req.body;
            
            const user_id = 1;
            // parameterized query to avoid sql injection vulnerabilities
            const text = 'SELECT social_name, social_value FROM SOCIALS WHERE user_id=$1';
            const values = [user_id];
// find the user in the user table
            const response = await pool.query(text, values);
            res.locals.socials = response.rows;
            return next();
            // use the user id to find all the 
        }catch {
            return next({
            log: "Express error handler caught error in dbController getAllSocials Middleware", 
            status: 500, 
            message: {
                err: 'Error saving entry to DB'
            }
        })
        }
    }
}
module.exports = dbController;
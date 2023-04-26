import { Request, Response, NextFunction } from 'express';
//require links from database
const pool = require('../config/connect');

const dbController = {
    saveSocialLink: async (req: Request, res: Response, next: NextFunction) => {
        try {
            // const user_id = req.cookies.userId;
            const user_id = 7; 
            console.log("req.body", req.body);
            //uncomment once session middleware is added
            const { social_name, social_value } = req.body;
            //ON DUPLICATE KEY UPDATE clause is used to update the social_value if the row already exists.
            const text = "INSERT INTO socials (social_name, social_value, user_id) VALUES ($1, $2, $3) ON CONFLICT (social_name) DO UPDATE SET social_value = EXCLUDED.social_value";
            const values = [social_name, social_value, user_id]
            console.log('hi');
            await pool.query(text, values);
            return next();
        } catch{
            return next({
                log: 'Express error handler caught error in dbController.saveSocialLink middleware',
                status: 500,
                message: { err: 'Error saving entry to DB' },
            });
        }
    },
    deleteSocialLink: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { social_name } = req.body;
            const text = "SEARCH "

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
            
            const user_id = 7;
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
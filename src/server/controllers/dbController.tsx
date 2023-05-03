import { Request, Response, NextFunction } from 'express';
//require links from database
const pool = require('../config/connect');
import { socialLink } from '../../types'

const dbController = {
    saveSocialLink: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user_id = req.cookies.userId; // Replace with your user ID value or retrieve dynamically
            const { social_name, social_value }: socialLink = req.body;
    
             // Delete any existing rows with the same social_name and user_id
            const deleteQuery = "DELETE FROM socials WHERE social_name = $1 AND user_id = $2";
            const deleteValues = [social_name, user_id];
            await pool.query(deleteQuery, deleteValues);

             // Insert a new row with the specified social_name, social_value, and user_id
            const insertQuery = "INSERT INTO socials (social_name, social_value, user_id) VALUES ($1, $2, $3)";
            const insertValues = [social_name, social_value, user_id];
            await pool.query(insertQuery, insertValues);
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
            const user_id = req.cookies.userId;
            const { social_name }: socialLink = req.body;
            const text = "DELETE FROM socials WHERE social_name = $1 AND user_id = $2"
            const values = [social_name, user_id];
            await pool.query(text, values);
            console.log('deleted')
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
            const user_id = req.cookies.userId
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
export default dbController;
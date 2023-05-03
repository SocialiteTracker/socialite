import { describe } from 'node:test'
import dbController from '../src/server/controllers/dbController';


import { NextFunction, Request, Response } from "express";

describe("database controller", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: NextFunction = jest.fn();
    
  
    test("get all links", async () => {
        mockRequest = {cookies: {userId: 35}};
        mockResponse = {locals: {}
        };
      await dbController.getAllSocials(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );
  
      expect(mockResponse.locals.socials.length).toBe(0);
    });
  
  });
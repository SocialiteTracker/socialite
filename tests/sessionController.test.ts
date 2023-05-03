import { describe } from 'node:test'
import SessionController from '../src/server/controllers/sessionController';


import { NextFunction, Request, Response } from "express";

describe("session controller", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: NextFunction = jest.fn();
    
  
    test("is logged in", async () => {
        mockRequest = {cookies: {userId: 31}};
        mockResponse = {locals: {}
        };
      await SessionController.checkLogin(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );
  
      expect(mockResponse.locals.authenticated).toBe(true);
    });
  
    test("session started", async () => {
        mockRequest = {};
        mockResponse = {locals: {authenticated: false}
        };

      await SessionController.startSession(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );
  
      expect(SessionController.startSession(mockRequest as Request,
        mockResponse as Response,
        nextFunction)).toBe(nextFunction);
  
    });
  
  });
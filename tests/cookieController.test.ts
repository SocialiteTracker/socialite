import { describe } from 'node:test'
import cookieController from '../src/server/controllers/cookieController';


import { NextFunction, Request, Response } from "express";

describe("cookie controller", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let nextFunction: NextFunction = jest.fn();
    
  
    test("set cookies", async () => {
        mockRequest = {cookies: {userId: 35}};
        mockResponse = {locals: {authenticated: true, userId: 36}
        };
      await cookieController.setCookies(
        mockRequest as Request,
        mockResponse as Response,
        nextFunction
      );
  
      expect(mockResponse).toBeDefined();
    });
  
  });
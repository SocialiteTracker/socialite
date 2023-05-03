import { describe } from 'node:test'
import UserController from '../src/server/controllers/userController';


import { NextFunction, Request, Response } from "express";

describe("user controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction = jest.fn();
  mockRequest = {body: {username: 'jest', password:'jest'}};
  mockResponse = {locals: {}
  };
  

  test("user already exists", async () => {
    await UserController.createUser(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.locals.valid).toBe(false);
  });

  test("user authenticated", async () => {
    await UserController.authenticateUser(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.locals.authenticated).toBe(true);

  });

  test("userId returned", async () => {
    await UserController.authenticateUser(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction
    );

    expect(mockResponse.locals.userId).toBe(36);

  });
});


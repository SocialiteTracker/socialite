import { Request } from "express"

export interface SessionRequest extends Request {
    session: Object
  }

export interface socialState {
    socialMedia: string,
    url: string
}

export interface dbResponse {
    social_name: string,
    social_value: string,
}
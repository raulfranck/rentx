import { NextFunction, Request, Response } from "express";
import {verify} from "jsonwebtoken"
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Bearer ss6dkfb6a9s78d9d8fa9998sfn

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token Missing", 401)
    }

    const [, token] = authHeader.split(" ")

    try {
        const {sub: user_id} = verify(token, "3d2ddfa2d85d040e3e1a9e7c0ca3e333") as IPayload;
        const usersRepository = new UsersRepository();

        const user = usersRepository.findById(user_id)

        if(!user) {
            throw new AppError("User does not exists!", 401);
        }

        request.user = {
            id: user_id
        }

        next()
    } catch {
        throw new AppError("Invalid token", 401)
    }

}
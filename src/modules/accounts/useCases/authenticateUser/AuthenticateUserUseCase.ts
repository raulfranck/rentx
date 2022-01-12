import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "@errors/AppError";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({email, password}: IRequest): Promise<IResponse> {
        // Usuario existe ?
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect!")
        }

        // Senha está errada ?
        const passwordMath = await compare(password, user.password)
        if (!passwordMath ) {
            throw new AppError("Email or password incorrect!")
        }

        // Se estiver certa: Gerar json web token
        const token = sign({}, "3d2ddfa2d85d040e3e1a9e7c0ca3e333", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;
    }
}

export {AuthenticateUserUseCase}
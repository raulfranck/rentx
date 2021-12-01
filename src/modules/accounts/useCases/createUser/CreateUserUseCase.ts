import { inject } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";


class CreateUserUseCase {
    
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    
    async execute({name, username, email, password, driver_license}: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create
    }
}

export { CreateUserUseCase };
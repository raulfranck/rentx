import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUserRepository";


interface IRequest {
    user_id: string;
    avatar_file: string;
}

    // Adicionar coluna avatar na tabela de users - ok
    // Refatorar usuario com coluna avatar
    // Configuração upload multer
    // Criar regra de negócio do upload
    // Criar Controller

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({user_id, avatar_file}: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);

        user.avatar = avatar_file;

        await this.userRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase }
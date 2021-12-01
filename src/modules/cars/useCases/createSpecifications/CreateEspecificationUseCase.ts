import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateEspecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationRepository) {}
    
        async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification Already exists!");
        }

        await this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateEspecificationUseCase };
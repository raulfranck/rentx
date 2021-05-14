import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateEspecificationUseCase {
    constructor(private specificationsRepository: ISpecificationRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification Already exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateEspecificationUseCase };

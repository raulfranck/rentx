import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/* 
[x] - Definir o tipo de retorno
[x] - Alterar o tipo de erro
[x] - Acessar o Repositorio
[x] - Retornar Algo
*/

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({ description, name }: IRequest): Promise<void> {
        const categoryAlreadExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadExists) {
            throw new Error("Category Already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };

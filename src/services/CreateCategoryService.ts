import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

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

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadExists) {
            throw new Error("Category Already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };

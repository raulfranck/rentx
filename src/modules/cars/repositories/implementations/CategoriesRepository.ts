import { Category } from "../../entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

import {getRepository, Repository} from "typeorm";

// Padrão Singleton

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>

    private static INSTANCE: CategoriesRepository; 

    private constructor() {
        this.repository = getRepository(Category)
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }

    async create({ description, name }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        })

        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        const categories = this.repository.find();
        return categories
    }

    async findByName(name: string): Promise<Category> {
        // Select * from categories where name = "name" limit 1
        const category = await this.repository.findOne({ name })
        return category;
    }
}

export { CategoriesRepository };

import {container} from 'tsyringe';

import { ICategoriesRepository} from '@modules/cars/repositories/ICategoriesRepository';
import {CategoriesRepository} from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationRepository';
import { IUsersRepository } from "@modules/accounts/repositories/IUserRepository";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationRepository';

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)
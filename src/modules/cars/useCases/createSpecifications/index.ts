import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateEspecificationUseCase } from "./CreateEspecificationsUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateEspecificationUseCase(
    specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };

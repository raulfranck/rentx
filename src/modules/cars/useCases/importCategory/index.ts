import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCateogryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export {importCategoryController}
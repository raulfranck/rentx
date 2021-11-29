import {Request, Response} from "express"
import { ImportCategoryUseCase } from "./importCateogryUseCase";
import {container} from "tsyringe";

class ImportCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase)

        await importCategoryUseCase.execute(file)
        return response.send()
    }
}

export {ImportCategoryController}
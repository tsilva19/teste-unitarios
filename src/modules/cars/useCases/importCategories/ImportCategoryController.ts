/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file }: any = request;
    console.log("teste-----");
    console.log(file);
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };

import csvParse from "csv-parser";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategory[] = [];

      fs.createReadStream(file.path)
        .pipe(csvParse(["name", "description"]))
        .on("data", (data) => categories.push(data))
        .on("end", () => {
          console.log(categories);
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", () => {
          reject(Error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = await this.categoriesRepository.findByName(name);

      if (!existCategory) {
        await this.categoriesRepository.create({ name, description });
      }
    });
  }
}
export { ImportCategoryUseCase };

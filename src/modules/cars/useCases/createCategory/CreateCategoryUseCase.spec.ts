import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be to able create a new category", async () => {
    const category = {
      name: "Category Test",
      decription: "Category description Test",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.decription,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    console.log(categoryCreated);

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be to able create a new category name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        decription: "Category description Test",
      };
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.decription,
      });

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.decription,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});

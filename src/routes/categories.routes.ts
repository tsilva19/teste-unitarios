/* eslint-disable prettier/prettier */
import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategories/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/ListCategories/ListCategoryController";
// import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",

});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.post(
  "/import", 
  upload.single("file"),  
  importCategoryController.handle
);

export { categoriesRoutes };
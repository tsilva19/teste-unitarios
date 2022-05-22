import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRouter = Router();

specificationRouter.use(ensureAuthenticated);
const createSpecificationController = new CreateSpecificationController();

specificationRouter.post("/", createSpecificationController.handle);

export { specificationRouter };

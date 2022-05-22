import { Router } from "express";

import { authenticateRoutes } from "./autenticate.route";
import { categoriesRoutes } from "./categories.routes";
import { specificationRouter } from "./specification.routes";
import { usersRoutes } from "./users.route";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRouter);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };

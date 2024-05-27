import { Router } from "express";
import { CompanyController } from "./controller";

export default () => {
  const router = Router();

  router.post("/company", CompanyController.companyCreate);

  // router.get("/company", CompanyController.companyGet);

  return router;
};

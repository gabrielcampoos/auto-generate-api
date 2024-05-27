import { Router } from "express";
import { TotalValueController } from "./controller";

export default () => {
  const router = Router();

  router.post("/totalValue", TotalValueController.totalValueCreate);

  router.get("/totalValue", TotalValueController.totalValueGet);

  return router;
};

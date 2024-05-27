import { Router } from "express";
import { NfeController } from "./controller";

export default () => {
  const router = Router();

  router.post("/nfe", NfeController.nfeCreate);

  router.get("/nfe", NfeController.nfeList);

  router.get("/nfeGet", NfeController.nfeGet);

  router.delete("/nfe/:id", NfeController.nfeDelete);

  return router;
};

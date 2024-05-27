import { Router } from "express";
import { InfoController } from "./controller";

export default () => {
  const router = Router();

  router.post("/info", InfoController.infoCreate);

  router.get("/info", InfoController.infoGet);

  return router;
};

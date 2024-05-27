import { Router } from "express";
import { ClientController } from "./controller";

export default () => {
  const router = Router();

  router.post("/client", ClientController.clientCreate);

  router.get("/client", ClientController.clientsList);
  router.get("/clientGet", ClientController.clientGet);

  return router;
};

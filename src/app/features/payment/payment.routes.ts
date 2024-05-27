import { Router } from "express";
import { PaymentController } from "./controller";

export default () => {
  const router = Router();

  router.post("/payment", PaymentController.paymentCreate);

  // router.get("/payment", PaymentController.paymentGet);

  return router;
};

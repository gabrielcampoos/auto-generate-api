import { Request, Response } from "express";
import { Result, httpHelper } from "../../../shared/utils";
import { PaymentCreateUsecase, PaymentGetUsecase } from "../usecases";

export class PaymentController {
  static async paymentCreate(request: Request, response: Response) {
    const { formOfPayment, value, maturity } = request.body;

    try {
      const usecase = new PaymentCreateUsecase();

      const result = await usecase.execute({
        formOfPayment,
        value,
        maturity,
      });

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async paymentGet(request: Request, response: Response) {
    try {
      const { id } = request.payment;

      const usecase = new PaymentGetUsecase();

      const result = await usecase.execute(id);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }
}

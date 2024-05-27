import { Request, Response } from "express";
import { Result, httpHelper } from "../../../shared/utils";
import { TotalValueCreateUsecase, TotalValueGetUsecase } from "../usecases";

export class TotalValueController {
  static async totalValueCreate(request: Request, response: Response) {
    const { value } = request.body;

    try {
      const usecase = new TotalValueCreateUsecase();

      const result = await usecase.execute({
        value,
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

  static async totalValueGet(request: Request, response: Response) {
    try {
      const { id } = request.totalValue;

      const usecase = new TotalValueGetUsecase();

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

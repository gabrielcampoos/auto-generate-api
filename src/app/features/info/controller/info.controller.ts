import { Request, Response } from "express";
import { Result, httpHelper } from "../../../shared/utils";
import { InfoCreateUsecase, InfoGetUsecase } from "../usecases";

export class InfoController {
  static async infoCreate(request: Request, response: Response) {
    const { item, text, address, value } = request.body;

    try {
      const usecase = new InfoCreateUsecase();

      const result = await usecase.execute({
        item,
        text,
        address,
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

  // static async infoGet(request: Request, response: Response) {
  //   try {
  //     const { id } = request.info;

  //     const usecase = new InfoGetUsecase();

  //     const result = await usecase.execute(id);

  //     return httpHelper.success(response, result);
  //   } catch (error: any) {
  //     return httpHelper.badRequestError(
  //       response,
  //       Result.error(500, error.toString())
  //     );
  //   }
  // }
}

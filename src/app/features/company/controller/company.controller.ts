import { Request, Response } from "express";
import { Result, httpHelper } from "../../../shared/utils";
import { CompanyCreateUsecase, CompanyGetUsecase } from "../usecases";

export class CompanyController {
  static async companyCreate(request: Request, response: Response) {
    const { name, socialReason, address, zipCode, cnpj, number } = request.body;

    try {
      const usecase = new CompanyCreateUsecase();

      const result = await usecase.execute({
        name,
        socialReason,
        address,
        zipCode,
        cnpj,
        number,
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

  static async companyGet(request: Request, response: Response) {
    try {
      const { id } = request.company;

      const usecase = new CompanyGetUsecase();

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

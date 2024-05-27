import { Request, Response } from "express";
import {
  NfeCreateUsecase,
  NfeDeleteUsecase,
  NfeGetUsecase,
  NfeListUsecase,
} from "../usecases";
import { Result, httpHelper } from "../../../shared/utils";

export class NfeController {
  static async nfeCreate(request: Request, response: Response) {
    const {
      nameClient,
      cpfClient,
      addressClient,
      districtClient,
      zipCodeClient,
      ufClient,
      cityClient,
      municipalRegistrationClient,
      phoneClient,
      nameCompany,
      socialReasonCompany,
      addressCompany,
      zipCodeCompany,
      cnpjCompany,
      numberCompany,
      itemInfo,
      textInfo,
      addressInfo,
      valueInfo,
      formOfPaymentPayment,
      valuePayment,
      maturityPayment,
      valueTotal,
    } = request.body;

    try {
      const usecase = new NfeCreateUsecase();

      const result = await usecase.execute({
        nameClient,
        cpfClient,
        addressClient,
        districtClient,
        zipCodeClient,
        ufClient,
        cityClient,
        municipalRegistrationClient,
        phoneClient,
        nameCompany,
        socialReasonCompany,
        addressCompany,
        zipCodeCompany,
        cnpjCompany,
        numberCompany,
        itemInfo,
        textInfo,
        addressInfo,
        valueInfo,
        formOfPaymentPayment,
        valuePayment,
        maturityPayment,
        valueTotal,
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

  static async nfeList(request: Request, response: Response) {
    try {
      const usecase = new NfeListUsecase();

      const result = await usecase.execute();

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async nfeGet(request: Request, response: Response) {
    try {
      const { id } = request.nfe;

      const usecase = new NfeGetUsecase();

      const result = await usecase.execute(id);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async nfeDelete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const usecase = new NfeDeleteUsecase();

      const result = await usecase.execute({ id });

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }
}

import { Request, Response } from "express";
import {
  ClientCreateUsecase,
  ClientGetUsecase,
  ClientListUsecase,
} from "../usecases";
import { Result, httpHelper } from "../../../shared/utils";

export class ClientController {
  static async clientCreate(request: Request, response: Response) {
    const {
      name,
      cpf,
      address,
      district,
      zipCode,
      uf,
      city,
      municipalRegistration,
      phone,
    } = request.body;

    try {
      const usecase = new ClientCreateUsecase();

      const result = await usecase.execute({
        name,
        cpf,
        address,
        district,
        zipCode,
        uf,
        city,
        municipalRegistration,
        phone,
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

  static async clientsList(request: Request, response: Response) {
    try {
      const usecase = new ClientListUsecase();

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

  static async clientGet(request: Request, response: Response) {
    try {
      const { id } = request.client;

      const usecase = new ClientGetUsecase();

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

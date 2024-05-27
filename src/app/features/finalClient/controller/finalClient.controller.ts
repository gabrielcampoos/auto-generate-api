// import { Request, Response } from "express";
// import { FinalClientCreateUsecase, FinalClientGetUsecase } from "../usecases";
// import { Result, httpHelper } from "../../../shared/utils";
// import { FinalClientListUsecase } from "../usecases/finalClient-list.usecase";

// export class FinalClientController {
//   static async finalClientCreate(request: Request, response: Response) {
//     const { client, company, info, payment, totalValue } = request.body;

//     try {
//       const usecase = new FinalClientCreateUsecase();

//       const result = await usecase.execute({
//         client,
//         company,
//         info,
//         payment,
//         totalValue,
//       });

//       if (!result.success) return httpHelper.badRequestError(response, result);

//       return httpHelper.success(response, result);
//     } catch (error: any) {
//       return httpHelper.badRequestError(
//         response,
//         Result.error(500, error.toString())
//       );
//     }
//   }

//   static async finalClientGet(request: Request, response: Response) {
//     try {
//       const { id } = request.client;

//       const usecase = new FinalClientGetUsecase();

//       const result = await usecase.execute(id);

//       return httpHelper.success(response, result);
//     } catch (error: any) {
//       return httpHelper.badRequestError(
//         response,
//         Result.error(500, error.toString())
//       );
//     }
//   }

//   static async finalClientList(request: Request, response: Response) {
//     try {
//       const usecase = new FinalClientListUsecase();

//       const result = await usecase.execute();

//       return httpHelper.success(response, result);
//     } catch (error: any) {
//       return httpHelper.badRequestError(
//         response,
//         Result.error(500, error.toString())
//       );
//     }
//   }
// }

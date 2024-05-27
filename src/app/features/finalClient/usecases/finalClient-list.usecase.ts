// import { Result, ResultDto } from "../../../shared/utils";
// import { FinalClientRepository } from "../repository";

// export class FinalClientListUsecase {
//   async execute(): Promise<ResultDto> {
//     const finalClientRepository = new FinalClientRepository();

//     const finalClientDb = await finalClientRepository.listFinalClients();

//     const finalClients = finalClientDb.map((finalClient) =>
//       finalClient.toJson()
//     );

//     return Result.success(
//       200,
//       "Clientes finais listados com sucesso.",
//       finalClients
//     );
//   }
// }

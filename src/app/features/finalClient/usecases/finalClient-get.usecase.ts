// import { Result, ResultDto } from "../../../shared/utils";
// import { FinalClientRepository } from "../repository";

// export class FinalClientGetUsecase {
//   async execute(id: string): Promise<ResultDto> {
//     const finalClientRepository = new FinalClientRepository();

//     const finalClient = await finalClientRepository.findClientById(id);

//     if (!finalClient) return Result.error(400, "Cliente final não encontrado.");

//     return Result.success(
//       200,
//       "Cliente final encontrado com sucesso.",
//       finalClient.toJson()
//     );
//   }
// }

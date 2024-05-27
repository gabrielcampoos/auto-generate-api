// import { CacheRepository } from "../../../shared/cache/cache.repository";
// import { Result, ResultDto } from "../../../shared/utils";
// import { FinalClientCreateDto } from "../dtos";
// import { FinalClientRepository } from "../repository";

// const PREFIX_CACHE = "list-all-clients";

// export class FinalClientCreateUsecase {
//   async execute(data: FinalClientCreateDto): Promise<ResultDto> {
//     const finalClientRepository = new FinalClientRepository();
//     const cacheRepository = new CacheRepository();

//     const finalClientCreated = await finalClientRepository.finalClientCreate({
//       id: data.id,
//       client: data.client,
//       company: data.company,
//       info: data.info,
//       payment: data.payment,
//       totalValue: data.totalValue,
//     });

//     await cacheRepository.delete(
//       `${PREFIX_CACHE}-${finalClientCreated?.toJson().id}`
//     );

//     return Result.success(
//       200,
//       "Cliente final criado com sucesso.",
//       finalClientCreated?.toJson()
//     );
//   }
// }

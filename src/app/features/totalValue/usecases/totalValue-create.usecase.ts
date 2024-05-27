import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Result, ResultDto } from "../../../shared/utils";
import { TotalValueCreateDto } from "../dtos";
import { TotalValueRepository } from "../repository";

const PREFIX_CACHE = "list-all-clients";

export class TotalValueCreateUsecase {
  async execute(data: TotalValueCreateDto): Promise<ResultDto> {
    // const finalClientRepository = new FinalClientRepository();
    const cacheRepository = new CacheRepository();

    // const finalClientFound = await finalClientRepository.findFinalClientById(
    //   data.idFinalClient
    // );

    // if (!finalClientFound)
    //   return Result.error(400, "Cliente final não encontrado.");

    const totalValueRepository = new TotalValueRepository();

    const totalValueCreated = await totalValueRepository.totalValueCreate({
      // idFinalClient: data.idFinalClient,
      value: data.value,
    });

    // await cacheRepository.delete(`${PREFIX_CACHE}-${data.idFinalClient}`);
    await cacheRepository.delete(
      `${PREFIX_CACHE}-${totalValueCreated.toJson().id}`
    );

    return Result.success(
      200,
      "Forma de pagamento criada com sucesso.",
      totalValueCreated.toJson()
    );
  }
}

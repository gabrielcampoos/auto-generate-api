import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Result, ResultDto } from "../../../shared/utils";
import { InfoCreateDto } from "../dtos";
import { InfoRepository } from "../repository";

const PREFIX_CACHE = "list-all-clients";

export class InfoCreateUsecase {
  async execute(data: InfoCreateDto): Promise<ResultDto> {
    // const finalClientRepository = new FinalClientRepository();
    const cacheRepository = new CacheRepository();

    // const finalClientFound = await finalClientRepository.findFinalClientById(
    //   data.idFinalClient
    // );

    // if (!finalClientFound)
    //   return Result.error(400, "Cliente final não encontrado.");

    const infoRepository = new InfoRepository();

    const infoCreated = await infoRepository.infoCreate({
      // idFinalClient: data.idFinalClient,
      address: data.address,
      item: data.item,
      text: data.text,
      value: data.value,
    });

    // await cacheRepository.delete(`${PREFIX_CACHE}-${data.idFinalClient}`);
    await cacheRepository.delete(`${PREFIX_CACHE}-${infoCreated.toJson().id}`);

    return Result.success(
      200,
      "Empresa criada com sucesso.",
      infoCreated.toJson()
    );
  }
}

import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Result, ResultDto } from "../../../shared/utils";
import { NfeDeleteDto } from "../dtos";
import { NfeRepository } from "../repository";

const PREFIX_CACHE = "list-all-clients";

export class NfeDeleteUsecase {
  async execute(data: NfeDeleteDto): Promise<ResultDto> {
    const { id } = data;

    const nfeRepository = new NfeRepository();
    const cacheRepository = new CacheRepository();

    const nfe = await nfeRepository.findNfeById(id);

    if (!nfe) return Result.error(400, "Nota não encontrada.");

    nfeRepository.deleteNfe(id);

    await cacheRepository.delete(`${PREFIX_CACHE}-${id}`);

    return Result.success(200, "Nota excluida com sucesso.", nfe.toJson());
  }
}

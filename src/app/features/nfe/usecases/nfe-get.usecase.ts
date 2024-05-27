import { Result, ResultDto } from "../../../shared/utils";
import { NfeRepository } from "../repository";

export class NfeGetUsecase {
  async execute(id: string): Promise<ResultDto> {
    const nfeRepository = new NfeRepository();

    const nfe = await nfeRepository.findNfeById(id);

    if (!nfe) return Result.error(400, "Nota não encontrada.");

    return Result.success(200, "Nota encontrada com sucesso.", nfe.toJson());
  }
}

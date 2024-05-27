import { Result, ResultDto } from "../../../shared/utils";
import { InfoRepository } from "../repository";

export class InfoGetUsecase {
  async execute(id: string): Promise<ResultDto> {
    const infoRepository = new InfoRepository();

    const info = await infoRepository.findInfoById(id);

    if (!info) return Result.error(400, "Cliente final não encontrado.");

    return Result.success(
      200,
      "Cliente final encontrado com sucesso.",
      info.toJson()
    );
  }
}

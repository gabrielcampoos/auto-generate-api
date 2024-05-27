import { Result, ResultDto } from "../../../shared/utils";
import { TotalValueRepository } from "../repository";

export class TotalValueGetUsecase {
  async execute(id: string): Promise<ResultDto> {
    const totalValueRepository = new TotalValueRepository();

    const totalValue = await totalValueRepository.findTotalValueById(id);

    if (!totalValue) return Result.error(400, "Cliente final não encontrado.");

    return Result.success(
      200,
      "Cliente final encontrado com sucesso.",
      totalValue.toJson()
    );
  }
}

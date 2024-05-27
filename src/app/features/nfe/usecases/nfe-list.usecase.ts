import { Result, ResultDto } from "../../../shared/utils";
import { NfeRepository } from "../repository";

export class NfeListUsecase {
  async execute(): Promise<ResultDto> {
    const nfeRepository = new NfeRepository();

    const listOfNfeDb = await nfeRepository.listNfe();

    const listOfNfe = listOfNfeDb.map((nfe) => nfe.toJson());

    return Result.success(200, "Notas listadas com sucesso", listOfNfe);
  }
}

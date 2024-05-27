import { Result, ResultDto } from "../../../shared/utils";
import { ClientRepository } from "../repository";

export class ClientGetUsecase {
  async execute(id: string): Promise<ResultDto> {
    const clientRepository = new ClientRepository();

    const client = await clientRepository.findClientById(id);

    if (!client) return Result.error(400, "Cliente final não encontrado.");

    return Result.success(
      200,
      "Cliente final encontrado com sucesso.",
      client.toJson()
    );
  }
}

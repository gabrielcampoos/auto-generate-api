import { Result, ResultDto } from "../../../shared/utils";
import { ClientRepository } from "../repository";

export class ClientListUsecase {
  async execute(): Promise<ResultDto> {
    const clientRepository = new ClientRepository();

    const listOfClientsDb = await clientRepository.listClient();

    const listOfClients = listOfClientsDb.map((clients) => clients.toJson());

    return Result.success(200, "Clientes listados com sucesso", listOfClients);
  }
}

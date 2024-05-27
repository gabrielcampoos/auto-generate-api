import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Result, ResultDto } from "../../../shared/utils";
import { ClientCreateDto } from "../dtos";
import { ClientRepository } from "../repository";

const PREFIX_CACHE = "list-all-clients";

export class ClientCreateUsecase {
  async execute(data: ClientCreateDto): Promise<ResultDto> {
    // const finalClientRepository = new FinalClientRepository();
    const cacheRepository = new CacheRepository();

    // const finalClientFound = await finalClientRepository.findFinalClientById(
    //   data.idFinalClient
    // );

    // if (!finalClientFound)
    //   return Result.error(400, "Cliente final não encontrado.");

    const clientRepository = new ClientRepository();

    const clientCreated = await clientRepository.clientCreate({
      name: data.name,
      cpf: data.cpf,
      address: data.address,
      city: data.city,
      district: data.district,
      municipalRegistration: data.municipalRegistration,
      phone: data.phone,
      uf: data.uf,
      zipCode: data.zipCode,
    });

    // await cacheRepository.delete(`${PREFIX_CACHE}-${data.idFinalClient}`);
    await cacheRepository.delete(
      `${PREFIX_CACHE}-${clientCreated.toJson().id}`
    );

    return Result.success(
      200,
      "Cliente criado com sucesso.",
      clientCreated.toJson()
    );
  }
}

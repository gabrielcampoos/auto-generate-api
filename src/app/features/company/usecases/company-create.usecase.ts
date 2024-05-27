import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Result, ResultDto } from "../../../shared/utils";
import { CompanyCreateDto } from "../dtos";
import { CompanyRepository } from "../repository";

const PREFIX_CACHE = "list-all-clients";

export class CompanyCreateUsecase {
  async execute(data: CompanyCreateDto): Promise<ResultDto> {
    // const finalClientRepository = new FinalClientRepository();
    const cacheRepository = new CacheRepository();

    // const finalClientFound = await finalClientRepository.findFinalClientById(
    //   data.idFinalClient
    // );

    // if (!finalClientFound)
    //   return Result.error(400, "Cliente final não encontrado.");

    const companyRepository = new CompanyRepository();

    const companyCreated = await companyRepository.companyCreate({
      // idFinalClient: data.idFinalClient,
      address: data.address,
      cnpj: data.cnpj,
      name: data.name,
      number: data.number,
      socialReason: data.socialReason,
      zipCode: data.zipCode,
    });

    // await cacheRepository.delete(`${PREFIX_CACHE}-${data.idFinalClient}`);
    await cacheRepository.delete(
      `${PREFIX_CACHE}-${companyCreated.toJson().id}`
    );

    return Result.success(
      200,
      "Empresa criada com sucesso.",
      companyCreated.toJson()
    );
  }
}

import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Result, ResultDto } from "../../../shared/utils";
import { NfeCreateDto } from "../dtos";
import { NfeRepository } from "../repository";

const PREFIX_CACHE = "list-all-clients";

export class NfeCreateUsecase {
  async execute(data: NfeCreateDto): Promise<ResultDto> {
    // const finalClientRepository = new FinalClientRepository();
    const cacheRepository = new CacheRepository();

    // const finalClientFound = await finalClientRepository.findFinalClientById(
    //   data.idFinalClient
    // );

    // if (!finalClientFound)
    //   return Result.error(400, "Cliente final não encontrado.");

    const nfeRepository = new NfeRepository();

    const nfeCreated = await nfeRepository.nfeCreate({
      nameClient: data.nameClient,
      cpfClient: data.cpfClient,
      addressClient: data.addressClient,
      districtClient: data.districtClient,
      zipCodeClient: data.zipCodeClient,
      ufClient: data.ufClient,
      cityClient: data.cityClient,
      municipalRegistrationClient: data.municipalRegistrationClient,
      phoneClient: data.phoneClient,
      nameCompany: data.nameCompany,
      socialReasonCompany: data.socialReasonCompany,
      addressCompany: data.addressCompany,
      zipCodeCompany: data.zipCodeCompany,
      cnpjCompany: data.cnpjCompany,
      numberCompany: data.numberCompany,
      itemInfo: data.itemInfo,
      textInfo: data.textInfo,
      addressInfo: data.addressInfo,
      valueInfo: data.valueInfo,
      formOfPaymentPayment: data.formOfPaymentPayment,
      valuePayment: data.valuePayment,
      maturityPayment: data.maturityPayment,
      valueTotal: data.valueTotal,
    });

    // await cacheRepository.delete(`${PREFIX_CACHE}-${data.idFinalClient}`);
    await cacheRepository.delete(`${PREFIX_CACHE}-${nfeCreated.toJson().id}`);

    return Result.success(
      200,
      "Cliente criado com sucesso.",
      nfeCreated.toJson()
    );
  }
}

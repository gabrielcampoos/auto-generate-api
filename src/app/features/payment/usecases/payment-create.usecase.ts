import { CacheRepository } from "../../../shared/cache/cache.repository";
import { Result, ResultDto } from "../../../shared/utils";
import { PaymentCreateDto } from "../dtos";
import { PaymentRepository } from "../repository";

const PREFIX_CACHE = "list-all-clients";

export class PaymentCreateUsecase {
  async execute(data: PaymentCreateDto): Promise<ResultDto> {
    // const finalClientRepository = new FinalClientRepository();
    const cacheRepository = new CacheRepository();

    // const finalClientFound = await finalClientRepository.findFinalClientById(
    //   data.idFinalClient
    // );

    // if (!finalClientFound)
    //   return Result.error(400, "Cliente final não encontrado.");

    const paymentRepository = new PaymentRepository();

    const paymentCreated = await paymentRepository.paymentCreate({
      // idFinalClient: data.idFinalClient,
      formOfPayment: data.formOfPayment,
      maturity: data.maturity,
      value: data.value,
    });

    // await cacheRepository.delete(`${PREFIX_CACHE}-${data.idFinalClient}`);
    await cacheRepository.delete(
      `${PREFIX_CACHE}-${paymentCreated.toJson().id}`
    );

    return Result.success(
      200,
      "Forma de pagamento criada com sucesso.",
      paymentCreated.toJson()
    );
  }
}

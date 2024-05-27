import { Result, ResultDto } from "../../../shared/utils";
import { PaymentRepository } from "../repository";

export class PaymentGetUsecase {
  async execute(id: string): Promise<ResultDto> {
    const paymentRepository = new PaymentRepository();

    const payment = await paymentRepository.findPaymentById(id);

    if (!payment) return Result.error(400, "Cliente final não encontrado.");

    return Result.success(
      200,
      "Cliente final encontrado com sucesso.",
      payment.toJson()
    );
  }
}

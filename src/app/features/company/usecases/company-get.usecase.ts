import { Result, ResultDto } from "../../../shared/utils";
import { CompanyRepository } from "../repository";

export class CompanyGetUsecase {
  async execute(id: string): Promise<ResultDto> {
    const companyRepository = new CompanyRepository();

    const company = await companyRepository.findCompanyById(id);

    if (!company) return Result.error(400, "Cliente final não encontrado.");

    return Result.success(
      200,
      "Cliente final encontrado com sucesso.",
      company.toJson()
    );
  }
}

import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import {
  Client,
  Company,
  Info,
  Nfe,
  Payment,
  TotalValue,
} from "../../../models";
import {
  ClientEntity,
  CompanyEntity,
  InfoEntity,
  NfeEntity,
  PaymentEntity,
  TotalValueEntity,
} from "../../../shared/entities";
import { NfeCreateDto } from "../dtos";

export class NfeRepository {
  private _manager = DatabaseConnection.connection.manager;

  async nfeCreate(data: NfeCreateDto): Promise<Nfe> {
    const {
      nameClient,
      cpfClient,
      addressClient,
      districtClient,
      zipCodeClient,
      ufClient,
      cityClient,
      municipalRegistrationClient,
      phoneClient,
      nameCompany,
      socialReasonCompany,
      addressCompany,
      zipCodeCompany,
      cnpjCompany,
      numberCompany,
      itemInfo,
      textInfo,
      addressInfo,
      valueInfo,
      formOfPaymentPayment,
      valuePayment,
      maturityPayment,
      valueTotal,
    } = data;

    const nfeCreate = this._manager.create(NfeEntity, {
      nameClient,
      cpfClient,
      addressClient,
      districtClient,
      zipCodeClient,
      ufClient,
      cityClient,
      municipalRegistrationClient,
      phoneClient,
      nameCompany,
      socialReasonCompany,
      addressCompany,
      zipCodeCompany,
      cnpjCompany,
      numberCompany,
      itemInfo,
      textInfo,
      addressInfo,
      valueInfo,
      formOfPaymentPayment,
      valuePayment,
      maturityPayment,
      valueTotal,
    });

    const nfeCreated = await this._manager.save(nfeCreate);

    return (await this.findNfeById(nfeCreated.id)) as Nfe;
  }

  async findNfeById(id: string): Promise<Nfe | undefined> {
    const nfeFound = await this._manager.findOne(NfeEntity, {
      where: {
        id: id,
      },
    });

    if (!nfeFound) return undefined;

    return this.entityToModelNfe(nfeFound);
  }

  async listNfe(): Promise<Nfe[]> {
    const listOfNfe = await this._manager.find(NfeEntity);

    return listOfNfe.map((nfe) => this.entityToModelNfe(nfe));
  }

  async deleteNfe(id: string): Promise<void> {
    await this._manager.delete(NfeEntity, { id });
  }

  // private entityToModelFinalClient(dataDB: FinalClientEntity): FinalClient {
  //   const finalClient = new FinalClient(
  //     dataDB.id,
  //     this.entityToModelClient(dataDB.clientEntity as ClientEntity),
  //     this.entityToModelCompany(dataDB.companyEntity as CompanyEntity),
  //     this.entityToModelInfo(dataDB.infoEntity as InfoEntity),
  //     this.entityToModelPayment(dataDB.paymentEntity as PaymentEntity),
  //     this.entityToModelTotalValue(dataDB.totalValueEntity as TotalValueEntity)
  //   );

  //   return finalClient;
  // }

  private entityToModelClient(dataDB: ClientEntity): Client {
    const client = new Client(
      dataDB.id,
      dataDB.name,
      dataDB.cpf,
      dataDB.address,
      dataDB.district,
      dataDB.zipCode,
      dataDB.uf,
      dataDB.city,
      dataDB.municipalRegistration,
      dataDB.phone
      // this.entityToModelFinalClient(dataDB.finalClient)
    );
    return client;
  }

  private entityToModelCompany(dataDB: CompanyEntity): Company {
    const company = new Company(
      dataDB.id,
      dataDB.name,
      dataDB.socialReason,
      dataDB.address,
      dataDB.zipCode,
      dataDB.cnpj,
      dataDB.number
      // this.entityToModelFinalClient(dataDB.finalClient)
    );

    return company;
  }

  private entityToModelInfo(dataDB: InfoEntity): Info {
    const info = new Info(
      dataDB.id,
      dataDB.item,
      dataDB.text,
      dataDB.address,
      dataDB.value
      // this.entityToModelFinalClient(dataDB.finalClient)
    );

    return info;
  }

  private entityToModelPayment(dataDB: PaymentEntity): Payment {
    const payment = new Payment(
      dataDB.id,
      dataDB.formOfPayment,
      dataDB.value,
      dataDB.maturity
      // this.entityToModelFinalClient(dataDB.finalClient)
    );

    return payment;
  }

  private entityToModelTotalValue(dataDB: TotalValueEntity): TotalValue {
    const totalValue = new TotalValue(
      dataDB.id,
      dataDB.value
      // this.entityToModelFinalClient(dataDB.finalClient)
    );

    return totalValue;
  }
  private entityToModelNfe(dataDB: NfeEntity): Nfe {
    return new Nfe(
      dataDB.id,
      dataDB.nameClient,
      dataDB.cpfClient,
      dataDB.addressClient,
      dataDB.districtClient,
      dataDB.zipCodeClient,
      dataDB.ufClient,
      dataDB.cityClient,
      dataDB.municipalRegistrationClient,
      dataDB.phoneClient,
      dataDB.nameCompany,
      dataDB.socialReasonCompany,
      dataDB.addressCompany,
      dataDB.zipCodeCompany,
      dataDB.cnpjCompany,
      dataDB.numberCompany,
      dataDB.itemInfo,
      dataDB.textInfo,
      dataDB.addressInfo,
      dataDB.valueInfo,
      dataDB.formOfPaymentPayment,
      dataDB.valuePayment,
      dataDB.maturityPayment,
      dataDB.valueTotal,
      dataDB.createdAt
    );
  }
}

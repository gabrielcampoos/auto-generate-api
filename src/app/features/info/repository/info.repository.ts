import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { Client, Company, Info, Payment, TotalValue } from "../../../models";
import {
  ClientEntity,
  CompanyEntity,
  InfoEntity,
  PaymentEntity,
  TotalValueEntity,
} from "../../../shared/entities";
import { InfoCreateDto } from "../dtos";

export class InfoRepository {
  private _manager = DatabaseConnection.connection.manager;

  async infoCreate(data: InfoCreateDto): Promise<Info> {
    const { item, text, address, value } = data;

    const infoCreate = this._manager.create(InfoEntity, {
      item,
      text,
      address,
      value,
    });

    const infoCreated = await this._manager.save(infoCreate);

    return (await this.findInfoById(infoCreated.id)) as Info;
  }

  async findInfoById(
    idInfo: string,
    idFinalClient?: string
  ): Promise<Info | undefined> {
    const infoFound = await this._manager.findOne(InfoEntity, {
      where: {
        id: idInfo,
      },
      // relations: {
      //   finalClient: true,
      // },
    });

    if (!infoFound) return undefined;

    return this.entityToModelInfo(infoFound);
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
}

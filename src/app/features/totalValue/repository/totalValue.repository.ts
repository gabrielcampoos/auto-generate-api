import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { Client, Company, Info, Payment, TotalValue } from "../../../models";
import {
  ClientEntity,
  CompanyEntity,
  InfoEntity,
  PaymentEntity,
  TotalValueEntity,
} from "../../../shared/entities";
import { TotalValueCreateDto } from "../dtos";

export class TotalValueRepository {
  private _manager = DatabaseConnection.connection.manager;

  async totalValueCreate(data: TotalValueCreateDto): Promise<TotalValue> {
    const { value } = data;

    const totalValueCreate = this._manager.create(TotalValueEntity, {
      value,
    });

    const totalValueCreated = await this._manager.save(totalValueCreate);

    return (await this.findTotalValueById(totalValueCreated.id)) as TotalValue;
  }

  async findTotalValueById(
    idTotalValue: string,
    idFinalClient?: string
  ): Promise<TotalValue | undefined> {
    const totalValueFound = await this._manager.findOne(TotalValueEntity, {
      where: {
        id: idTotalValue,
      },
      // relations: {
      //   finalClient: true,
      // },
    });

    if (!totalValueFound) return undefined;

    return this.entityToModelTotalValue(totalValueFound);
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

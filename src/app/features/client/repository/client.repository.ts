import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { Client, Company, Info, Payment, TotalValue } from "../../../models";
import {
  ClientEntity,
  CompanyEntity,
  InfoEntity,
  PaymentEntity,
  TotalValueEntity,
} from "../../../shared/entities";
import { ClientCreateDto } from "../dtos";

export class ClientRepository {
  private _manager = DatabaseConnection.connection.manager;

  async clientCreate(data: ClientCreateDto): Promise<Client> {
    const {
      name,
      cpf,
      address,
      district,
      zipCode,
      uf,
      city,
      municipalRegistration,
      phone,
    } = data;

    const clientCreate = this._manager.create(ClientEntity, {
      name,
      cpf,
      address,
      district,
      zipCode,
      uf,
      city,
      municipalRegistration,
      phone,
    });

    const clientCreated = await this._manager.save(clientCreate);

    return (await this.findClientById(clientCreated.id)) as Client;
  }

  async findClientById(
    idClient: string,
    idFinalClient?: string
  ): Promise<Client | undefined> {
    const clientFound = await this._manager.findOne(ClientEntity, {
      where: {
        id: idClient,
      },
      // relations: {
      //   finalClient: true,
      // },
    });

    if (!clientFound) return undefined;

    return this.entityToModelClient(clientFound);
  }

  async listClient(): Promise<Client[]> {
    const listOfClients = await this._manager.find(ClientEntity);

    return listOfClients.map((client) => this.entityToModelClient(client));
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

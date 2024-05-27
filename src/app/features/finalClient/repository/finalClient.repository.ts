// import { randomUUID } from "crypto";
// import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
// import {
//   Client,
//   Company,
//   FinalClient,
//   FinalClientJson,
//   Info,
//   Payment,
//   TotalValue,
// } from "../../../models";
// import {
//   ClientEntity,
//   CompanyEntity,
//   FinalClientEntity,
//   InfoEntity,
//   PaymentEntity,
//   TotalValueEntity,
// } from "../../../shared/entities";
// import { FinalClientCreateDto } from "../dtos";

// export class FinalClientRepository {
//   private _manager = DatabaseConnection.connection.manager;

//   async finalClientCreate(
//     data: FinalClientCreateDto
//   ): Promise<FinalClient | undefined> {
//     const { client, company, info, payment, totalValue } = data;

//     const finalClientCreate = this._manager.create(FinalClientEntity, {
//       client,
//       company,
//       info,
//       payment,
//       totalValue,
//     });

//     const finalClientCreated = await this._manager.save(finalClientCreate);

//     return this.entityToModelFinalClient(finalClientCreated);
//   }

//   async findClientById(idClient?: string): Promise<Client | undefined> {
//     const clientFound = await this._manager.findOne(ClientEntity, {
//       where: {
//         id: idClient,
//       },
//     });

//     if (!clientFound) return undefined;

//     return this.entityToModelClient(clientFound);
//   }

//   async findCompanyById(idCompany: string): Promise<Company | undefined> {
//     const companyFound = await this._manager.findOne(CompanyEntity, {
//       where: {
//         id: idCompany,
//       },
//     });

//     if (!companyFound) return undefined;

//     return this.entityToModelCompany(companyFound);
//   }

//   async findInfoById(idInfo: string): Promise<Info | undefined> {
//     const infoFound = await this._manager.findOne(InfoEntity, {
//       where: {
//         id: idInfo,
//       },
//     });

//     if (!infoFound) return undefined;

//     return this.entityToModelInfo(infoFound);
//   }

//   async findPaymentById(idPayment: string): Promise<Payment | undefined> {
//     const paymentFound = await this._manager.findOne(PaymentEntity, {
//       where: {
//         id: idPayment,
//       },
//     });

//     if (!paymentFound) return undefined;

//     return this.entityToModelPayment(paymentFound);
//   }

//   async findTotalValueById(
//     idTotalValue: string
//   ): Promise<TotalValue | undefined> {
//     const totalValueFound = await this._manager.findOne(TotalValueEntity, {
//       where: {
//         id: idTotalValue,
//       },
//     });

//     if (!totalValueFound) return undefined;

//     return this.entityToModelTotalValue(totalValueFound);
//   }

//   async listFinalClients(): Promise<FinalClient[]> {
//     const listFinalClients = await this._manager.find(FinalClientEntity);

//     return listFinalClients.map((finalClients) =>
//       this.entityToModelFinalClient(finalClients)
//     );
//   }

//   async findFinalClientById(
//     idFinalClient?: string
//   ): Promise<FinalClient | undefined> {
//     const finalClientFound = await this._manager.findOne(FinalClientEntity, {
//       where: {
//         id: idFinalClient,
//       },
//     });

//     if (!finalClientFound) return undefined;

//     return this.entityToModelFinalClient(finalClientFound);
//   }

//   private entityToModelFinalClient(dataDB: FinalClientEntity): FinalClient {
//     const finalClient = new FinalClient(
//       dataDB.id,
//       this.entityToModelClient(dataDB.clientEntity as ClientEntity),
//       this.entityToModelCompany(dataDB.companyEntity as CompanyEntity),
//       this.entityToModelInfo(dataDB.infoEntity as InfoEntity),
//       this.entityToModelPayment(dataDB.paymentEntity as PaymentEntity),
//       this.entityToModelTotalValue(dataDB.totalValueEntity as TotalValueEntity)
//     );

//     return finalClient;
//   }

//   private entityToModelClient(dataDB: ClientEntity): Client {
//     const client = new Client(
//       dataDB.id,
//       dataDB.name,
//       dataDB.cpf,
//       dataDB.address,
//       dataDB.district,
//       dataDB.zipCode,
//       dataDB.uf,
//       dataDB.city,
//       dataDB.municipalRegistration,
//       dataDB.phone,
//       this.entityToModelFinalClient(dataDB.finalClient)
//     );
//     return client;
//   }

//   private entityToModelCompany(dataDB: CompanyEntity): Company {
//     const company = new Company(
//       dataDB.id,
//       dataDB.name,
//       dataDB.socialReason,
//       dataDB.address,
//       dataDB.zipCode,
//       dataDB.cnpj,
//       dataDB.number,
//       this.entityToModelFinalClient(dataDB.finalClient)
//     );

//     return company;
//   }

//   private entityToModelInfo(dataDB: InfoEntity): Info {
//     const info = new Info(
//       dataDB.id,
//       dataDB.item,
//       dataDB.text,
//       dataDB.address,
//       dataDB.value,
//       this.entityToModelFinalClient(dataDB.finalClient)
//     );

//     return info;
//   }

//   private entityToModelPayment(dataDB: PaymentEntity): Payment {
//     const payment = new Payment(
//       dataDB.id,
//       dataDB.formOfPayment,
//       dataDB.value,
//       dataDB.maturity,
//       this.entityToModelFinalClient(dataDB.finalClient)
//     );

//     return payment;
//   }

//   private entityToModelTotalValue(dataDB: TotalValueEntity): TotalValue {
//     const totalValue = new TotalValue(
//       dataDB.id,
//       dataDB.value,
//       this.entityToModelFinalClient(dataDB.finalClient)
//     );

//     return totalValue;
//   }
// }

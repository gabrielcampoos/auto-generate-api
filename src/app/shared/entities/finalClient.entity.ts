// import { BeforeInsert, Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
// import { randomUUID } from "crypto";
// import { ClientEntity } from "./client.entity";
// import { CompanyEntity } from "./company.entity";
// import { InfoEntity } from "./info.entity";
// import { PaymentEntity } from "./payment.entity";
// import { TotalValueEntity } from "./totalValue.entity";

// @Entity({ name: "final_client" })
// export class FinalClientEntity {
//   @PrimaryColumn()
//   id!: string;

//   @Column({ type: "uuid", nullable: true })
//   client!: string;

//   @Column({ type: "uuid", nullable: true })
//   company!: string;

//   @Column({ type: "uuid", nullable: true })
//   info!: string;

//   @Column({ type: "uuid", nullable: true })
//   payment!: string;

//   @Column({ name: "total_value", type: "uuid", nullable: true })
//   totalValue!: string;

//   @OneToOne(() => ClientEntity, (entity) => entity.finalClient)
//   clientEntity?: ClientEntity;

//   @OneToOne(() => CompanyEntity, (entity) => entity.finalClient)
//   companyEntity?: CompanyEntity;

//   @OneToOne(() => InfoEntity, (entity) => entity.finalClient)
//   infoEntity?: InfoEntity;

//   @OneToOne(() => PaymentEntity, (entity) => entity.finalClient)
//   paymentEntity?: PaymentEntity;

//   @OneToOne(() => TotalValueEntity, (entity) => entity.finalClient)
//   totalValueEntity?: TotalValueEntity;

//   @BeforeInsert()
//   beforeInsert() {
//     this.id = randomUUID();
//   }
// }

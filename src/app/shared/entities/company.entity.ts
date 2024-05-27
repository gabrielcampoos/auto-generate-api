import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "company" })
export class CompanyEntity {
  @PrimaryColumn()
  id!: string;

  // @Column({ name: "id_final_client", type: "uuid", nullable: false })
  // idFinalClient!: string;

  @Column()
  name!: string;

  @Column({ name: "social_reason" })
  socialReason!: string;

  @Column()
  address!: string;

  @Column({ name: "zip_code" })
  zipCode!: string;

  @Column()
  cnpj!: string;

  @Column()
  number!: string;

  // @OneToOne(() => FinalClientEntity, (entity) => entity.companyEntity)
  // @JoinColumn({
  //   name: "id_final_client",
  //   foreignKeyConstraintName: "final_client_fk",
  //   referencedColumnName: "id",
  // })
  // finalClient!: FinalClientEntity;

  @BeforeInsert()
  beforeInsert() {
    this.id = randomUUID();
  }
}

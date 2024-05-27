import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "payment" })
export class PaymentEntity {
  @PrimaryColumn()
  id!: string;

  // @Column({ name: "id_final_client", type: "uuid", nullable: false })
  // idFinalClient!: string;

  @Column({ name: "form_of_payment" })
  formOfPayment!: string;

  @Column()
  value!: string;

  @Column()
  maturity!: string;

  // @OneToOne(() => FinalClientEntity, (entity) => entity.paymentEntity)
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

import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "total_value" })
export class TotalValueEntity {
  @PrimaryColumn()
  id!: string;

  // @Column({ name: "id_final_client", type: "uuid", nullable: false })
  // idFinalClient!: string;

  @Column()
  value!: string;

  // @OneToOne(() => FinalClientEntity, (entity) => entity.totalValueEntity)
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

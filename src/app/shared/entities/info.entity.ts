import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "info" })
export class InfoEntity {
  @PrimaryColumn()
  id!: string;

  // @Column({ name: "id_final_client", type: "uuid", nullable: false })
  // idFinalClient!: string;

  @Column({ type: "int4" })
  item!: number;

  @Column()
  text!: string;

  @Column()
  address!: string;

  @Column({ type: "float8" })
  value!: number;

  // @OneToOne(() => FinalClientEntity, (entity) => entity.infoEntity)
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

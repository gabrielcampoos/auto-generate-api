import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "client" })
export class ClientEntity {
  @PrimaryColumn()
  id!: string;

  // @Column({ name: "id_final_client", type: "uuid", nullable: false })
  // idFinalClient!: string;

  @Column()
  name!: string;

  @Column()
  cpf!: string;

  @Column()
  address!: string;

  @Column()
  district!: string;

  @Column({ name: "zip_code" })
  zipCode!: string;

  @Column()
  uf!: string;

  @Column()
  city!: string;

  @Column({ name: "municipal_registration" })
  municipalRegistration!: string;

  @Column()
  phone!: string;

  // @OneToOne(() => FinalClientEntity, (entity) => entity.clientEntity)
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

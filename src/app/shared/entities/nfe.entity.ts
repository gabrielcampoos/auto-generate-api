import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "nfe" })
export class NfeEntity {
  @PrimaryColumn()
  id!: string;

  @Column({ name: "name_client" })
  nameClient!: string;

  @Column({ name: "cpf_client" })
  cpfClient!: string;

  @Column({ name: "address_client" })
  addressClient!: string;

  @Column({ name: "district_client" })
  districtClient!: string;

  @Column({ name: "zip_code_client" })
  zipCodeClient!: string;

  @Column({ name: "uf_client" })
  ufClient!: string;

  @Column({ name: "city_client" })
  cityClient!: string;

  @Column({ name: "municipal_registration_client" })
  municipalRegistrationClient!: string;

  @Column({ name: "phone_client" })
  phoneClient!: string;

  @Column({ name: "name_company" })
  nameCompany!: string;

  @Column({ name: "social_reason_company" })
  socialReasonCompany!: string;

  @Column({ name: "address_company" })
  addressCompany!: string;

  @Column({ name: "zip_code_company" })
  zipCodeCompany!: string;

  @Column({ name: "cnpj_company" })
  cnpjCompany!: string;

  @Column({ name: "number_company" })
  numberCompany!: string;

  @Column({ name: "item_info", type: "int4" })
  itemInfo!: number;

  @Column({ name: "text_info" })
  textInfo!: string;

  @Column({ name: "address_info" })
  addressInfo!: string;

  @Column({ name: "value_info", type: "float8" })
  valueInfo!: number;

  @Column({ name: "form_of_payment_payment" })
  formOfPaymentPayment!: string;

  @Column({ name: "value_payment" })
  valuePayment!: string;

  @Column({ name: "maturity_payment" })
  maturityPayment!: string;

  @Column({ name: "value_total" })
  valueTotal!: string;

  @Column({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @BeforeInsert()
  beforeInsert() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableNfe1716610803510 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "nfe",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          {
            name: "name_client",
            type: "varchar",
            length: "255",
          },
          {
            name: "cpf_client",
            type: "varchar",
            length: "15",
          },
          {
            name: "address_client",
            type: "varchar",
            length: "100",
          },
          {
            name: "district_client",
            type: "varchar",
            length: "100",
          },
          {
            name: "zip_code_client",
            type: "varchar",
            length: "100",
          },
          {
            name: "uf_client",
            type: "varchar",
            length: "100",
          },
          {
            name: "city_client",
            type: "varchar",
            length: "100",
          },
          {
            name: "municipal_registration_client",
            type: "varchar",
            length: "100",
          },
          {
            name: "phone_client",
            type: "varchar",
            length: "50",
          },
          {
            name: "name_company",
            type: "varchar",
            length: "155",
          },
          {
            name: "social_reason_company",
            type: "varchar",
            length: "100",
          },
          {
            name: "address_company",
            type: "varchar",
            length: "100",
          },
          {
            name: "zip_code_company",
            type: "varchar",
            length: "50",
          },
          {
            name: "cnpj_company",
            type: "varchar",
            length: "50",
          },
          {
            name: "number_company",
            type: "varchar",
            length: "50",
          },
          {
            name: "item_info",
            type: "int4",
          },
          {
            name: "text_info",
            type: "varchar",
            length: "500",
          },
          {
            name: "address_info",
            type: "varchar",
            length: "100",
          },
          {
            name: "value_info",
            type: "float8",
          },
          {
            name: "form_of_payment_payment",
            type: "varchar",
            length: "100",
          },
          {
            name: "value_payment",
            type: "varchar",
            length: "100",
          },
          {
            name: "maturity_payment",
            type: "varchar",
            length: "100",
          },
          {
            name: "value_total",
            type: "varchar",
            length: "100",
          },
          {
            name: "created_at",
            type: "timestamp",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("nfe", true, true, true);
  }
}

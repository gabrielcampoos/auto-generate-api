import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCompany1716417108804 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "company",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            default: "uuid_generate_v4()",
          },
          // {
          //   name: "id_final_client",
          //   type: "uuid",
          //   isNullable: false,
          // },
          {
            name: "name",
            type: "varchar",
            length: "255",
          },
          {
            name: "social_reason",
            type: "varchar",
            length: "155",
          },
          {
            name: "address",
            type: "varchar",
            length: "100",
          },
          {
            name: "zip_code",
            type: "varchar",
            length: "50",
          },
          {
            name: "cnpj",
            type: "varchar",
            length: "100",
          },
          {
            name: "number",
            type: "varchar",
            length: "100",
          },
        ],
        // foreignKeys: [
        //   {
        //     columnNames: ["id_final_client"],
        //     referencedTableName: "final_client",
        //     referencedColumnNames: ["id"],
        //   },
        // ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("company", true, true, true);
  }
}

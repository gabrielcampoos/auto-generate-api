import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePayment1716417130325 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "payment",
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
            name: "form_of_payment",
            type: "varchar",
            length: "30",
          },
          {
            name: "value",
            type: "varchar",
            length: "100",
          },
          {
            name: "maturity",
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
    await queryRunner.dropTable("payment", true, true, true);
  }
}

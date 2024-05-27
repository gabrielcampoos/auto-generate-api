import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableTotalValue1716417138781 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "total_value",
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
            name: "value",
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
    await queryRunner.dropTable("total_value", true, true, true);
  }
}

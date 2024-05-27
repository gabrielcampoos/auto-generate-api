import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableInfo1716417120086 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "info",
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
            name: "item",
            type: "int4",
          },
          {
            name: "text",
            type: "text",
          },
          {
            name: "address",
            type: "varchar",
            length: "100",
          },
          {
            name: "value",
            type: "float8",
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
    await queryRunner.dropTable("info", true, true, true);
  }
}

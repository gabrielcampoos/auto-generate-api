import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableClient1716417152441 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
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
            name: "cpf",
            type: "varchar",
            length: "15",
          },
          {
            name: "address",
            type: "varchar",
            length: "100",
          },
          {
            name: "district",
            type: "varchar",
            length: "100",
          },
          {
            name: "zip_code",
            type: "varchar",
            length: "100",
          },
          {
            name: "uf",
            type: "varchar",
            length: "100",
          },
          {
            name: "city",
            type: "varchar",
            length: "100",
          },
          {
            name: "municipal_registration",
            type: "varchar",
            length: "100",
          },
          {
            name: "phone",
            type: "varchar",
            length: "50",
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
    await queryRunner.dropTable("client", true, true, true);
  }
}

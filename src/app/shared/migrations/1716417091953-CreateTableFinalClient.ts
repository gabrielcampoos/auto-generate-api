// import { MigrationInterface, QueryRunner, Table } from "typeorm";

// export class CreateTableFinalClient1716417091953 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: "final_client",
//         columns: [
//           {
//             name: "id",
//             type: "uuid",
//             isNullable: false,
//             isPrimary: true,
//           },
//           {
//             name: "client",
//             type: "uuid",
//             isNullable: true,
//           },
//           {
//             name: "company",
//             type: "uuid",
//             isNullable: true,
//           },
//           {
//             name: "info",
//             type: "uuid",
//             isNullable: true,
//           },
//           {
//             name: "payment",
//             type: "uuid",
//             isNullable: true,
//           },
//           {
//             name: "total_value",
//             type: "uuid",
//             isNullable: true,
//           },
//         ],
//       })
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropTable("final_client", true, true, true);
//   }
// }

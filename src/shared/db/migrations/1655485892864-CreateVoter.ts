import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVoter1655485892864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
             name: 'votting_system_voter',
             columns: [
                 {
                     name: "id",
                     type: "uuid",
                     isPrimary: true,
                     generationStrategy: "uuid",
                     default: 'uuid_generate_v4()'
                 },
                 {
                     name: "name",
                     type: "varchar",
                 },
                 {
                    name: "rg",
                    type: "varchar"
                 },
                 {
                     name: "birth_city",
                     type: "varchar"
                 },
                 {
                     name: "date_birthday",
                     type: "timestamp"
                 },
                 {
                     name: "district",
                     type: "varchar"
                 },
                 {
                     name: "city",
                     type: "varchar"
                 },
                 {
                     name: "candidate_id",
                     type: "uuid",
                     isNullable: true,
                 },
                 {
                     name: "created_at",
                     type: "timestamp with time zone",
                     default: "now()"
                 },
                 {
                     name: "updated_at",
                     type: "timestamp with time zone",
                     default: "now()"
                 }
             ],
             foreignKeys: [
                 {
                     name: "CandidateFK",
                     columnNames: ['candidate_id'],
                     referencedTableName: 'votting_system_candidate',
                     referencedColumnNames: ["id"],
                     onDelete: "SET NULL"
                 }
             ]
         }))
 
     }
 
     public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropForeignKey("votting_system_voter", "CandidateFK");
         await queryRunner.dropTable("votting_system_candidate");
     }

}

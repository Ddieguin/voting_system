import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCandidate1653330954689 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'votting_system_candidate',
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
                    name: "political_party",
                    type: "varchar"
                },
                {
                    name: "number_political_party",
                    type: "varchar"
                },
                {
                    name: "date_birthday",
                    type: "timestamp"
                },
                {
                    name: "city",
                    type: "varchar"
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
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("votting_system_voter", "CandidateFK");
        await queryRunner.dropTable('votting_system_voter');
    }

}
